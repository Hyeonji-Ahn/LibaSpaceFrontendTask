// src/components/job-details/JobDetailsHero.tsx
import { MapPin, Wifi, Globe, Briefcase, GraduationCap, DollarSign, Signal } from 'lucide-react'
import type { Job } from '../types/job'
import { formatPostedTime } from '../utils/times'
import MatchRing from '../features/jobs/MatchRing'

export default function JobDetailsHero({ job }: { job: Job }) {
  const d = job.details

  return (
    <div className="bg-white rounded-xl border border-gray-200">
      <div className="p-6">
        <div className="flex items-start justify-between gap-6">
          {/* Left */}
          <div className="flex items-start gap-4 min-w-0">
            {/* Company logo (bigger like figma) */}
            <div className="shrink-0">
              {job.companyLogoUrl ? (
                <img
                  src={job.companyLogoUrl}
                  alt={job.company}
                  className="h-14 w-14 rounded-xl object-contain bg-white border border-gray-100"
                />
              ) : (
                <div className="h-14 w-14 rounded-xl bg-gray-100" />
              )}
            </div>

            <div className="min-w-0">
              {/* posted pill */}
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#734AE2]/10 text-[12px] font-medium text-gray-700">
                {formatPostedTime(job.postedAt)}
              </div>

              <h1 className="mt-3 text-[22px] leading-[28px] font-semibold text-gray-900 truncate">
                {job.title}
              </h1>

              <div className="mt-1 text-[14px] text-gray-400 font-medium truncate">
                {job.company}
              </div>

              {/* Location row */}
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
            </div>
          </div>

          {/* Right: match ring */}
          <div className="shrink-0">
            <MatchRing value={job.match} />
          </div>
        </div>

        {/* Divider */}
        <div className="mt-5 h-px bg-gray-100" />

        {/* Meta icon row (matches figma vibe) */}
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-[13px] text-gray-600">
          {d?.country && (
            <MetaItem icon={<Globe className="w-4 h-4" />} text={d.country} />
          )}
          {d?.experience && (
            <MetaItem icon={<Briefcase className="w-4 h-4" />} text={d.experience} />
          )}
          {d?.internship && (
            <MetaItem icon={<GraduationCap className="w-4 h-4" />} text={d.internship} />
          )}
          {d?.remote && (
            <MetaItem icon={<Wifi className="w-4 h-4" />} text={d.remote} />
          )}
          {d?.salary && (
            <MetaItem icon={<DollarSign className="w-4 h-4" />} text={d.salary} />
          )}
          {d?.level && (
            <MetaItem icon={<Signal className="w-4 h-4" />} text={d.level} />
          )}
        </div>
      </div>

      {/* Bottom description strip */}
      {d?.description && (
        <>
          <div className="h-px bg-gray-100" />
          <div className="px-6 py-4 text-[13px] leading-5 text-gray-600">
            {d.description}
          </div>
        </>
      )}
    </div>
  )
}

function MetaItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-2">
      <div className="text-gray-400">{icon}</div>
      <div className="truncate">{text}</div>
    </div>
  )
}
