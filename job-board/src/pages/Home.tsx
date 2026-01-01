import { useMemo, useState } from 'react'
import ResponsiveSidebar from '../components/ResponsiveSidebar'
import MobileHeader from '../components/MobileHeader'
import TopTabsHeader from '../components/TopTabsHeader'
import PromoPanel from '../components/PromoPanel'
import JobCard from '../features/jobs/JobCard'
import { useJobs } from '../features/jobs/useJobs'
import { useJobsStore } from '../store/jobsStore'

export default function Home() {
  const { data, isLoading } = useJobs()
  const { tab, liked, applied } = useJobsStore()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const jobs = useMemo(() => {
    const list = data ?? []
    return list.filter((j) => {
      if (tab === 'matched') return true
      if (tab === 'liked') return !!liked[j.id]
      if (tab === 'applied') return !!applied[j.id]
      return true
    })
  }, [data, tab, liked, applied])

  return (
    <div className="min-h-screen bg-[#F3F4F6]">
      <MobileHeader onOpen={() => setSidebarOpen(true)} />

      <div className="flex">
        <ResponsiveSidebar
          open={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        {/* Right side area: full-height layout with separate top bar */}
        <div className="flex-1 min-w-0 h-[100dvh] lg:h-screen flex flex-col">
          {/* TOP BAR (tabs) — full white strip */}
          <div className="shrink-0 bg-white border-b">
            <div className="max-w-[1200px] mx-auto px-4 lg:px-6 py-3">
              <TopTabsHeader />
            </div>
          </div>

          {/* CONTENT AREA */}
          <div className="flex-1 min-h-0">
            <div className="h-full max-w-[1200px] mx-auto px-4 lg:px-6 py-2 lg:py-3">
              <div className="h-full grid grid-cols-1 xl:grid-cols-[1fr_360px] gap-3 min-h-0">
                {/* MIDDLE: only this section scrolls */}
                <section className="min-h-0 overflow-y-auto pr-1">
                  <div className="flex flex-col gap-4">
                    {isLoading ? (
                      <div className="bg-white rounded-xl border p-6">Loading…</div>
                    ) : (
                      jobs.map((j) => <JobCard key={j.id} job={j} />)
                    )}
                  </div>
                </section>

                {/* RIGHT: fixed/sticky promo (not scrollable) */}
                <aside className="hidden xl:block">
                  {/* top-20 ≈ aligns with bottom of the white tabs bar */}
                  <div className="sticky">
                    {/* subtract top bar height + spacing */}
                    <div className="h-[calc(100vh-100px)] w-[360px]">
                      <PromoPanel />
                    </div>
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
