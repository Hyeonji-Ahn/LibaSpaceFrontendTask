// src/api/jobDetails.ts
import type { JobDetails } from '../types/jobDetails'

// If you want: you can reuse the same logos you used in fetchJobs
import cursor from '../assets/CursorAI.png'
import simons from '../assets/Simons.png'
import backed from '../assets/backdBusiness.png'

const now = Date.now()

const mockJobDetails: Record<string, JobDetails> = {
  '1': {
    id: '1',
    title: 'Web Application Developer',
    company: 'Backd Business Funding',
    companyLogoUrl: backed,
    location: 'Austin, Texas Metropolitan Area',
    workMode: 'On-site',
    match: 64,
    tags: ['Full time', '0 of 3 skills match', 'Mid Level', '$65/yr - $70/yr'],
    postedAt: new Date(now - 60 * 60 * 1000).toISOString(),
    applicants: 25,

    // details-only fields
    country: 'United States',
    workType: 'Full time',
    salaryLabel: '$65/yr – $70/yr',
    levelLabel: 'Mid Level',

    descriptionLong:
      'Job description Job description Job description Job description Job description Job description...',

    qualificationIntro:
      'Discover how your skills align with the requirements of this position. Below is a detailed list of the essential skills needed for the role.',
    qualificationChips: [
      'React',
      'TypeScript',
      'REST APIs',
      'UI Engineering',
      'Testing',
      'Tailwind CSS',
      'CI/CD',
    ],
    requiredBullets: [
      '2+ years of frontend development experience',
      'Strong React + TypeScript fundamentals',
      'Experience shipping production UI and collaborating cross-functionally',
    ],
    preferredBullets: [
      'Experience with React Query or similar data fetching patterns',
      'Experience with design systems / component libraries',
    ],

    responsibilities: [
      'Build and maintain UI features with high attention to detail.',
      'Collaborate with product and design to refine workflows.',
      'Improve performance, accessibility, and developer experience.',
    ],

    benefits: [
      '🏡 Remote Flexibility',
      '📈 Equity Options',
      '🍱 Meal Vouchers',
      '🩺 Health Coverage',
    ],

    companyInfo: {
      name: 'Backd Business Funding',
      logoUrl: backed,
      founded: '2018',
      hq: 'Austin, TX, US',
      size: '51–200 employees',
      websiteLabel: 'Website',
      about:
        'Backd helps businesses access funding with streamlined underwriting and a modern customer experience...',
      socials: { x: '#', linkedin: '#' },
    },
  },

  '2': {
    id: '2',
    title: 'Software Engineer, Network Infrastructure',
    company: 'Cursor AI',
    companyLogoUrl: cursor,
    location: 'Sunnyvale, CA',
    workMode: 'On-site',
    match: 93,
    tags: ['Full time', '5+ years exp', 'Mid Level', '$161K/yr - $239K/yr'],
    postedAt: new Date(now - 2 * 60 * 60 * 1000).toISOString(),
    applicants: 25,

    country: 'United States',
    workType: 'Full time',
    salaryLabel: '$161K/yr – $239K/yr',
    levelLabel: 'Mid Level',
    descriptionLong:
      'Design, build, and operate network infrastructure for latency-sensitive systems...',
    qualificationIntro:
      'Below is a detailed list of the essential skills needed for the role.',
    qualificationChips: ['Networking', 'Linux', 'Go', 'Observability', 'Security'],
    requiredBullets: [
      'Experience operating network services at scale',
      'Strong debugging and systems fundamentals',
    ],
    preferredBullets: [
      'Experience with datacenter networking and automation',
      'SRE / on-call experience',
    ],
    responsibilities: [
      'Own reliability and performance across critical systems.',
      'Build tooling and automation for safe operations.',
    ],
    benefits: ['🌍 International Environment', '🧠 Mental Wellness', '📈 Equity'],
    companyInfo: {
      name: 'Cursor AI',
      logoUrl: cursor,
      founded: '2023',
      hq: 'Sunnyvale, CA, US',
      size: '11–50 employees',
      websiteLabel: 'Website',
      about:
        'Cursor AI builds developer tooling that accelerates software iteration with AI...',
      socials: { x: '#', linkedin: '#' },
    },
  },

  '3': {
    id: '3',
    title: 'Full-Stack Software Engineer (Web Developer)',
    company: 'Simons Foundation',
    companyLogoUrl: simons,
    location: 'New York, NY',
    workMode: 'On-site',
    match: 82,
    tags: ['Full time', '5+ years exp', 'Mid Level', '$125K/yr - $140K/yr'],
    postedAt: new Date(now - 6 * 60 * 60 * 1000).toISOString(),
    applicants: 18,

    country: 'United States',
    workType: 'Full time',
    salaryLabel: '$125K/yr – $140K/yr',
    levelLabel: 'Mid Level',
    descriptionLong:
      'Build and maintain web applications supporting research workflows and data pipelines...',
    qualificationIntro:
      'Discover how your skills align with the requirements of this position.',
    qualificationChips: [
      'React',
      'Node.js',
      'PostgreSQL',
      'APIs',
      'Testing',
      'DevOps',
    ],
    requiredBullets: [
      'Experience building full-stack web applications',
      'Comfortable with databases and API design',
    ],
    preferredBullets: ['Experience in data-heavy or research environments'],
    responsibilities: [
      'Ship user-facing features and internal tooling.',
      'Collaborate with stakeholders to define requirements.',
    ],
    benefits: ['🩺 Health Coverage', '🎂 Birthday Bliss', '📈 Equity Options'],
    companyInfo: {
      name: 'Simons Foundation',
      logoUrl: simons,
      founded: '1994',
      hq: 'New York, NY, US',
      size: '1001–5000 employees',
      websiteLabel: 'Website',
      about:
        'The Simons Foundation advances the frontiers of research in mathematics and the basic sciences...',
      socials: { x: '#', linkedin: '#' },
    },
  },
}

export async function fetchJobById(id: string): Promise<JobDetails> {
  await new Promise((r) => setTimeout(r, 450)) // simulate latency

  const found = mockJobDetails[id]
  if (!found) {
    // mimic API failure so UI can show not-found
    throw new Error(`Job not found: ${id}`)
  }
  return found
}
