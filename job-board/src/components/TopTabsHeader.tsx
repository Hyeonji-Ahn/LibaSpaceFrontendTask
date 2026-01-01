import { useMemo } from 'react'
import { useJobsStore, type JobTab } from '../store/jobsStore'
import { useJobs } from '../features/jobs/useJobs'

const TABS: { key: JobTab; label: string }[] = [
  { key: 'matched', label: 'Matched' },
  { key: 'liked', label: 'Liked' },
  { key: 'applied', label: 'Applied' },
]

export default function TopTabsHeader() {
  const tab = useJobsStore((s) => s.tab)
  const setTab = useJobsStore((s) => s.setTab)
  const liked = useJobsStore((s) => s.liked)
  const applied = useJobsStore((s) => s.applied)

  const { data = [] } = useJobs()

  const counts = useMemo(() => {
    return {
      matched: data.length,
      liked: data.filter((j) => liked[j.id]).length,
      applied: data.filter((j) => applied[j.id]).length,
    }
  }, [data, liked, applied])

  return (
    <div className="bg-white rounded-xl px-4 py-3">
      <div className="flex items-center">
        {TABS.map((t, idx) => {
          const active = tab === t.key
          const count = counts[t.key]

          return (
            <div key={t.key} className="flex items-center">
              <button
                onClick={() => setTab(t.key)}
                className={[
                  'h-10 px-5 rounded-full text-[15px] font-medium',
                  'flex items-center gap-2 transition',
                  active
                    ? 'border border-gray-900 text-gray-900 bg-white'
                    : 'border border-transparent text-gray-500 hover:text-gray-800',
                ].join(' ')}
              >
                <span>{t.label}</span>

                {count > 0 && (
                  <span
                    className="
                      min-w-[28px] h-6 px-2 rounded-full
                      text-[13px] font-semibold
                      inline-flex items-center justify-center
                      bg-[#B7FD33] text-black
                    "
                  >
                    {count}
                  </span>
                )}
              </button>

              {idx !== TABS.length - 1 && (
                <div className="mx-2 h-6 w-px bg-gray-200" />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
