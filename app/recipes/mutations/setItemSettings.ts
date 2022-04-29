import { Ctx } from 'blitz'
import * as path from 'path'
import { ItemConfig } from '../types'
import { writeJson } from 'fs-extra'

const itemConfigPath = path.resolve(__dirname, '../../../../../public/data/itemconfig.json')


const setItemConfigMutation = async (input: ItemConfig, ctx: Ctx) => {
	await writeJson(itemConfigPath, input)
}

export default setItemConfigMutation
