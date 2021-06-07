import { dotenv } from '@config/dotenv'

export default process.env.NODE_ENV !== 'test'
	? {
			name: 'default',
			type: dotenv.DB_TYPE,
			host: dotenv.DB_HOST,
			port: dotenv.DB_PORT,
			username: dotenv.DB_USERNAME,
			password: dotenv.DB_PASSWORD,
			database: dotenv.DB_DATABASE,
			logging: dotenv.DB_LOGGING === 'true',
			synchronize: dotenv.DB_SYNCHRONIZE === 'true',
			entities: [`./${dotenv.DB_ENTITIES}`],
			migrations: [`./${dotenv.DB_MIGRATIONS}`],
			cli: {
				entitiesDir: dotenv.DB_CLI_ENTITIES,
				migrationsDir: dotenv.DB_CLI_MIGRATIONS
			}
	  }
	: {
			name: 'default',
			type: dotenv.DB_TYPE,
			database: dotenv.DB_DATABASE,
			logging: dotenv.DB_LOGGING === 'true',
			synchronize: dotenv.DB_SYNCHRONIZE === 'true',
			entities: [dotenv.DB_ENTITIES],
			migrations: [dotenv.DB_MIGRATIONS],
			cli: {
				entitiesDir: dotenv.DB_CLI_ENTITIES,
				migrationsDir: dotenv.DB_CLI_MIGRATIONS
			}
	  }
