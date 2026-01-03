// src/components/job-details/InterviewSuccessCard.tsx
import { Bot } from 'lucide-react'
import type { Job } from '../types/job'

export default function InterviewSuccessCard({ job }: { job: Job }) {
  const card = job.details?.interviewCard
  if (!card) return null

  return (
    <div className="bg-[#B7FD33] rounded-2xl p-6">
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-xl bg-black/5 flex items-center justify-center">
          <Bot className="w-5 h-5 text-gray-900" />
        </div>

        <div className="min-w-0">
          <div className="text-[16px] font-semibold text-gray-900">
            {card.title}
          </div>
          <div className="mt-1 text-[13px] leading-5 text-gray-700">
            {card.subtitle}
          </div>
        </div>
      </div>

      <div className="mt-5 h-px bg-black/10" />

      <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-6">
        {card.bullets.map((b) => (
          <div key={b.title}>
            <div className="text-[13px] font-semibold text-gray-900">{b.title}</div>
            <div className="mt-2 text-[13px] leading-5 text-gray-700">{b.body}</div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-end">
        <button
          className="
            h-10 px-5 rounded-full
            bg-[#111827] text-white
            text-[13px] font-medium
            hover:opacity-95 transition
          "
        >
          {card.cta}
        </button>
      </div>
    </div>
  )
}
