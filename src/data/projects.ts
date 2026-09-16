export interface Project {
  title: string
  description: string
  longDescription: string
  highlights?: string[]
  techStack: string[]
  links: {
    live?: string
    code?: string
  }
}

