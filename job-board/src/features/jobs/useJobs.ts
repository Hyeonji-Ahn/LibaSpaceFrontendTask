// src/features/jobs/useJobs.ts
import { useQuery } from '@tanstack/react-query'
import type { Job } from '../../types/job'
import { fetchJobById, fetchJobs } from '../../api/jobs'

export function useJobs() {
  return useQuery<Job[]>({
    queryKey: ['jobs'],
    queryFn: fetchJobs,
  })
}

export function useJob(jobId?: string) {
  return useQuery<Job>({
    queryKey: ['job', jobId],
    enabled: !!jobId,
    queryFn: () => fetchJobById(jobId as string),
  })
}
