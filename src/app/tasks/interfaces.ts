export interface ITasksData {
	id: string
	title: string
	description: string
	urgent: number
	important: number
	category: 'DELETE' | 'DELEGATE' | 'DECIDE' | 'DO'
	status: 'DO' | 'DONE'
	createdAt: Date
	updatedAt: Date
}

export interface INewTasksData
	extends Omit<ITasksData, 'id' | 'createdAt' | 'updatedAt' | 'category'> {}
