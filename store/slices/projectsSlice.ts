import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

export interface Project {
  id: string
  title: string
  description: string
  image?: string
  technologies: string[]
  link?: string
  github?: string
}

interface ProjectsState {
  items: Project[]
}

const initialState: ProjectsState = {
  items: [
    {
      id: "1",
      title: "Proyecto destacado 1",
      description: "Aplicación web moderna con React y Node.js",
      technologies: ["React", "Node.js", "PostgreSQL", "Tailwind"],
    },
    {
      id: "2",
      title: "Proyecto destacado 2",
      description: "Dashboard interactivo con visualización de datos",
      technologies: ["React", "D3.js", "Express", "MongoDB"],
    },
  ],
}

const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    addProject: (state, action: PayloadAction<Project>) => {
      state.items.push(action.payload)
    },
  },
})

export const { addProject } = projectsSlice.actions
export default projectsSlice.reducer
