import cvData from '~/assets/data/cv.json'

export interface Profile {
  name: string
  lastName: string
  title: string
  location: string
  email: string
  phone: string
  github: string
  linkedin: string
  website: string
  summary: string
  availability: string
  languages: string
  timezone: string
}

export interface Skill {
  name: string
  level: string
}

export interface Skills {
  frontend: Skill[]
  backend: Skill[]
  devops: Skill[]
}

export interface Experience {
  role: string
  company: string
  location: string
  period: string
  technologies: string[]
  accomplishments: string[]
}

export interface ProjectLinks {
  github?: string
  demo?: string
  npm?: string
}

export interface Project {
  year: string
  category: string
  status: string
  title: string
  description: string
  tags: string[]
  metric: string
  links?: ProjectLinks
  featured?: boolean
  locked?: boolean
}

export interface Education {
  degree: string
  institution: string
  location: string
  year: string
}

export interface Course {
  name: string
  provider: string
  year: string
}

export interface Training {
  name: string
  provider: string
  year: string
}

export const usePortfolioData = () => {
  const getProfile = (): Profile => cvData.profile
  const getSkills = (): Skills => cvData.skills
  const getExperience = (): Experience[] => cvData.experience
  const getProjects = (): Project[] => cvData.projects
  const getEducation = (): Education[] => cvData.education
  const getCourses = (): Course[] => cvData.courses
  const getTrainings = (): Training[] => cvData.trainings

  return {
    getProfile,
    getSkills,
    getExperience,
    getProjects,
    getEducation,
    getCourses,
    getTrainings
  }
}
