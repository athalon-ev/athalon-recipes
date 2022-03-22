import { getRecipes } from "app/recipes/recipes"
import * as path from "path"
import { BlitzApiRequest, BlitzApiResponse } from "blitz"

const recipesPath = path.resolve(__dirname, "../../../../public/data/recipes")
const itemsPath = "/data/texturepack/assets/minecraft/textures/item"

const handler = async (req: BlitzApiRequest, res: BlitzApiResponse) => {
	const recipes = await getRecipes(itemsPath, recipesPath)
	res.statusCode = 200
	res.setHeader("Content-Type", "application/json")
	res.end(JSON.stringify(recipes))
}
export default handler
