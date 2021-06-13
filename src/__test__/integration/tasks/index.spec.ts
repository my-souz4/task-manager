import request from 'supertest'

import { app } from '@src/app'
import { createConnection, getConnection } from 'typeorm'
import { Task } from '@test/factories'

describe('Task Manager', () => {
	beforeAll(async () => {
		await createConnection()
	})

	afterAll(async () => {
		const connection = getConnection()
		await connection.close()
	})

	it('must be able create a new task', async () => {
		const response = await request(app).post('/tasks/new').send(Task())

		expect(response.status).toBe(201)
		expect(response.body).toHaveProperty('id')
		expect(response.body).toHaveProperty('title')
		expect(response.body).toHaveProperty('description')
		expect(response.body).toHaveProperty('urgent')
		expect(response.body).toHaveProperty('important')
		expect(response.body).toHaveProperty('category')
		expect(response.body).toHaveProperty('status')
		expect(response.body).toHaveProperty('createdAt')
		expect(response.body).toHaveProperty('updatedAt')
	})

	it('must be able get all tasks', async () => {
		for (let index = 0; index < 9; index++) {
			await request(app).post('/tasks/new').send(Task())
		}

		const response = await request(app).get('/tasks/all')

		expect(response.status).toBe(200)
		expect(response.body).toHaveLength(10)
	})
})
