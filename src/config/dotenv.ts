import { config, DotenvParseOutput } from 'dotenv'

const dotenv: DotenvParseOutput = config({
	path:
		String(process.env.NODE_ENV).trim() === 'dev'
			? '.env.dev'
			: String(process.env.NODE_ENV).trim() === 'test'
			? '.env.test'
			: '.env'
}).parsed

export { dotenv }
