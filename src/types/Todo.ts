export interface Todo {
  id: string
  status: Status
  title: string
  description: string
  dueDate: string
}

export type Status = 'done' | 'pending' | undefined
