import { Ctx } from 'blitz'
import { getItems } from 'app/recipes/recipes'
import * as path from 'path'
import { IndexedDenizenScript, ItemConfig } from '../types'
import { readJson } from 'fs-extra'

const recipesPath = path.resolve(__dirname, '../../../../../public/data/recipes')
const itemsPath = '/data/texturepack/assets/minecraft/textures/item'
const itemConfigPath = path.resolve(__dirname, '../../../../../public/data/itemconfig.json')

let recipes: IndexedDenizenScript[] = []

const getItemsQuery = async (_ = null, ctx: Ctx) => {
	const itemConfig: ItemConfig = await readJson(itemConfigPath)
	recipes = !recipes.length ? await getItems(itemsPath, recipesPath) : recipes
	return recipes.map(r => ({
		...r,
		hidden: itemConfig.hiddenItems.includes(r.id)
	}))
}

export default getItemsQuery
