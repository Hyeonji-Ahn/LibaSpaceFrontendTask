import { useEffect } from 'react'
import SidebarContent from './SidebarContent'
import logo from '../assets/logo.png'

export default function ResponsiveSidebar({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) {
  // ESC close (mobile)
  useEffect(() => {
    if (!open) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [open, onClose])

  // lock scroll when drawer is open (mobile)
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [open])

  return (
    <>
      {/* DESKTOP SIDEBAR */}
        <aside className="hidden lg:flex w-[219px] basis-[219px] shrink-0 h-screen bg-white border-r sticky top-0">
        <div className="w-full h-full flex flex-col">
            {/* Header (fixed) */}
            <div className="px-4 py-3 border-b shrink-0">
            <div className="flex items-center gap-2">
                <img
                src={logo}
                alt="JobNova"
                className="h-10 w-auto object-contain"
                />
            </div>
            </div>

            {/* Content area (fills remaining height; allows internal scroll regions) */}
            <div className="flex-1 min-h-0">
            <SidebarContent />
            </div>
        </div>
        </aside>


      {/* MOBILE DRAWER */}
      <div
        className={[
          'lg:hidden fixed inset-0 z-50',
          open ? 'pointer-events-auto' : 'pointer-events-none',
        ].join(' ')}
        aria-hidden={!open}
      >
        {/* overlay */}
        <div
          onClick={onClose}
          className={[
            'absolute inset-0 bg-black/30 transition-opacity',
            open ? 'opacity-100' : 'opacity-0',
          ].join(' ')}
        />

        {/* drawer */}
        <aside
          className={[
            'absolute left-0 top-0 h-full w-[280px] bg-white border-r',
            'transition-transform duration-200',
            open ? 'translate-x-0' : '-translate-x-full',
            'flex flex-col', // important: enables header fixed + content fill
          ].join(' ')}
          role="dialog"
          aria-modal="true"
        >
          {/* Header (fixed) */}
          <div className="px-4 py-3 border-b flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2">
                <img
                    src={logo}
                    alt="JobNova"
                    className="h w-auto object-contain"
                />
            </div>

            <button
              onClick={onClose}
              aria-label="Close menu"
              className="h-9 w-9 rounded-full border border-gray-200 bg-white flex items-center justify-center active:scale-95 transition"
            >
              ✕
            </button>
          </div>

          {/* Content (fills remaining height; allows internal scroll regions) */}
          <div className="flex-1 min-h-0">
            <SidebarContent onNavigate={onClose} />
          </div>
        </aside>
      </div>
    </>
  )
}
