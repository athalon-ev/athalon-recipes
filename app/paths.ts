import * as path from 'path'
export const recipesPath = path.resolve(process.env.PWD || '', 'public/data/recipes')
// export const itemsPath = path.resolve(process.env.PWD || '', 'public/data/texturepack/assets/minecraft/textures/item')
export const itemsPath = '/data/texturepack/assets/minecraft/textures/item'
export const itemConfigPath = path.resolve(process.env.PWD || '', 'public/data/itemconfig.json')
