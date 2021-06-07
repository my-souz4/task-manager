import { CorsOptions } from 'cors'

const corsConfig: CorsOptions = {
	origin: ['http://127.0.0.1', 'http://localhost'],

	credentials: false,

	methods: ['GET', 'HEAD', 'POST', 'PUT', 'DELETE', 'PATCH']
}

export { corsConfig }
