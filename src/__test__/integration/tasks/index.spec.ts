import request from 'supertest'
import faker from 'faker'

import { app } from '@src/app'
import { createConnection, getConnection } from 'typeorm'
import { INewTasksData } from '@src/app/tasks/interfaces'

describe('Task Manager', () => {
	const MAX_VALUE = 10

	beforeAll(async () => {
		await createConnection()
	})

	afterAll(async () => {
		const connection = getConnection()
		await connection.close()
	})

	it('must be able create a new task', async () => {
		const object: INewTasksData = {
			title: faker.lorem.sentences(),
			description: faker.lorem.paragraph(),
			important: Math.floor(Math.random() * (MAX_VALUE + 1)),
			urgent: Math.floor(Math.random() * (MAX_VALUE + 1))
		}

		const response = await request(app).post('/tasks/new').send(object)

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

		expect(response.body.category).toBe('DO')
	})
})
