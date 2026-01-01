export default function MatchRing({ value }: { value: number }) {
    const clamped = Math.max(0, Math.min(100, value))
    const ringColor = clamped >= 80 ? '#B9FD33' : '#FFD035'
    const track = '#F3F3F4'
    return (
      <div className="relative h-[108px] w-[108px]">
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: `conic-gradient(${ringColor} ${clamped * 3.6}deg, ${track} 0deg)`,
          }}
        />
        <div className="absolute inset-[10px] rounded-full bg-white flex flex-col items-center justify-center">
          <div className="text-2xl font-semibold text-gray-800">{clamped}%</div>
          <div className="text-sm text-gray-700">Match</div>
        </div>
      </div>
    )
  }
  