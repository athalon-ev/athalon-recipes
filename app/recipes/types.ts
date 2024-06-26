export interface ItemConfig {
	hiddenItems: string[]
}

export interface DenizenUnparsedRecipeShapeless {
	type: 'shapeless'
	input: string
}

export interface DenizenUnparsedRecipeShaped {
	type: 'shaped'
	input: string[]
}

export interface DenizenUnparsedRecipeFurnace {
	type: 'furnace'
	cook_time: string
	input: string
}

export interface DenizenUnparsedRecipeBlast {
	type: 'blast'
	cook_time: string
	input: string
}

export interface DenizenUnparsedRecipeStonecutting {
	type: 'stonecutting'
	input: string
}

export type DenizenUnparsedRecipe = (
	| DenizenUnparsedRecipeShapeless
	| DenizenUnparsedRecipeShaped
	| DenizenUnparsedRecipeFurnace
	| DenizenUnparsedRecipeBlast
	| DenizenUnparsedRecipeStonecutting
) & {
	output_quantity: number
}

export interface DenizenRecipeShapeless {
	type: 'shapeless'
	input: string[]
}

export interface DenizenRecipeShaped {
	type: 'shaped'
	input: string[][]
}

export interface DenizenRecipeFurnace {
	type: 'furnace'
	cook_time: string
	input: string
}

export interface DenizenRecipeBlast {
	type: 'blast'
	cook_time: string
	input: string
}

export interface DenizenRecipeStonecutting {
	type: 'stonecutting'
	input: string
}

export type DenizenRecipe = (
	| DenizenRecipeShapeless
	| DenizenRecipeShaped
	| DenizenRecipeFurnace
	| DenizenRecipeStonecutting
) & {
	output_quantity: number
	recipe_id: string
	lore?: string
	output: DenizenRecipe
}

export interface DenizenScriptBase {
	type: 'item'
	color: string
	no_id?: boolean
	material: string
	mechanisms?: {
		custom_model_data: string
	}
	'display name': string
	lore: string | (string | Record<string, string>)[]
	recipes: Record<string, any>
}

export interface DenizenScript extends DenizenScriptBase {
	recipes: DenizenRecipe[]
}

export interface IndexedDenizenScript extends DenizenScript {
	id: string
	filepath: string
	fallbackFilepath: string
}

export interface DenizenUnparsedScript extends DenizenScriptBase {
	recipes: Record<string, DenizenUnparsedRecipe>
}
