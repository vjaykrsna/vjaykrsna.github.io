export default function LogoMark({ className = "" }) {
  return (
    <svg
      className={`h-5 w-5 text-accent ${className}`.trim()}
      viewBox="0 0 40 40"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="logo-glow" x1="12%" y1="8%" x2="88%" y2="92%">
          <stop offset="0%" stopColor="hsl(48, 96%, 53%)" />
          <stop offset="100%" stopColor="hsl(172, 35%, 50%)" />
        </linearGradient>
      </defs>
      <circle
        cx="20"
        cy="20"
        r="18.5"
        fill="hsla(48, 96%, 53%, 0.08)"
        stroke="hsla(172, 35%, 50%, 0.25)"
        strokeWidth="1.5"
      />
      <path
        d="M19.9 9.5c-5.53 0-10 4.47-10 10 0 1.31.25 2.57.7 3.72L7.6 26.2a1.15 1.15 0 0 0 1.63 1.63l3.1-3.1a9.93 9.93 0 0 0 7.57 3.27c5.53 0 10-4.47 10-10 0-1.44-.3-2.82-.84-4.07l2.33-2.33a1.15 1.15 0 0 0-1.63-1.63l-2.06 2.06A9.92 9.92 0 0 0 19.9 9.5Z"
        fill="url(#logo-glow)"
      />
      <path
        d="M25.5 12.5c.04.53.05 1.07.02 1.62-.15 2.6-1.27 5.06-3.18 6.97-2.74 2.74-6.66 3.58-10.13 2.51"
        stroke="hsla(173, 45%, 65%, 0.8)"
        strokeWidth="2.2"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="25.5" cy="12.5" r="2" fill="hsl(48, 96%, 53%)" />
    </svg>
  );
}
