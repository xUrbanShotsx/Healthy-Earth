export function EllaAvatar({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="ella-bg" cx="50%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#3da358" />
          <stop offset="100%" stopColor="#1a5227" />
        </radialGradient>
      </defs>

      {/* Background circle */}
      <circle cx="20" cy="20" r="20" fill="url(#ella-bg)" />

      {/* Hair */}
      <ellipse cx="20" cy="13" rx="10.5" ry="8" fill="#1a5227" />

      {/* Leaf sprouts */}
      <path d="M13 12 Q9 4 15 6 Q13.5 12 13 12z" fill="#8bc34a" />
      <path d="M20 9.5 Q19 2 24 5 Q21 9.5 20 9.5z" fill="#8bc34a" />
      <path d="M27 12 Q31 4 25 6 Q26.5 12 27 12z" fill="#8bc34a" />

      {/* Ears */}
      <circle cx="9" cy="23" r="3.2" fill="#fdf0dc" />
      <circle cx="31" cy="23" r="3.2" fill="#fdf0dc" />

      {/* Face */}
      <ellipse cx="20" cy="25" rx="11" ry="9.5" fill="#fdf0dc" />

      {/* Eyes */}
      <ellipse cx="16" cy="23.5" rx="2" ry="2.2" fill="#1a5227" />
      <ellipse cx="24" cy="23.5" rx="2" ry="2.2" fill="#1a5227" />

      {/* Eye shine */}
      <circle cx="17" cy="22.6" r="0.75" fill="white" />
      <circle cx="25" cy="22.6" r="0.75" fill="white" />

      {/* Cheeks */}
      <ellipse cx="12.5" cy="27" rx="2.8" ry="1.6" fill="#f87171" opacity="0.3" />
      <ellipse cx="27.5" cy="27" rx="2.8" ry="1.6" fill="#f87171" opacity="0.3" />

      {/* Smile */}
      <path d="M15.5 28.5 Q20 32.5 24.5 28.5" stroke="#2d7a3a" strokeWidth="1.5" fill="none" strokeLinecap="round" />

      {/* Tiny freckles */}
      <circle cx="13.5" cy="25.5" r="0.5" fill="#d4a96a" opacity="0.5" />
      <circle cx="11.5" cy="26.5" r="0.4" fill="#d4a96a" opacity="0.5" />
      <circle cx="26.5" cy="25.5" r="0.5" fill="#d4a96a" opacity="0.5" />
      <circle cx="28.5" cy="26.5" r="0.4" fill="#d4a96a" opacity="0.5" />
    </svg>
  );
}
