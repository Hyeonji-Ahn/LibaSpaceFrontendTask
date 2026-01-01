import { Heart, MapPin, Wifi, Share2 } from 'lucide-react'
import type { Job } from '../../types/job'
import { useJobsStore } from '../../store/jobsStore'
import { formatPostedTime } from '../../utils/times'
import MatchRing from './MatchRing' // keep your existing ring

type Props = {
  job: Job
}

export default function JobCard({ job }: Props) {
  const liked = useJobsStore((s) => s.liked)
  const toggleLike = useJobsStore((s) => s.toggleLike)

  return (
    <div className="bg-white rounded-xl border border-gray-200">
      {/* Top content */}
      <div className="px-6 pt-5 pb-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-4">
            {/* Match ring */}
            <div className="mt-1 shrink-0">
              <MatchRing value={job.match} />
            </div>

            {/* Main text */}
            <div className="min-w-0">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-[20px] leading-[26px] font-semibold text-gray-900 truncate">
                  {job.title}
                </h3>
              </div>

              {/* Company */}
              <div className="mt-2 flex items-center gap-2 min-w-0">
                {job.companyLogoUrl ? (
                  <img
                    src={job.companyLogoUrl}
                    alt={job.company}
                    className="h-5 w-5 rounded object-contain bg-white"
                  />
                ) : (
                  <div className="h-5 w-5 rounded bg-gray-100" />
                )}
                <span className="text-[14px] font-medium text-gray-400 truncate">
                  {job.company}
                </span>
              </div>

              {/* Location / work mode */}
              <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-[13px] text-gray-600">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="w-4 h-4" />
                  <span className="truncate">{job.location}</span>
                </span>
                <span className="w-1 h-1 bg-[#734AE2] rounded-full" />
                <span className="inline-flex items-center gap-1.5">
                  <Wifi className="w-4 h-4" />
                  {job.workMode}
                </span>
              </div>

              {/* Tags */}
              <div className="mt-4 flex flex-wrap gap-2">
                {job.tags.map((tag) => (
                  <span
                    key={tag}
                    className="
                      px-3 py-1
                      text-[12px] leading-5
                      border border-gray-200
                      rounded-full
                      text-gray-700
                      bg-white
                    "
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Actions (top-right) */}
          <div className="flex items-center gap-2 pt-1 shrink-0">
            <button
              type="button"
              className="p-2 rounded-full hover:bg-gray-100 transition"
              aria-label="Share"
            >
              <Share2 className="w-5 h-5 text-gray-500" />
            </button>

            <button
              type="button"
              onClick={() => toggleLike(job.id)}
              className="p-2 rounded-full hover:bg-gray-100 transition"
              aria-label="Like"
            >
              <Heart
                className={[
                  'w-6 h-6 transition-colors', // slightly bigger like you requested
                  liked[job.id]
                    ? 'fill-[#A68BFA] stroke-[#A68BFA]'
                    : 'fill-none stroke-gray-400',
                ].join(' ')}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Footer divider */}
      <div className="border-t border-gray-100" />

      {/* Footer */}
      <div className="px-6 py-4 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 text-[13px] text-gray-600">
          {/* time pill */}
          <span className="px-3 py-1 rounded-full bg-[#734AE2]/10 text-gray-700">
            {formatPostedTime(job.postedAt)}
          </span>
          <span className="text-gray-500">{job.applicants} applicants</span>
        </div>

        <div className="flex items-center gap-3">
          <button
            className="
              h-10 px-5
              rounded-full
              border border-gray-200
              bg-white
              text-[14px] font-medium text-gray-800
              hover:bg-gray-50 transition
            "
          >
            Apply
          </button>

          <button
            className="
              h-10 px-6
              rounded-full
              bg-[#B7FD33]
              text-[14px] font-medium text-gray-900
              hover:opacity-90 transition
            "
          >
            Mock Interview
          </button>
        </div>
      </div>
    </div>
  )
}
