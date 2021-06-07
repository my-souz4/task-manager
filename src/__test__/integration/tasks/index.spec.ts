import request from 'supertest'

import { app } from '@src/app'

describe('Task Manager', () => {
	it('must be able create a new task', async () => {
		const response = await request(app).post('/tasks/new')

		expect(response.status).toBe(201)
	})
})
