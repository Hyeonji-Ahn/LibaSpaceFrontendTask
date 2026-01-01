import logo from '../assets/logo.png'

export default function MobileHeader({
    onOpen,
  }: {
    onOpen: () => void
  }) {
    return (
      <header className="lg:hidden sticky top-0 z-40 bg-white border-b">
        <div className="h-14 px-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
                    src={logo}
                    alt="JobNova"
                    className="h-8 w-auto object-contain"
                />
          </div>
  
          <button
            onClick={onOpen}
            aria-label="Open menu"
            className="h-10 w-10 rounded-full border border-gray-200 bg-white flex items-center justify-center active:scale-95 transition"
          >
            {/* simple hamburger */}
            <div className="flex flex-col gap-1">
              <span className="block h-0.5 w-5 bg-gray-800" />
              <span className="block h-0.5 w-5 bg-gray-800" />
              <span className="block h-0.5 w-5 bg-gray-800" />
            </div>
          </button>
        </div>
      </header>
    )
  }
  