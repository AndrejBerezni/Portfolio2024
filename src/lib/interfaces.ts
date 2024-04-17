export interface IProject {
  name: string
  pageLink: string
  ghLink: string
  mainImage: string
  desktopImages: string[]
  mobileImages: string[]
  shortDescription: string
  description: string
  stack: string[]
}

export interface IExperience {
  position: string
  company: string
  startDate: string
  endDate: string
  description: string[]
}
