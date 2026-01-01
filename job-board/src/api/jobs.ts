import type { Job } from '../types/job'
import cursor from '../assets/CursorAI.png'
import simons from '../assets/Simons.png'
import backed from '../assets/backdBusiness.png'

const now = Date.now()

const mockJobs: Job[] = [
  {
    id: '1',
    title: 'Web Application Developer',
    company: 'Backd Business Funding',
    companyLogoUrl: backed,
    location: 'Austin, Texas Metropolitan Area',
    workMode: 'On-site',
    match: 64,
    tags: ['Full time', '0 of 3 skills match', 'Mid Level', '$65/yr - $70/yr'],
    postedAt: new Date(now - 60 * 60 * 1000).toISOString(), // 1 hour ago
    applicants: 25,
  },
  {
    id: '2',
    title: 'Software Engineer, Network Infrastructure',
    company: 'Cursor AI',
    companyLogoUrl: cursor,
    location: 'Sunnyvale, CA',
    workMode: 'On-site',
    match: 93,
    tags: ['Full time', '5+ years exp', 'Mid Level', '$161K/yr - $239K/yr'],
    postedAt: new Date(now - 2 * 60 * 60 * 1000).toISOString(), // 2 hours ago
    applicants: 25,
  },
  {
    id: '3',
    title: 'Full-Stack Software Engineer (Web Developer)',
    company: 'Simons Foundation',
    companyLogoUrl: simons,
    location: 'New York, NY',
    workMode: 'On-site',
    match: 82,
    tags: ['Full time', '5+ years exp', 'Mid Level', '$125K/yr - $140K/yr'],
    postedAt: new Date(now - 6 * 60 * 60 * 1000).toISOString(), // 6 hours ago
    applicants: 18,
  },
]

export async function fetchJobs(): Promise<Job[]> {
  await new Promise((r) => setTimeout(r, 500)) // simulate network latency
  return mockJobs
}
