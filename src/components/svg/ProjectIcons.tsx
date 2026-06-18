import type { FC } from "react";

type IconProps = { className?: string };

export function ShieldIcon({ className = "w-10 h-10" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
      <path d="M24 4L8 12v12c0 10 6.5 18.5 16 20 9.5-1.5 16-10 16-20V12L24 4z" stroke="currentColor" strokeWidth="1.5" fill="rgba(255,255,255,0.05)" />
      <path d="M18 24l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.8" />
    </svg>
  );
}

export function PaymentIcon({ className = "w-10 h-10" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
      <rect x="4" y="12" width="40" height="28" rx="6" stroke="currentColor" strokeWidth="1.5" fill="rgba(255,255,255,0.04)" />
      <rect x="4" y="20" width="40" height="8" fill="currentColor" opacity="0.15" />
      <rect x="10" y="32" width="12" height="4" rx="1" fill="currentColor" opacity="0.4" />
    </svg>
  );
}

export function PortalIcon({ className = "w-10 h-10" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
      <rect x="6" y="8" width="36" height="32" rx="4" stroke="currentColor" strokeWidth="1.5" />
      <rect x="10" y="14" width="14" height="10" rx="2" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth="1" />
      <rect x="28" y="14" width="10" height="4" rx="1" fill="currentColor" opacity="0.2" />
      <rect x="28" y="22" width="10" height="4" rx="1" fill="currentColor" opacity="0.2" />
      <rect x="10" y="28" width="28" height="8" rx="2" fill="currentColor" fillOpacity="0.08" stroke="currentColor" strokeWidth="0.5" opacity="0.6" />
    </svg>
  );
}

export function ApiIcon({ className = "w-10 h-10" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
      <circle cx="24" cy="24" r="6" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1" />
      <circle cx="10" cy="14" r="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="38" cy="14" r="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="10" cy="34" r="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="38" cy="34" r="4" stroke="currentColor" strokeWidth="1.5" />
      <path d="M14 16l7 6M34 16l-7 6M14 32l7-6M34 32l-7-6" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" opacity="0.4" />
    </svg>
  );
}

export function DatabaseIcon({ className = "w-10 h-10" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
      <ellipse cx="24" cy="14" rx="14" ry="6" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.08" />
      <path d="M10 14v16c0 3.3 6.3 6 14 6s14-2.7 14-6V14" stroke="currentColor" strokeWidth="1.5" />
      <path d="M10 22c0 3.3 6.3 6 14 6s14-2.7 14-6" stroke="currentColor" strokeWidth="1" opacity="0.4" />
    </svg>
  );
}

export function HrIcon({ className = "w-10 h-10" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
      <circle cx="24" cy="16" r="6" stroke="currentColor" strokeWidth="1.5" />
      <path d="M10 38c0-7.7 6.3-14 14-14s14 6.3 14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="36" cy="18" r="4" stroke="currentColor" strokeWidth="1" opacity="0.6" />
      <path d="M40 36c0-4-2-7-6-8" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
    </svg>
  );
}

export function PollIcon({ className = "w-10 h-10" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
      <rect x="8" y="28" width="8" height="12" rx="2" fill="currentColor" opacity="0.4" />
      <rect x="20" y="20" width="8" height="20" rx="2" fill="currentColor" opacity="0.6" />
      <rect x="32" y="12" width="8" height="28" rx="2" fill="currentColor" opacity="0.8" />
      <line x1="6" y1="40" x2="42" y2="40" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function MailIcon({ className = "w-10 h-10" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
      <rect x="6" y="12" width="36" height="24" rx="4" stroke="currentColor" strokeWidth="1.5" />
      <path d="M6 16l18 12 18-12" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" opacity="0.7" />
    </svg>
  );
}

export function CodeIcon({ className = "w-10 h-10" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
      <path d="M16 16L8 24l8 8M32 16l8 8-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M26 10L22 38" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
    </svg>
  );
}

const iconMap: Record<string, FC<IconProps>> = {
  insurance: ShieldIcon,
  payment: PaymentIcon,
  portal: PortalIcon,
  api: ApiIcon,
  database: DatabaseIcon,
  hr: HrIcon,
  poll: PollIcon,
  mail: MailIcon,
  code: CodeIcon,
};

export function ProjectIcon({ type, className }: { type: string; className?: string }) {
  const Icon = iconMap[type] ?? CodeIcon;
  return <Icon className={className} />;
}
