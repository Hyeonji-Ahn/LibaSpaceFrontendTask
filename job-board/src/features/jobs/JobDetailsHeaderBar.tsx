import { ArrowLeft, Heart, Share2 } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useJobsStore } from '../../store/jobsStore'

export default function JobDetailsHeaderBar({
  jobId,
  applicants,
}: {
  jobId: string
  applicants: number
}) {
  const navigate = useNavigate()
  const liked = useJobsStore((s) => s.liked)
  const toggleLike = useJobsStore((s) => s.toggleLike)

  const isLiked = !!liked[jobId]

  return (
    <div className="bg-[#F3F4F6] border-b">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-6 py-3">
        <div className="flex items-center justify-between gap-3">
          {/* Left */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="h-9 w-9 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50"
              aria-label="Back"
            >
              <ArrowLeft className="w-4 h-4 text-gray-900" />
            </button>

            <span className="px-3 py-1 rounded-full bg-[#734AE2]/10 text-[#734AE2] text-[13px] font-medium">
              {applicants} applicants
            </span>
          </div>

          {/* Right */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="h-9 w-9 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50"
              aria-label="Share"
            >
              <Share2 className="w-4 h-4 text-gray-700" />
            </button>

            <button
              type="button"
              onClick={() => toggleLike(jobId)}
              className="h-9 w-9 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50"
              aria-label="Like"
            >
              <Heart
                className={[
                  'w-5 h-5 transition-colors',
                  isLiked ? 'fill-[#A68BFA] stroke-[#A68BFA]' : 'fill-none stroke-gray-400',
                ].join(' ')}
              />
            </button>

            <button
              type="button"
              className="h-9 px-4 rounded-full bg-[#111827] text-white text-[13px] font-medium hover:opacity-95 transition"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
