export type JobTab = 'matched' | 'liked' | 'applied'

export type Job = {
  id: string
  title: string
  company: string
  companyLogoUrl: string
  location: string
  workMode: 'On-site' | 'Remote' | 'Hybrid'
  match: number // 0-100
  tags: string[]
  postedAt: string // ISO timestamp
  applicants: number
}
