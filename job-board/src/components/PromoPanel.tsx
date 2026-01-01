import { Sparkles, Monitor } from 'lucide-react'

export default function PromoPanel() {
  return (
    <aside className="relative w-full h-full rounded-xl bg-white border border-gray-100 overflow-hidden">
      {/* Figma Eclipse: blurred gradient blob */}
      <div
        className="
          pointer-events-none
          absolute
          -top-10
          -right-24
          w-[395px]
          h-[395px]
          rounded-full
          blur-[100px]
        "
        style={{
          background:
            'linear-gradient(180deg, rgba(0, 194, 255, 0) 0%, rgba(255, 148, 228, 0.76) 100%)',
        }}
      />

      {/* Content */}
      <div className="relative h-full flex flex-col p-6">
        {/* Icon */}
        <div className="w-7 h-10 flex items-center justify-center">
          <Sparkles className="w-6 h-6 text-[#19212D]" />
        </div>

        <h3 className="mt-2 text-[16px] leading-[25px] font-semibold text-[#19212D]">
          Ace Your Interviews with AI-Powered Mock Sessions!
        </h3>

        <p className="mt-3 text-[14px] leading-5 text-black/80">
          Struggling with interview nerves or unsure how to prepare? Let our
          cutting-edge AI mock interviews help you shine!
        </p>

        <div className="my-6 h-px bg-black/30" />

        <div className="flex items-center justify-between">
          <div className="text-[16px] leading-[25px] font-semibold text-[#19212D]">
            Why Choose Our AI Mock Interviews?
          </div>
          <Sparkles className="w-5 h-5 text-[#19212D]" />
        </div>

        <div className="mt-4 space-y-6 text-[14px] leading-5 text-black/80">
          <div>
            <div className="font-semibold text-black">Job-Specific Simulations:</div>
            <ul className="mt-2 list-disc pl-5">
              <li>
                Practice with questions tailored to your target role, ensuring
                relevance and preparation.
              </li>
            </ul>
          </div>

          <div>
            <div className="font-semibold text-black">Actionable Feedback:</div>
            <ul className="mt-2 list-disc pl-5">
              <li>
                Get detailed analysis of your responses and practical, step-by-step
                improvement suggestions.
              </li>
            </ul>
          </div>

          <div>
            <div className="font-semibold text-black">Boost Success Rates:</div>
            <ul className="mt-2 list-disc pl-5">
              <li>
                Perfect your interview skills and increase your chances of landing
                the job you want.
              </li>
            </ul>
          </div>
        </div>

        {/* Button anchored bottom */}
        <div className="mt-auto pt-6">
          <button
            className="
              w-full h-[45px] rounded-full
              bg-[#19202B] text-white
              flex items-center justify-center gap-2
              text-[16px] font-medium
            "
          >
            <Monitor className="w-4 h-4" />
            Mock Interview
          </button>
        </div>
      </div>
    </aside>
  )
}
