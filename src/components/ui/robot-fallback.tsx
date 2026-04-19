export function RobotSvgFallback() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg viewBox="0 0 200 200" className="w-40 h-40 text-[#D97757]" fill="none" stroke="currentColor">
        <circle cx="100" cy="100" r="78" strokeWidth="1" strokeOpacity="0.35" />
        <circle cx="100" cy="100" r="50" strokeWidth="1.5" strokeOpacity="0.6" />
        <circle cx="100" cy="100" r="24" strokeWidth="2" />
        <line x1="22" y1="100" x2="178" y2="100" strokeWidth="0.5" strokeOpacity="0.25" />
        <line x1="100" y1="22" x2="100" y2="178" strokeWidth="0.5" strokeOpacity="0.25" />
        <line x1="45" y1="45" x2="155" y2="155" strokeWidth="0.5" strokeOpacity="0.15" />
        <line x1="155" y1="45" x2="45" y2="155" strokeWidth="0.5" strokeOpacity="0.15" />
        <circle cx="100" cy="100" r="4" fill="currentColor" strokeWidth="0" />
      </svg>
    </div>
  );
}
