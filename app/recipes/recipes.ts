import * as fs from 'fs-extra'
import * as yaml from 'yaml'
import * as path from 'path'
import type {
	DenizenUnparsedScript,
	DenizenScript,
	DenizenUnparsedRecipe,
	DenizenRecipe,
	IndexedDenizenScript,
} from './types'

const parseDenizenScriptMaterial = (material: string): Partial<DenizenScript> => {
	if (!material) return {}
	const propertyString = material.match(/.*\[(.*)\]/)
	if (!propertyString) return {}
	// @ts-ignore
	const rawProperties = Object.fromEntries(propertyString[1].split(';').map((p) => p.split('=')))
	const { display, lore, ...properties } = rawProperties
	return {
		material: material.split('[')[0],
		...properties,
		...(display ? { 'display name': display } : {}),
		...(lore ? { lore: lore.split('li@el@').filter(String) } : {}),
	}
}

const parseDenizenScript = (script: DenizenUnparsedScript): DenizenScript => {
	console.log({ script })
	return {
		...script,
		...parseDenizenScriptMaterial(script.material),
		recipes: Object.values(script.recipes || {}).map((a) => parseDenizenRecipe(a)),
	}
}

const craftingSeparator = '|'

const parseDenizenRecipeInput = (recipe: DenizenUnparsedRecipe) => {
	if (recipe.type == 'shapeless')
		return { ...recipe, input: recipe.input.split(craftingSeparator) }
	if (recipe.type == 'shaped')
		return { ...recipe, input: recipe.input.map((i) => i.split(craftingSeparator)) }
	return { ...recipe, input: recipe.input }
}

const getItemPicturePath = (itemFolderPath: string, item: DenizenScript) =>
	path.join(
		itemFolderPath,
		`${item.material}${item.custom_model_data ? `/${item.custom_model_data}` : ''}.png`
	)

// @ts-ignore
const parseDenizenRecipe = (recipe: DenizenUnparsedRecipe): DenizenRecipe => ({
	...recipe,
	...parseDenizenRecipeInput(recipe),
})

const parseDenizenScripts = (itemFolderPath, scripts: string[]): IndexedDenizenScript[] =>
	Object.entries(
		scripts
			.map((c) => yaml.parse(c))
			.reduce<Record<string, DenizenUnparsedScript>>((acc, cur: any) => {
				return { ...acc, ...cur }
			}, {} as Record<string, DenizenUnparsedScript>)
	)
		.map(([id, script]) => ({ id, ...parseDenizenScript(script) }))
		.map((script) => ({
			...script,
			filepath: getItemPicturePath(itemFolderPath, script),
		}))

export const getItemsByRecipeInput = (
	items: Record<string, DenizenScript>,
	recipe: DenizenRecipe
) => {
	if (recipe.type == 'shapeless') return recipe.input.map((item) => items[item])
	if (recipe.type == 'shaped') return recipe.input.map((list) => list.map((item) => items[item]))
	return items[recipe.input]
}

const listAllFiles = async (dir: string) => {
	const dirents = await fs.readdir(dir, { withFileTypes: true })
	const files = await Promise.all(
		dirents.map((dirent) => {
			const res = path.resolve(dir, dirent.name)
			return dirent.isDirectory() ? listAllFiles(res) : res
		})
	)
	return Array.prototype.concat(...files)
}

const readAllFiles = async (folderpath: string) => {
	const paths = await listAllFiles(folderpath)
	return await Promise.all(
		paths.filter((p) => p.endsWith('.dsc')).map((p) => fs.readFile(p, 'utf-8'))
	)
}

export const getItems = async (itemFolderPath: string, recipesPath: string) => {
	const contents = await readAllFiles(recipesPath)
	return parseDenizenScripts(itemFolderPath, contents)
}

export const getRecipes = async (itemFolderPath: string, recipesPath: string) => {
	const items = await getItems(itemFolderPath, recipesPath)
	return items.flatMap((item) =>
		item.recipes.map((recipe) => ({
			...recipe,
			output: item,
		}))
	)
}
