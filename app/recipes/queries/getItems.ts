import { Ctx } from 'blitz'
import { getItems } from 'app/recipes/recipes'
import * as path from 'path'
import { IndexedDenizenScript } from '../types'

const recipesPath = path.resolve(__dirname, '../../../../../public/data/recipes')
const itemsPath = '/data/texturepack/assets/minecraft/textures/item'

let recipes: IndexedDenizenScript[] = []

const getItemsQuery = async (_ = null, ctx: Ctx) => {
	recipes = !recipes.length ? await getItems(itemsPath, recipesPath) : recipes
	return recipes
}

export default getItemsQuery
