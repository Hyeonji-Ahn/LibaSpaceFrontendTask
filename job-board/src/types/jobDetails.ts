// src/types/jobDetails.ts
import type { Job } from './job'

export type JobDetails = Job & {
  // hero / meta
  country?: string
  workType?: string // e.g., "Internship"
  levelLabel?: string // keep if you want a separate label
  salaryLabel?: string

  // content
  descriptionLong?: string

  // qualification
  qualificationIntro?: string
  qualificationChips?: string[]
  requiredBullets?: string[]
  preferredBullets?: string[]

  // responsibilities / benefits
  responsibilities?: string[]
  benefits?: string[]

  // company section
  companyInfo?: {
    name: string
    logoUrl?: string
    founded?: string
    hq?: string
    size?: string
    websiteLabel?: string
    about?: string
    socials?: {
      x?: string
      linkedin?: string
    }
  }
}
