import 'reflect-metadata'
import '@database/index'

import express from 'express'
import cors from 'cors'
import { corsConfig } from '@config/cors'
import { routes } from '@routes/index'

class App {
	express: express.Express

	constructor() {
		this.express = express()

		this.middlewares()
		this.routes()
	}

	middlewares() {
		this.express.use(express.json())
		this.express.use(cors(corsConfig))
	}

	routes() {
		this.express.use(routes)
	}
}

export const app = new App().express
