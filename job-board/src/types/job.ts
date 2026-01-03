// src/types/job.ts
export type JobFitMetric = {
  label: string
  value: number // percent 0-100
}

export type JobFitItem = {
  title: string
  status: 'good' | 'warning'
  description: string
}

export type CompanyInfo = {
  name: string
  founded?: string
  hq?: string
  size?: string
  website?: string
}

export type JobDetails = {
  country?: string
  experience?: string
  internship?: string
  remote?: string
  salary?: string
  level?: string

  description?: string

  interviewCard?: {
    title: string
    subtitle: string
    bullets: Array<{ title: string; body: string }>
    cta: string
  }

  qualification?: {
    blurb: string
    chips: string[]
  }

  required?: string[]
  preferred?: string[]
  responsibilities?: string[]
  benefits?: string[]

  company?: {
    info: CompanyInfo
    overview: string
  }

  fit?: {
    metrics: JobFitMetric[]
    items: JobFitItem[]
  }
}

export type Job = {
  id: string
  title: string
  company: string
  companyLogoUrl?: string
  location: string
  workMode: string
  match: number
  tags: string[]
  postedAt: string // ISO
  applicants: number

  // NEW: details payload
  details?: JobDetails
}
