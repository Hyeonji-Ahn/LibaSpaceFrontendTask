import { useEffect, useState } from 'react'
import type { Job } from '../types/job'
import { useUIStore } from '../store/uiStore'

export default function JobFitPanel({ job }: { job: Job }) {
  const fitUnlocked = useUIStore((s) => s.fitUnlocked)
  const unlockFit = useUIStore((s) => s.unlockFit)

  const fit = job.details?.fit

  // Provide stable skeleton metrics so panel always renders (prevents “needs refresh” feel)
  const metrics =
    fit?.metrics?.slice(0, 4) ?? [
      { label: 'Education', value: 0 },
      { label: 'Work Exp', value: 0 },
      { label: 'Skills', value: 0 },
      { label: 'Exp. Level', value: 0 },
    ]

  const items = fit?.items ?? []

  // simple toast (no dependency)
  const [toast, setToast] = useState<string | null>(null)
  useEffect(() => {
    if (!toast) return
    const t = setTimeout(() => setToast(null), 1600)
    return () => clearTimeout(t)
  }, [toast])

  const onUpgrade = () => {
    setToast('paid')
    unlockFit()
  }

  return (
    <aside className="relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6">
      {/* Figma-ish gradient “eclipse” (blue+pink) */}
      <div
        className="pointer-events-none absolute -top-10 -right-20 h-[395px] w-[395px] blur-[100px]"
        style={{
          background:
            'linear-gradient(180deg, rgba(0, 194, 255, 0) 0%, rgba(255, 148, 228, 0.76) 100%)',
        }}
      />

      {/* Optional subtle texture layer (very light) */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:radial-gradient(circle_at_20%_10%,rgba(0,0,0,0.08)_0%,rgba(0,0,0,0)_55%)]" />

      {/* Toast */}
      {toast && (
        <div className="absolute right-4 top-4 z-20 rounded-full bg-black/80 px-3 py-1 text-[12px] font-medium text-white">
          {toast}
        </div>
      )}

      <div className="relative">
        <h3 className="text-[16px] font-semibold tracking-[-0.02em] text-[#19212D]">
          Why is this job a good fit for me?
        </h3>

        {/* Metrics grid (ring on top, label below) */}
        <div className="mt-5 grid grid-cols-2 gap-4">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="rounded-xl border border-gray-100 bg-white/80 px-4 py-3"
            >
              <div className="flex flex-col items-center gap-2">
                <MiniRing value={m.value} />
                <div className="text-[12px] font-medium text-black">
                  {m.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Fit items */}
        <div className="mt-7 space-y-7">
          {items.length === 0 ? (
            // skeleton
            <>
              <FitItemSkeleton />
              <FitItemSkeleton />
              <FitItemSkeleton />
            </>
          ) : (
            items.map((x) => (
              <div key={x.title} className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="text-[14px] font-semibold text-black">
                    {x.title}
                  </div>
                  <span className="text-[14px]">
                    {x.status === 'good' ? '✅' : '⚠️'}
                  </span>
                </div>
                <p className="text-[14px] leading-5 tracking-[-0.02em] text-black">
                  {x.description}
                </p>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Paywall overlay */}
      {!fitUnlocked && (
        <div className="absolute inset-0 z-10">
          {/* blur layer */}
          <div className="absolute inset-0 bg-white/55 backdrop-blur-[6px]" />

          {/* content */}
          <div className="relative flex h-full flex-col items-center justify-end px-6 pb-6">
            <button
              type="button"
              onClick={onUpgrade}
              className="h-11 w-full max-w-[220px] rounded-full bg-[#111827] text-[14px] font-medium text-white hover:opacity-95 transition"
            >
              Upgrade to check
            </button>
          </div>
        </div>
      )}
    </aside>
  )
}

function FitItemSkeleton() {
  return (
    <div className="space-y-3">
      <div className="h-4 w-40 rounded bg-gray-200" />
      <div className="h-4 w-full rounded bg-gray-200" />
      <div className="h-4 w-4/5 rounded bg-gray-200" />
    </div>
  )
}

function MiniRing({ value }: { value: number }) {
  const r = 18
  const c = 2 * Math.PI * r
  const offset = c - (Math.max(0, Math.min(100, value)) / 100) * c

  return (
    <div className="relative h-[46px] w-[46px]">
      <svg width="46" height="46" viewBox="0 0 46 46" className="block">
        <circle
          cx="23"
          cy="23"
          r={r}
          stroke="rgba(232,232,232,0.88)"
          strokeWidth="4"
          fill="none"
        />
        <circle
          cx="23"
          cy="23"
          r={r}
          stroke="#B7FD33"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={offset}
          transform="rotate(-90 23 23)"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center text-[14px] font-semibold tracking-[-0.02em] text-[#1F2937]">
        {value}%
      </div>
    </div>
  )
}
