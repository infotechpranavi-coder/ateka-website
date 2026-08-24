'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote, User } from 'lucide-react';
import { testimonials } from '@/lib/data';

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const active = testimonials[current];

  return (
    <section className="bg-surface-muted py-12 md:py-16">
      <div className="section-container">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <p className="section-label mb-2">Testimonials</p>
            <h2 className="text-2xl font-semibold tracking-tight text-text-dark md:text-3xl lg:text-4xl">
              What Our Clients Say
            </h2>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-text-body md:text-base">
              Feedback from logistics, express, and corporate teams that trust our road freight operations.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <button
                onClick={prev}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-text-dark transition hover:border-primary hover:text-primary"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-white transition hover:bg-[var(--primary-dark)]"
                aria-label="Next testimonial"
              >
                <ChevronRight size={18} />
              </button>
              <span className="ml-1 text-sm font-medium text-text-light">
                {String(current + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
              </span>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="relative">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.article
                  key={active.id}
                  custom={direction}
                  initial={{ opacity: 0, x: direction > 0 ? 40 : -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction > 0 ? -40 : 40 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="rounded-2xl bg-white p-5 shadow-[0_12px_36px_rgba(26,26,46,0.08)] sm:p-7 md:p-9"
                >
                  <div className="mb-5 flex items-start justify-between">
                    <div className="flex gap-0.5">
                      {Array(active.rating)
                        .fill(0)
                        .map((_, i) => (
                          <Star key={i} size={16} className="fill-primary text-primary" />
                        ))}
                    </div>
                    <Quote className="h-8 w-8 text-primary/20" />
                  </div>

                  <blockquote className="mb-6 text-[15px] leading-relaxed text-text-dark md:mb-7 md:text-lg">
                    &ldquo;{active.quote}&rdquo;
                  </blockquote>

                  <div className="flex items-center gap-4 border-t border-gray-100 pt-5">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <User size={22} strokeWidth={1.75} />
                    </span>
                    <div>
                      <p className="font-semibold text-text-dark">{active.author}</p>
                      <p className="text-sm text-text-body">{active.designation}</p>
                      <p className="text-sm font-medium text-primary">{active.company}</p>
                    </div>
                  </div>
                </motion.article>
              </AnimatePresence>
            </div>

            <div className="mt-5 flex justify-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setDirection(idx > current ? 1 : -1);
                    setCurrent(idx);
                  }}
                  className={`h-1.5 rounded-full transition-all ${
                    idx === current ? 'w-8 bg-primary' : 'w-1.5 bg-gray-200 hover:bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
