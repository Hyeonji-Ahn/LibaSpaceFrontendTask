import { useEffect, useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ArrowLeft, Heart, Share2 } from 'lucide-react'

import ResponsiveSidebar from '../components/ResponsiveSidebar'
import MobileHeader from '../components/MobileHeader'
import TopTabsHeader from '../components/TopTabsHeader'

import { useJob } from '../features/jobs/useJobs'
import { useJobsStore } from '../store/jobsStore'
import { useUIStore } from '../store/uiStore'
import MatchRing from '../features/jobs/MatchRing'
import { formatPostedTime } from '../utils/times'

import JobFitPanel from '../components/JobFitPanel'

export default function JobDetailsPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const lockFit = useUIStore((s) => s.lockFit)

  // IMPORTANT: ensures paywall is shown immediately without refresh
  useEffect(() => {
    lockFit()
  }, [id, lockFit])

  const { data: job, isLoading, isError } = useJob(id)

  const liked = useJobsStore((s) => s.liked)
  const toggleLike = useJobsStore((s) => s.toggleLike)

  const isLiked = useMemo(() => (job ? !!liked[job.id] : false), [job, liked])

  return (
    <div className="h-screen bg-[#F3F4F6] flex flex-col">
      <MobileHeader onOpen={() => setSidebarOpen(true)} />

      <div className="flex flex-1 min-h-0">
        <ResponsiveSidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        {/* Main column */}
        <div className="flex-1 min-w-0 flex flex-col">
          {/* Top tabs strip: FULL WHITE BAR */}
          <div className="bg-white border-b">
            <div className="max-w-[1200px] mx-auto px-4 lg:px-6 py-3">
              <TopTabsHeader />
            </div>
          </div>

          {/* Body */}
          <div className="flex-1 min-h-0">
            <div className="max-w-[1200px] mx-auto h-full px-4 lg:px-6 py-4">
              <div className="h-full grid grid-cols-1 xl:grid-cols-[1fr_360px] gap-5">
                {/* LEFT: scrollable */}
                <section className="min-h-0 overflow-y-auto pr-1 space-y-5">
                  {/* Top action row (back + applicants + actions) */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => navigate(-1)}
                        className="h-9 w-9 rounded-full border border-gray-200 bg-white flex items-center justify-center hover:bg-gray-50 transition"
                        aria-label="Back"
                      >
                        <ArrowLeft className="h-4 w-4 text-gray-700" />
                      </button>

                      <span className="px-3 py-1 rounded-full bg-[#734AE2]/10 text-[#734AE2] text-[13px] font-medium">
                        {job?.applicants ?? 0} applicants
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        className="h-10 w-10 rounded-full border border-gray-200 bg-white flex items-center justify-center hover:bg-gray-50 transition"
                        aria-label="Share"
                      >
                        <Share2 className="h-4 w-4 text-gray-700" />
                      </button>

                      <button
                        type="button"
                        onClick={() => job && toggleLike(job.id)}
                        className="h-10 w-10 rounded-full border border-gray-200 bg-white flex items-center justify-center hover:bg-gray-50 transition"
                        aria-label="Like"
                      >
                        <Heart
                          className={[
                            'h-5 w-5',
                            isLiked ? 'fill-[#A68BFA] stroke-[#A68BFA]' : 'fill-none stroke-gray-500',
                          ].join(' ')}
                        />
                      </button>

                      <button
                        type="button"
                        className="h-10 px-5 rounded-full bg-[#111827] text-white text-[14px] font-medium hover:opacity-95 transition"
                      >
                        Apply Now
                      </button>
                    </div>
                  </div>

                  {/* Hero */}
                  <div className="bg-white rounded-2xl border border-gray-100 p-6">
                    {isLoading && <div className="text-sm text-gray-600">Loading…</div>}
                    {isError && <div className="text-sm text-red-600">Failed to load job.</div>}
                    {job && <JobHero job={job} />}
                  </div>

                  {/* Green “maximize interview success” block */}
                  <MaximizePanel />

                  {/* Sections */}
                  <SectionCard title="Qualification">
                    <p className="text-[13px] leading-5 text-gray-600">
                      Discover how your skills align with the requirements of this position. Below is a detailed list
                      of the essential skills needed for the role.
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {[
                        'Accidental Death and Dismemberment (AD&D)',
                        'Amazon Web Services (AWS)',
                        'Analysis Skills',
                        'DevOps',
                        'Apache ActiveMQ',
                        'Application Programming Interface (API)',
                        'Call Center',
                        'Change Control',
                      ].map((x) => (
                        <span
                          key={x}
                          className="px-3 py-1 rounded-full bg-gray-100 text-[12px] text-gray-700"
                        >
                          {x}
                        </span>
                      ))}
                    </div>

                    <div className="mt-5 space-y-4">
                      <BulletGroup title="Required" items={[
                        '3+ years of design experience',
                        '3+ years of delivering design solutions as a UX designer or interaction designer experience',
                        'Have an available online portfolio',
                        'Experience prototyping (HTML, XHTML, JavaScript, CSS, Flash or Flash Catalyst, or Axure)',
                      ]} />
                      <BulletGroup title="Preferred" items={[
                        '2+ years of mass-market consumer web / mobile products experience',
                        'Experience working in a collaborative team and working directly with developers for implementation of designs',
                      ]} />
                    </div>
                  </SectionCard>

                  <SectionCard title="Responsibilities">
                    <ul className="list-disc pl-5 space-y-3 text-[13px] leading-5 text-gray-700">
                      <li>
                        Collaborate closely with product management, engineering, sales, and research from concept to
                        delivery, setting UX guidelines and best practices.
                      </li>
                      <li>
                        Work in a start-up style environment where iteration is encouraged and design acumen is
                        demonstrated through end-to-end ownership.
                      </li>
                      <li>
                        Communicate complex interactive design concepts clearly across audiences and levels of the organization.
                      </li>
                      <li>
                        Earn trust with product managers to develop shared vision and use research/data to identify opportunities.
                      </li>
                    </ul>
                  </SectionCard>

                  <SectionCard title="Benefits">
                    <ul className="space-y-3 text-[13px] leading-5 text-gray-700">
                      <li>🏠 <span className="font-semibold">Remote Flexibility:</span> Work from wherever you’re most productive.</li>
                      <li>📈 <span className="font-semibold">Equity Options:</span> Become a shareholder through stock options.</li>
                      <li>🍽️ <span className="font-semibold">Meal Vouchers:</span> Enjoy an €8/day meal voucher.</li>
                      <li>🥪 <span className="font-semibold">Lunch at the Office:</span> Team lunches are on us.</li>
                      <li>🩺 <span className="font-semibold">Health Coverage:</span> Comprehensive support through assistance funds.</li>
                      <li>🎂 <span className="font-semibold">Birthday Bliss:</span> Extra day off for your birthday.</li>
                      <li>🧠 <span className="font-semibold">Mental Wellness:</span> Free access to psychological support.</li>
                      <li>🌎 <span className="font-semibold">International Environment:</span> Work with a diverse global team.</li>
                    </ul>
                  </SectionCard>

                  <SectionCard title="Company">
                    <div className="flex gap-4">
                      <div className="h-16 w-16 rounded-xl bg-gray-200 shrink-0" />
                      <div className="min-w-0">
                        <div className="text-[14px] font-semibold text-gray-900">Company name</div>
                        <div className="mt-2 text-[12px] text-gray-600">
                          Founded in 1979 • Carlsbad, California, US • 1001–5000 employees • Website
                        </div>
                        <p className="mt-3 text-[13px] leading-5 text-gray-700">
                          Placeholder company description. Replace with real data later (or add to mock API details).
                        </p>
                      </div>
                    </div>
                  </SectionCard>

                  <div className="h-6" />
                </section>

                {/* RIGHT: fixed/sticky fit panel */}
                <aside className="hidden xl:block min-h-0">
                  <div className="sticky top-4">
                    {/* If job is still loading, render a skeleton panel so layout stays stable */}
                    {job ? (
                      <JobFitPanel job={job} />
                    ) : (
                      <div className="rounded-2xl border border-gray-100 bg-white p-6">
                        <div className="h-5 w-56 bg-gray-200 rounded" />
                        <div className="mt-5 grid grid-cols-2 gap-4">
                          {Array.from({ length: 4 }).map((_, i) => (
                            <div key={i} className="h-24 rounded-xl border border-gray-100 bg-gray-50" />
                          ))}
                        </div>
                        <div className="mt-7 space-y-3">
                          <div className="h-4 w-40 rounded bg-gray-200" />
                          <div className="h-4 w-full rounded bg-gray-200" />
                          <div className="h-4 w-4/5 rounded bg-gray-200" />
                        </div>
                      </div>
                    )}
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function JobHero({ job }: { job: any }) {
  return (
    <div className="flex items-start justify-between gap-6">
      <div className="flex items-start gap-4 min-w-0">
        <div className="h-16 w-16 rounded-2xl bg-gray-100 flex items-center justify-center overflow-hidden shrink-0">
          {job.companyLogoUrl ? (
            <img src={job.companyLogoUrl} alt={job.company} className="h-full w-full object-contain bg-white" />
          ) : (
            <div className="h-full w-full bg-gray-200" />
          )}
        </div>

        <div className="min-w-0">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-gray-100 text-[12px] text-gray-700">
              {formatPostedTime(job.postedAt)}
            </span>
          </div>

          <h1 className="mt-2 text-[22px] leading-[28px] font-semibold text-gray-900 truncate">
            {job.title}
          </h1>

          <div className="mt-1 text-[14px] text-gray-500">{job.company}</div>

          <div className="mt-3 text-[13px] text-gray-600">
            {job.location} • {job.workMode}
          </div>

          <div className="mt-4 h-px bg-gray-100" />

          <p className="mt-4 text-[13px] leading-5 text-gray-700">
            Job description Job description Job description Job description Job description Job description…
            <span className="text-gray-400"> (replace with real text later)</span>
          </p>
        </div>
      </div>

      <div className="shrink-0">
        <MatchRing value={job.match} />
      </div>
    </div>
  )
}

function MaximizePanel() {
  return (
    <div className="bg-[#B7FD33] rounded-2xl p-6">
      <div className="flex items-start gap-4">
        <div className="h-10 w-10 rounded-xl bg-black/10 flex items-center justify-center shrink-0">
          <span className="text-[18px]">🤖</span>
        </div>

        <div className="min-w-0">
          <div className="text-[16px] font-semibold text-gray-900">
            Maximize your interview success
          </div>
          <p className="mt-1 text-[13px] leading-5 text-gray-800/70">
            Our platform simulates real interview scenarios, helping you refine your responses and boost your confidence.
          </p>
        </div>
      </div>

      <div className="mt-5 h-px bg-black/10" />

      <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-6">
        <InfoCol
          title="Job-Specific Simulations:"
          body="Practice with questions tailored to your target role, ensuring relevance and preparation."
        />
        <InfoCol
          title="Actionable Feedback"
          body="Get detailed analysis of your responses and practical, step-by-step improvement suggestions."
        />
        <InfoCol
          title="Boost Success Rates:"
          body="Perfect your interview skills and increase your chances of landing the job you want."
        />
      </div>

      <div className="mt-6 flex justify-end">
        <button className="h-10 px-5 rounded-full bg-[#111827] text-white text-[13px] font-medium hover:opacity-95 transition">
          Start Interview
        </button>
      </div>
    </div>
  )
}

function InfoCol({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <div className="text-[13px] font-semibold text-gray-900">{title}</div>
      <p className="mt-2 text-[12px] leading-5 text-gray-800/70">{body}</p>
    </div>
  )
}

function SectionCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6">
      <div className="text-[16px] font-semibold text-gray-900">{title}</div>
      <div className="mt-3">{children}</div>
    </div>
  )
}

function BulletGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <div className="text-[14px] font-semibold text-gray-900">{title}</div>
      <ul className="mt-2 list-disc pl-5 space-y-2 text-[13px] leading-5 text-gray-700">
        {items.map((x) => (
          <li key={x}>{x}</li>
        ))}
      </ul>
    </div>
  )
}
