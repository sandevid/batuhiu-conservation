"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import {
  CalendarDays,
  ChevronDown,
  MapPin,
  Menu,
  PlayCircle,
  X,
} from "lucide-react";
import { CONTACT, NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/Button";

const SUB_ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  "/informasi-wisata/jadwal": CalendarDays,
  "/informasi-wisata/lokasi-tata-cara": MapPin,
  "/informasi-wisata/panduan": PlayCircle,
};

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 80);
  });

  // Close drawer / dropdown on route change.
  // We intentionally sync UI state to pathname here — there is no route
  // event handler available, and state must reset when the URL changes.
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  // Lock body scroll when drawer open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <>
      <motion.header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
          scrolled
            ? "bg-ocean-deep/95 backdrop-blur-md shadow-lg shadow-ocean-deep/10"
            : "bg-transparent",
        )}
      >
        <div className="container-editorial flex h-20 items-center justify-between">
          <Logo tone={scrolled ? "light" : "light"} />

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigasi utama">
            {NAV_LINKS.map((item) => {
              const hasChildren = "children" in item && item.children;
              const active = isActive(item.href);

              if (hasChildren) {
                return (
                  <div
                    key={item.href}
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(item.href)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setOpenDropdown((p) => (p === item.href ? null : item.href))
                      }
                      className={cn(
                        "text-ui relative inline-flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors",
                        active ? "text-sand" : "text-sand/80 hover:text-sand",
                      )}
                      aria-expanded={openDropdown === item.href}
                      aria-haspopup="menu"
                    >
                      {item.label}
                      <ChevronDown
                        className={cn(
                          "h-3.5 w-3.5 transition-transform",
                          openDropdown === item.href && "rotate-180",
                        )}
                      />
                      {active ? (
                        <motion.span
                          layoutId="nav-indicator"
                          className="absolute -bottom-1 left-4 right-4 h-[2px] rounded-full bg-coral"
                          transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 32,
                          }}
                        />
                      ) : null}
                    </button>

                    <AnimatePresence>
                      {openDropdown === item.href ? (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.22 }}
                          className="absolute left-1/2 top-full z-50 w-[22rem] -translate-x-1/2 pt-4"
                          role="menu"
                        >
                          <div className="overflow-hidden rounded-2xl border border-sand-dark/40 bg-shell/95 shadow-2xl backdrop-blur-xl">
                            <ul className="flex flex-col p-2">
                              {item.children.map((child) => {
                                const Icon = SUB_ICON_MAP[child.href];
                                return (
                                  <li key={child.href}>
                                    <Link
                                      href={child.href}
                                      role="menuitem"
                                      className="flex items-start gap-4 rounded-xl p-4 transition-colors hover:bg-sand/60"
                                    >
                                      {Icon ? (
                                        <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-ocean-deep text-sand">
                                          <Icon className="h-4 w-4" />
                                        </span>
                                      ) : null}
                                      <span className="flex flex-col">
                                        <span className="text-ui text-sm font-semibold text-ocean-deep">
                                          {child.label}
                                        </span>
                                        <span className="text-editorial mt-1 text-xs leading-relaxed text-text-secondary">
                                          {child.description}
                                        </span>
                                      </span>
                                    </Link>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-ui relative inline-flex items-center px-4 py-2 text-sm font-medium transition-colors",
                    active ? "text-sand" : "text-sand/80 hover:text-sand",
                  )}
                >
                  {item.label}
                  {active ? (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute -bottom-1 left-4 right-4 h-[2px] rounded-full bg-coral"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 32,
                      }}
                    />
                  ) : null}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <a
              href={CONTACT.whatsappReservationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ui inline-flex h-10 items-center justify-center gap-2 rounded-full bg-coral px-5 text-sm font-medium text-sand shadow-lg shadow-coral/30 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-coral/90 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-coral"
            >
              <CalendarDays className="h-4 w-4" />
              Reservasi Tukik
            </a>
          </div>

          {/* Mobile trigger */}
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-sand/30 text-sand transition-colors hover:bg-sand/10 lg:hidden"
            aria-label="Buka menu navigasi"
            aria-expanded={mobileOpen}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen ? (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-[55] bg-ocean-deep/70 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
              aria-hidden
            />
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-y-0 left-0 z-[56] flex w-[85%] max-w-sm flex-col bg-shell shadow-2xl lg:hidden"
              role="dialog"
              aria-modal
              aria-label="Menu navigasi"
            >
              <div className="flex items-center justify-between border-b border-sand-dark/30 px-6 py-5">
                <Logo tone="dark" />
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ocean-deep/20 text-ocean-deep hover:bg-ocean-deep/5"
                  aria-label="Tutup menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <nav
                className="flex-1 overflow-y-auto px-4 py-6"
                aria-label="Navigasi mobile"
              >
                <ul className="flex flex-col gap-1">
                  {NAV_LINKS.map((item) => {
                    const hasChildren = "children" in item && item.children;
                    const active = isActive(item.href);
                    return (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className={cn(
                            "text-ui flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition-colors",
                            active
                              ? "bg-ocean-deep text-sand"
                              : "text-ocean-deep hover:bg-sand/70",
                          )}
                        >
                          {item.label}
                        </Link>
                        {hasChildren ? (
                          <ul className="ml-4 mt-1 flex flex-col gap-0.5 border-l border-sand-dark/40 pl-4">
                            {item.children.map((c) => (
                              <li key={c.href}>
                                <Link
                                  href={c.href}
                                  className={cn(
                                    "text-ui block rounded-lg px-3 py-2 text-sm transition-colors",
                                    isActive(c.href)
                                      ? "bg-sand text-ocean-deep"
                                      : "text-text-secondary hover:bg-sand/50 hover:text-ocean-deep",
                                  )}
                                >
                                  {c.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        ) : null}
                      </li>
                    );
                  })}
                </ul>
              </nav>
              <div className="border-t border-sand-dark/30 p-5">
                <a
                  href={CONTACT.whatsappReservationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ui inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-coral px-7 text-base font-medium text-sand shadow-lg shadow-coral/30 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-coral/90 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-coral"
                >
                  <CalendarDays className="h-4 w-4" />
                  Reservasi Tukik
                </a>
              </div>
            </motion.aside>
          </>
        ) : null}
      </AnimatePresence>
    </>
  );
}
