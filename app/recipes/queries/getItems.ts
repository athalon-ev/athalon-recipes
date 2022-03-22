import { Ctx } from 'blitz'
import { getItems } from 'app/recipes/recipes'
import * as path from 'path'

const recipesPath = path.resolve(__dirname, '../../../../../public/data/recipes')
const itemsPath = '/data/texturepack/assets/minecraft/textures/item'

const getItemsQuery = async (_ = null, ctx: Ctx) => {
	const recipes = await getItems(itemsPath, recipesPath)
	return recipes
}

export default getItemsQuery
