'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';

const slides = [
  {
    id: 1,
    eyebrow: 'Road Freight · Nationwide',
    title: 'Reliable',
    accent: 'FTL Transportation',
    description:
      'Full truck load movement with consistent vehicle availability for logistics companies and corporate shippers across India.',
    image: '/banners/refie 3.jpg',
    imagePosition: '52% center',
    imageClassName: 'scale-105',
    flipHorizontal: true,
  },
  {
    id: 2,
    eyebrow: 'Dedicated · On Time',
    title: 'Dedicated',
    accent: 'Vehicle Services',
    description:
      'Assigned trucks and professional drivers for recurring lanes that need predictable capacity and clear coordination.',
    image: '/images/stock/hero-truck.jpg',
  },
  {
    id: 3,
    eyebrow: 'Express · E-commerce',
    title: 'Express',
    accent: 'Road Support',
    description:
      'Time-critical and secondary transportation for express networks and e-commerce distribution across India.',
    image: '/images/stock/cta-truck.jpg',
    flipHorizontal: true,
  },
];

const stats = [
  { value: '27', label: 'Vehicles' },
  { value: 'Pan-India', label: 'Coverage' },
  { value: 'FTL', label: '& Dedicated' },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  const { scrollY } = useScroll();
  const rawScale = useTransform(scrollY, [0, 700], [1, 1.2]);
  const rawY = useTransform(scrollY, [0, 700], [0, 120]);
  const rawOpacity = useTransform(scrollY, [0, 500], [1, 0.45]);
  const scale = useSpring(rawScale, { stiffness: 80, damping: 28 });
  const y = useSpring(rawY, { stiffness: 80, damping: 28 });
  const opacity = useSpring(rawOpacity, { stiffness: 80, damping: 28 });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  const slide = slides[current];

  return (
    <div className="relative z-0 h-[50svh] w-full overflow-hidden md:sticky md:top-0 md:h-[100svh]">
      {/* Background + scroll motion */}
      <motion.div
        style={{ scale, y, opacity }}
        className="absolute inset-0 will-change-transform"
      >
        {slides.map((slide, index) => (
          <motion.div
            key={slide.id}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: index === current ? 1 : 0 }}
            transition={{ duration: 0.9, ease: 'easeInOut' }}
          >
            {slide.imageLayout === 'right' ? (
              <div className="absolute inset-0 bg-[#0e101c]">
                <div
                  className={
                    slide.imagePanelClass ??
                    'absolute inset-y-0 right-0 w-full sm:w-[72%] md:w-[66%] lg:w-[60%]'
                  }
                >
                  <Image
                    src={slide.image}
                    alt={`${slide.title} ${slide.accent}`}
                    fill
                    className={`object-cover${slide.flipHorizontal ? ' -scale-x-100' : ''}`}
                    style={{ objectPosition: slide.imagePosition ?? 'center' }}
                    priority={index === 0}
                    quality={75}
                    sizes="(max-width: 640px) 100vw, 60vw"
                  />
                </div>
              </div>
            ) : (
              <Image
                src={slide.image}
                alt={`${slide.title} ${slide.accent}`}
                fill
                className={`object-cover object-center${slide.flipHorizontal ? ' -scale-x-100' : ''} ${slide.imageClassName ?? ''}`}
                style={{ objectPosition: slide.imagePosition ?? 'center' }}
                priority={index === 0}
                sizes="100vw"
              />
            )}
          </motion.div>
        ))}
      </motion.div>

      {/* Left translucent scrim → fully transparent on the empty right */}
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
                    'linear-gradient(90deg, rgba(14,16,28,0.92) 0%, rgba(14,16,28,0.82) 28%, rgba(14,16,28,0.52) 52%, rgba(14,16,28,0.2) 72%, rgba(14,16,28,0.12) 100%)',
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 z-[1] md:hidden"
        style={{
          background:
            'linear-gradient(180deg, rgba(14,16,28,0.58) 0%, rgba(14,16,28,0.72) 42%, rgba(14,16,28,0.88) 100%)',
        }}
      />
      {/* Soft bottom fade for controls */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-40"
        style={{
          background:
            'linear-gradient(180deg, rgba(14,16,28,0) 0%, rgba(14,16,28,0.45) 100%)',
        }}
      />

      {/* Left-aligned content — single slide at a time */}
      <div className="pointer-events-none absolute inset-0 z-30 flex items-start md:items-center md:-translate-y-14">
        <div className="mx-auto w-full max-w-7xl px-7 pt-[5.75rem] pb-16 sm:px-8 sm:pt-32 md:px-12 md:pt-20 md:pb-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="pointer-events-auto w-[88%] max-w-[20.5rem] sm:w-full sm:max-w-xl lg:max-w-2xl"
            >
              <p className="mb-1.5 inline-flex max-w-full items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/80 sm:mb-4 sm:text-[11px] md:text-xs md:tracking-[0.24em]">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                {slide.eyebrow}
              </p>

              <h1 className="mb-1.5 text-left tracking-tight text-white sm:mb-5">
                <span className="block text-[1.55rem] font-bold leading-[1.08] sm:text-5xl md:text-6xl lg:text-[4rem]">
                  {slide.title}
                </span>
                <span className="mt-0.5 block font-hero-accent text-[1.45rem] font-normal italic leading-[1.08] text-primary sm:text-5xl md:text-6xl lg:text-[4.1rem]">
                  {slide.accent}
                </span>
              </h1>

              <p className="mb-2.5 line-clamp-2 max-w-lg text-xs leading-relaxed text-white/75 sm:mb-4 sm:line-clamp-none sm:text-base md:mb-8 md:text-lg">
                {slide.description}
              </p>

              <div className="flex w-full flex-row flex-wrap items-center gap-2 sm:gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg bg-primary px-3.5 py-2 text-xs font-semibold text-white shadow-lg shadow-black/20 transition hover:bg-[var(--primary-dark)] sm:px-6 sm:py-3 sm:text-sm md:px-7 md:py-3.5 md:text-base"
                >
                  Enquire Now
                </Link>
                <Link
                  href="/services"
                  className="group inline-flex items-center justify-center gap-1.5 rounded-lg border border-white/50 bg-white/10 px-3.5 py-2 text-xs font-semibold text-white backdrop-blur-sm transition hover:border-white hover:bg-white/20 sm:px-6 sm:py-3 sm:text-sm md:px-7 md:py-3.5 md:text-base"
                >
                  View Details
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Side arrows — stay at edges so CTAs stay clickable */}
      <div className="pointer-events-none absolute inset-y-0 left-0 right-0 z-20 hidden md:block">
        <button
          onClick={prev}
          className="pointer-events-auto absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur-md transition hover:border-primary hover:bg-primary lg:left-5 lg:h-12 lg:w-12"
          aria-label="Previous slide"
        >
          <ChevronLeft size={22} />
        </button>
        <button
          onClick={next}
          className="pointer-events-auto absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur-md transition hover:border-primary hover:bg-primary lg:right-5 lg:h-12 lg:w-12"
          aria-label="Next slide"
        >
          <ChevronRight size={22} />
        </button>
      </div>

      {/* Bottom bar: stats · counter · dots */}
      <div className="absolute bottom-8 left-0 right-0 z-20 px-7 pr-[4.75rem] sm:bottom-20 sm:px-8 sm:pr-8 md:bottom-24 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
          <div className="flex gap-4 sm:gap-12">
            {stats.map((stat) => (
              <div key={stat.label} className="text-left">
                <p className="text-base font-bold tracking-tight text-white sm:text-2xl md:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-0.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-white/55 md:text-xs md:tracking-[0.22em]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-6 sm:gap-8">
            <p className="text-sm font-semibold tracking-[0.2em] text-white/90">
              {String(current + 1).padStart(2, '0')}
              <span className="text-white/40"> / </span>
              {String(slides.length).padStart(2, '0')}
            </p>
            <div className="flex items-center gap-2.5">
              {slides.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrent(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === current
                      ? 'w-10 bg-primary'
                      : 'w-1.5 bg-white/40 hover:bg-white/70'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
