'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import BrandMark from '@/components/BrandMark';

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hash, setHash] = useState('');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const syncHash = () => setHash(window.location.hash);
    syncHash();
    window.addEventListener('hashchange', syncHash);
    return () => window.removeEventListener('hashchange', syncHash);
  }, [pathname]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Industries', href: '/industries' },
    { name: 'Fleet', href: '/fleet' },
    { name: 'Contact', href: '/contact' },
  ];

  const overHero = isHome && !scrolled && !isOpen;

  return (
    <>
      <nav
        className={`fixed top-0 z-50 w-full pt-1.5 transition-all duration-500 sm:pt-2 ${
          overHero ? 'bg-transparent' : 'bg-white/95 shadow-sm backdrop-blur-md'
        }`}
      >
        <div className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-6">
          <div className="relative flex items-center justify-between py-2.5 md:py-2">
            {/* Logo */}
            <div className="relative z-10 -ml-1 flex shrink-0 items-center overflow-visible">
              <BrandMark variant={overHero ? 'light' : 'dark'} />
            </div>

            {/* Center tab nav — desktop */}
            <div
              className={`absolute left-1/2 hidden -translate-x-1/2 items-center rounded-full p-1 md:flex ${
                overHero
                  ? 'border border-white/20 bg-white/10 backdrop-blur-md'
                  : 'border border-gray-200/80 bg-gray-100/90 shadow-sm'
              }`}
            >
              {navLinks.map((link) => {
                const active = link.href.startsWith('/#')
                  ? isHome && hash === link.href.replace('/', '')
                  : link.href === '/'
                    ? isHome && !hash
                    : pathname === link.href || pathname.startsWith(`${link.href}/`);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative rounded-full px-4 py-2.5 text-[15px] font-semibold transition-all duration-200 lg:px-5 lg:text-base ${
                      active
                        ? overHero
                          ? 'bg-white text-text-dark shadow-sm'
                          : 'bg-white text-primary shadow-sm'
                        : overHero
                          ? 'text-white/90 hover:text-white'
                          : 'text-text-body hover:text-text-dark'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            {/* Right actions */}
            <div className="relative z-10 flex items-center gap-2">
              <Link
                href="/contact"
                className={`hidden items-center gap-1 rounded-full px-5 py-2.5 text-sm font-semibold transition sm:inline-flex ${
                  overHero
                    ? 'bg-primary text-white shadow-lg shadow-black/20 hover:bg-[var(--primary-dark)]'
                    : 'bg-primary text-white hover:bg-[var(--primary-dark)]'
                }`}
              >
                Enquire Now
                <ArrowUpRight size={15} className="opacity-90" />
              </Link>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`rounded-full p-2.5 md:hidden ${
                  overHero && !isOpen
                    ? 'border border-white/25 bg-white/10 text-white backdrop-blur-sm'
                    : 'text-text-dark'
                }`}
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-[5.5rem] z-40 overflow-y-auto bg-white md:hidden"
          >
            <div className="section-container py-5">
              <div className="mb-4 flex flex-col gap-1 rounded-2xl bg-light-gray p-1.5">
                {navLinks.map((link) => {
                  const active = link.href.startsWith('/#')
                    ? isHome && hash === link.href.replace('/', '')
                    : link.href === '/'
                      ? isHome && !hash
                      : pathname === link.href || pathname.startsWith(`${link.href}/`);
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`rounded-xl px-4 py-3.5 text-center text-base font-semibold transition ${
                        active
                          ? 'bg-white text-primary shadow-sm'
                          : 'text-text-body hover:bg-white/60'
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="btn-primary flex w-full items-center justify-center gap-1.5 rounded-full py-3"
              >
                Enquire Now
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!isHome && <div className="h-[6.25rem] md:h-[7rem]" />}
    </>
  );
}
