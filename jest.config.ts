import { pathsToModuleNameMapper } from 'ts-jest/utils'
import { compilerOptions } from './tsconfig.json'

export default {
	moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
		prefix: '<rootDir>'
	}),
	testTimeout: 5000,
	testMatch: ['**/__test__/**/*.spec.ts'],
	testEnvironment: 'node',
	coverageProvider: 'v8',
	preset: 'ts-jest',
	clearMocks: true,
	collectCoverage: true,
	collectCoverageFrom: [
		'src/**',
		'!src/__test__/**',
		'!src/@types/**',
		'!**/interfaces.ts',
		'!src/database/migrations/**',
		'!src/config/dotenv.ts',
		'!src/index.ts'
	],
	coverageDirectory: 'src/__test__/coverage',
	bail: true
}
