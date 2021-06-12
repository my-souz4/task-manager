import { category } from '@src/database/repositories/tasks'

describe('Task Manager', () => {
	it('must be able create a new task', async () => {
		const result = [category(1, 1), category(1, 9), category(9, 1), category(9, 9)]

		expect(result[0]).toBe('DELETE')
		expect(result[1]).toBe('DELEGATE')
		expect(result[2]).toBe('DECIDE')
		expect(result[3]).toBe('DO')
	})
})
