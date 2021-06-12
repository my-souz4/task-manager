import 'dotenv'

declare module 'dotenv' {
	export interface DotenvParseOutput {
		PORT: number

		DB_TYPE: 'mysql' | 'sqlite' | 'oracledb' | 'postgres'
		DB_HOST: string
		DB_PORT: number
		DB_USERNAME: string
		DB_PASSWORD: string
		DB_DATABASE: string
		DB_LOGGING: 'true' | 'false'
		DB_SYNCHRONIZE: 'true' | 'false'
		DB_ENTITIES: string
		DB_MIGRATIONS: string
		DB_CLI_ENTITIES: string
		DB_CLI_MIGRATIONS: string
	}
}
