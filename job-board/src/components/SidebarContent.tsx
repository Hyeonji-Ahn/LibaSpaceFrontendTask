import {
  Briefcase,
  Monitor,
  FileText,
  User,
  Settings,
  Bookmark,
  Sparkles,
} from 'lucide-react'

type NavItem = {
  label: string
  active?: boolean
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

const TOP_NAV: NavItem[] = [
  { label: 'Jobs', active: true, icon: Briefcase },
  { label: 'AI Mock Interview', icon: Monitor },
  { label: 'Resume', icon: FileText },
]

const BOTTOM_NAV: NavItem[] = [
  { label: 'Profile', icon: User },
  { label: 'Setting', icon: Settings },
  { label: 'Subscription', icon: Bookmark },
  { label: 'Extra Credits', icon: Sparkles },
]

export default function SidebarContent({
  onNavigate,
}: {
  onNavigate?: () => void
}) {
  return (
    <div className="h-full flex flex-col">
      {/* Scrollable area */}
      <div className="flex-1 min-h-0 overflow-y-auto">
        <nav className="px-3 pt-4 flex flex-col gap-2">
          {TOP_NAV.map((x) => {
            const Icon = x.icon
            return (
              <button
                key={x.label}
                onClick={onNavigate}
                className={[
                  'h-[45px] rounded-full px-4',
                  'flex items-center gap-3',
                  'font-medium transition',
                  x.active
                    ? 'bg-[#A68BFA] text-white'
                    : 'bg-white text-gray-800 hover:bg-gray-50',
                ].join(' ')}
              >
                <Icon
                  className={[
                    'w-5 h-5',
                    x.active ? 'text-white' : 'text-gray-700',
                  ].join(' ')}
                />
                <span className="text-[14px]">{x.label}</span>
              </button>
            )
          })}

          <div className="my-2 h-px bg-[#DFDFDF]" />

          {BOTTOM_NAV.map((x) => {
            const Icon = x.icon
            return (
              <button
                key={x.label}
                onClick={onNavigate}
                className="
                  h-[45px] rounded-full px-4
                  flex items-center gap-3
                  text-left font-medium text-gray-800
                  hover:bg-gray-50 transition
                "
              >
                <Icon className="w-5 h-5 text-gray-700" />
                <span className="text-[14px]">{x.label}</span>
              </button>
            )
          })}
        </nav>

        {/* Spacer so scroll content doesn't hide behind bottom panel */}
        <div className="h-4" />
      </div>

      {/* Pinned bottom panel (always visible) */}
      <div className="p-4 border-t bg-white">
        <div className="rounded-2xl p-4 text-white bg-[linear-gradient(318deg,#CBBAFF_0%,#C89FF3_54%,#7248F1_100%)]">
          <div className="text-lg font-semibold">Upgrade Your Plan</div>
          <div className="mt-2 text-sm/6">
            Boost your success rate now!
          </div>
          <button className="mt-4 w-full h-10 rounded-full bg-white text-gray-900 font-semibold">
            Subscription
          </button>
        </div>
      </div>
    </div>
  )
}
