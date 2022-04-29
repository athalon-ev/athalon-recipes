import { Ctx } from 'blitz'
import { ItemConfig } from '../types'
import { writeJson } from 'fs-extra'
import { itemConfigPath } from 'app/paths'

const setItemConfigMutation = async (input: ItemConfig, ctx: Ctx) => {
	await writeJson(itemConfigPath, input)
}

export default setItemConfigMutation
