// Definición de tipos
export type Task = {
    id: number
    name: string
    date: string
    status: 'pending' | 'in-progress' | 'completed'
  }
  
  export type Project = {
    id: number
    name: string
    tasks: Task[]
    progress: number
  }
  
  export type User = {
    name: string
    email: string
    avatar: string
  }
  
  export const projects:Project[] = [
    { id: 1, name: "Proyecto Nero 1", tasks: [], progress: 0 },
    { id: 2, name: "Proyecto Nero 2", tasks: [], progress: 25 },
  ];