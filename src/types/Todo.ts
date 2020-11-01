export interface Todo {
  id: string
  status: Status
  title: string
  description: string
}

export type Status = 'done' | 'pending' | undefined
