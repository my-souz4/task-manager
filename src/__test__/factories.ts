import faker from 'faker'

import { INewTasksData } from '@src/app/tasks/interfaces'

const MAX_VALUE = 10

const Task = {
	atributes: {
		title: faker.lorem.sentences(),
		description: faker.lorem.paragraph(),
		important: Math.floor(Math.random() * (MAX_VALUE + 1)),
		urgent: Math.floor(Math.random() * (MAX_VALUE + 1)),
		status: 'DO'
	} as INewTasksData
}

export { Task }
