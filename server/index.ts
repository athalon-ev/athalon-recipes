import blitz from "blitz/custom-server"
import { createServer } from "http"
import { parse } from "url"
import db from "db"

const { PORT = "3000" } = process.env
const dev = process.env.NODE_ENV !== "production"
const app = blitz({ dev })
const handle = app.getRequestHandler()

console.log("create - server")
db.$use(async (params, next) => {
	const result = await next(params)
	return result
})

app.prepare().then(() => {
	createServer((req, res) => {
		const parsedUrl = parse(req.url!, true)
		handle(req, res, parsedUrl)
	}).listen(PORT, () => {
		console.log(`Ready on http://localhost:${PORT}`)
	})
})
