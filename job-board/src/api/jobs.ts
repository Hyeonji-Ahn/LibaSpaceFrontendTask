// src/api/jobs.ts
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
    postedAt: new Date(now - 60 * 60 * 1000).toISOString(),
    applicants: 25,
    details: {
      country: 'United States',
      experience: '0–2 years exp',
      internship: 'Full-time',
      remote: 'On-site',
      salary: '$65/yr – $70/yr',
      level: 'Mid Level',
      description:
        'We’re looking for a Web Application Developer to help build and maintain customer-facing web experiences. You will collaborate with design and product to ship features quickly and safely.',

      interviewCard: {
        title: 'Maximize your interview success',
        subtitle:
          'Our platform simulates real interview scenarios, helping you refine your responses and boost your confidence.',
        bullets: [
          {
            title: 'Job-Specific Simulations:',
            body: 'Practice with questions tailored to your target role, ensuring relevance and preparation.',
          },
          {
            title: 'Actionable Feedback:',
            body: 'Get detailed analysis of your responses and practical, step-by-step improvement suggestions.',
          },
          {
            title: 'Boost Success Rates:',
            body: 'Perfect your interview skills and increase your chances of landing the job you want.',
          },
        ],
        cta: 'Start Interview',
      },

      qualification: {
        blurb:
          'Discover how your skills align with the requirements of this position. Below is a detailed list of the essential skills needed for the role.',
        chips: [
          'React',
          'TypeScript',
          'REST APIs',
          'UI Engineering',
          'Tailwind CSS',
          'Testing',
          'Accessibility',
        ],
      },

      required: [
        '1+ years of experience building web applications',
        'Strong knowledge of HTML/CSS/JavaScript',
        'Experience with React and component-driven UI development',
        'Comfort working with APIs and state management',
      ],
      preferred: [
        'Experience with design systems',
        'Familiarity with React Query and modern data fetching patterns',
        'CI/CD and production debugging experience',
      ],
      responsibilities: [
        'Build, test, and ship frontend features with React and TypeScript',
        'Collaborate closely with product/design to iterate quickly',
        'Maintain high-quality UI and accessibility standards',
        'Work with backend partners to integrate APIs and improve performance',
      ],
      benefits: [
        'Remote flexibility depending on team needs',
        'Health coverage',
        'Learning budget',
        'Flexible PTO',
      ],

      company: {
        info: {
          name: 'Backd Business Funding',
          founded: '2018',
          hq: 'Austin, TX',
          size: '51–200 employees',
          website: 'backdbusiness.com',
        },
        overview:
          'Backd Business Funding helps small businesses access funding and manage cash flow with modern financial tools.',
      },

      fit: {
        metrics: [
          { label: 'Education', value: 93 },
          { label: 'Work Exp', value: 80 },
          { label: 'Skills', value: 93 },
          { label: 'Exp. Level', value: 44 },
        ],
        items: [
          {
            title: 'Relevant Experience',
            status: 'good',
            description:
              'Your background aligns well with the responsibilities for this role and similar project experience.',
          },
          {
            title: 'Seniority',
            status: 'good',
            description:
              'Your experience level is in line with the target level; you’re positioned competitively.',
          },
          {
            title: 'Education',
            status: 'warning',
            description:
              'Some roles prefer specific degree backgrounds; highlight relevant coursework and projects.',
          },
        ],
      },
    },
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
    postedAt: new Date(now - 2 * 60 * 60 * 1000).toISOString(),
    applicants: 25,
    details: {
      country: 'United States',
      experience: '5+ years exp',
      internship: 'Full-time',
      remote: 'On-site',
      salary: '$161K/yr – $239K/yr',
      level: 'Mid Level',
      description:
        'Design and ship network infrastructure systems with a focus on reliability, performance, and security.',
      interviewCard: {
        title: 'Maximize your interview success',
        subtitle:
          'Practice realistic questions and get actionable feedback to improve your responses.',
        bullets: [
          {
            title: 'System Design:',
            body: 'Practice architecture tradeoffs, scaling, and reliability.',
          },
          {
            title: 'Deep Dives:',
            body: 'Sharpen networking fundamentals and troubleshooting.',
          },
          {
            title: 'Behavioral:',
            body: 'Communicate impact and leadership clearly.',
          },
        ],
        cta: 'Start Interview',
      },
      qualification: {
        blurb:
          'Below are core skills used for evaluation in this position.',
        chips: ['Networking', 'Linux', 'Distributed Systems', 'Security', 'Go', 'Observability'],
      },
      required: [
        '5+ years of professional engineering experience',
        'Strong networking fundamentals',
        'Experience building reliable systems in production',
      ],
      preferred: ['Kubernetes experience', 'Go/Rust experience', 'SRE collaboration'],
      responsibilities: [
        'Build network systems and tooling',
        'Improve latency/reliability in production',
        'Partner with SRE and security to ship safely',
      ],
      benefits: ['Equity options', 'Health coverage', '401(k)', 'Flexible PTO'],
      company: {
        info: {
          name: 'Cursor AI',
          founded: '2022',
          hq: 'Sunnyvale, CA',
          size: '11–50 employees',
          website: 'cursor.com',
        },
        overview:
          'Cursor builds AI-powered developer tools to accelerate software teams.',
      },
      fit: {
        metrics: [
          { label: 'Education', value: 93 },
          { label: 'Work Exp', value: 93 },
          { label: 'Skills', value: 95 },
          { label: 'Exp. Level', value: 88 },
        ],
        items: [
          {
            title: 'Relevant Experience',
            status: 'good',
            description:
              'You match the core infrastructure scope and have strong relevant skills.',
          },
          {
            title: 'Seniority',
            status: 'good',
            description:
              'Your experience is strongly aligned with the role expectations.',
          },
          {
            title: 'Education',
            status: 'good',
            description:
              'Your education aligns well; emphasize systems coursework and projects.',
          },
        ],
      },
    },
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
    postedAt: new Date(now - 6 * 60 * 60 * 1000).toISOString(),
    applicants: 18,
    details: {
      country: 'United States',
      experience: '5+ years exp',
      internship: 'Full-time',
      remote: 'On-site',
      salary: '$125K/yr – $140K/yr',
      level: 'Mid Level',
      description:
        'Build and maintain full-stack web applications supporting internal research and operations.',
      interviewCard: {
        title: 'Maximize your interview success',
        subtitle:
          'Practice role-specific questions and get actionable feedback.',
        bullets: [
          { title: 'Web Systems:', body: 'Full-stack fundamentals and architecture.' },
          { title: 'APIs:', body: 'Design robust service boundaries and contracts.' },
          { title: 'Delivery:', body: 'Write maintainable code and ship incrementally.' },
        ],
        cta: 'Start Interview',
      },
      qualification: {
        blurb: 'Skills relevant to this role.',
        chips: ['React', 'Node.js', 'SQL', 'TypeScript', 'Testing', 'DevOps'],
      },
      required: [
        '5+ years experience building web applications',
        'Experience with TypeScript and modern frontend',
        'Backend and database fundamentals',
      ],
      preferred: ['GraphQL experience', 'Monitoring/observability', 'Cloud experience'],
      responsibilities: [
        'Develop features end-to-end',
        'Maintain reliability and performance',
        'Collaborate across stakeholders',
      ],
      benefits: ['Health coverage', 'Retirement plan', 'PTO', 'Commuter benefits'],
      company: {
        info: {
          name: 'Simons Foundation',
          founded: '1994',
          hq: 'New York, NY',
          size: '501–1000 employees',
          website: 'simonsfoundation.org',
        },
        overview:
          'The Simons Foundation supports research in mathematics and the basic sciences.',
      },
      fit: {
        metrics: [
          { label: 'Education', value: 90 },
          { label: 'Work Exp', value: 75 },
          { label: 'Skills', value: 82 },
          { label: 'Exp. Level', value: 66 },
        ],
        items: [
          {
            title: 'Relevant Experience',
            status: 'good',
            description:
              'Your frontend + systems experience maps well to shipping internal tools.',
          },
          {
            title: 'Seniority',
            status: 'warning',
            description:
              'Emphasize ownership and any mentorship/leadership experiences.',
          },
          {
            title: 'Education',
            status: 'good',
            description:
              'Highlight any CS/engineering coursework and project work.',
          },
        ],
      },
    },
  },
]

function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms))
}

export async function fetchJobs(): Promise<Job[]> {
  await sleep(500)
  return mockJobs
}

export async function fetchJobById(jobId: string): Promise<Job> {
  await sleep(350)
  const job = mockJobs.find((j) => j.id === jobId)
  if (!job) throw new Error('Job not found')
  return job
}
