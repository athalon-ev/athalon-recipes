import { Ctx } from "blitz"
import { getRecipes } from "app/recipes/recipes"
import * as path from "path"

const recipesPath = path.resolve(__dirname, "../../../../../public/data/recipes")
const itemsPath = "/data/texturepack/assets/minecraft/textures/item"

const getRecipesQuery = async (_ = null, ctx: Ctx) => {
	const recipes = await getRecipes(itemsPath, recipesPath)
	return recipes
}

export default getRecipesQuery
