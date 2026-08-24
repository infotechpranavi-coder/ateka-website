import Link from 'next/link';
import Image from 'next/image';

type BrandMarkTone = 'dark' | 'light';

interface BrandMarkProps {
  variant?: BrandMarkTone;
  size?: 'nav' | 'footer';
  className?: string;
}

const FOOTER_LOGO_SRC = '/logooo/ateka_-_logo-removebg-preview.png';
const NAV_LOGO_SRC = '/logooo/ateka_-_logo%20without%20name.png';

export default function BrandMark({
  variant = 'dark',
  size = 'nav',
  className = '',
}: BrandMarkProps) {
  const isFooter = size === 'footer';
  const onLight = variant === 'light';

  if (isFooter) {
    return (
      <Link
        href="/"
        className={`inline-flex shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-black/5 h-[5.75rem] w-[11.5rem] px-1 md:h-[6.75rem] md:w-[13.5rem] ${className}`}
        aria-label="Ateka Logistics home"
      >
        <Image
          src={FOOTER_LOGO_SRC}
          alt="Ateka Logistics"
          width={320}
          height={160}
          className="h-[140%] w-[140%] max-w-none scale-[1.15] object-contain"
          priority
        />
      </Link>
    );
  }

  return (
    <Link href="/" className={`flex items-center gap-2.5 ${className}`} aria-label="Ateka Logistics home">
      <Image
        src={NAV_LOGO_SRC}
        alt=""
        width={96}
        height={64}
        className={`h-11 w-auto object-contain sm:h-12 md:h-14 ${
          onLight ? 'brightness-0 invert' : ''
        }`}
        priority
      />
      <span className="flex min-w-0 flex-col leading-tight">
        <span
          className={`text-base font-bold tracking-tight sm:text-lg ${
            onLight ? 'text-white' : 'text-dark-navy'
          }`}
        >
          Ateka Logistics
        </span>
        <span
          className={`text-[9px] font-semibold uppercase tracking-[0.16em] sm:text-[10px] ${
            onLight ? 'text-white/70' : 'text-primary'
          }`}
        >
          Transport &amp; Logistics
        </span>
      </span>
    </Link>
  );
}
