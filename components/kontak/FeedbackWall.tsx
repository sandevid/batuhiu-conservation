"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Send, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FEEDBACK_TYPES, type FeedbackType } from "@/lib/constants";
import { cn, formatDateID, maskName } from "@/lib/utils";

const STORAGE_KEY = "bhc:feedback:v1";

type FeedbackEntry = {
  id: string;
  name: string;
  email?: string;
  type: FeedbackType;
  message: string;
  createdAt: string;
};

type FormState = {
  name: string;
  email: string;
  type: FeedbackType;
  message: string;
};

function loadEntries(): FeedbackEntry[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveEntries(entries: FeedbackEntry[]) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
  } catch {
    // Ignore storage errors
  }
}

const SEED: FeedbackEntry[] = [
  {
    id: "seed-1",
    name: "Andrea Saputri",
    type: "Komentar",
    message:
      "Pengalaman terbaik bawa anak-anak ke Batu Hiu. Tim pemandu ramah dan edukatif!",
    createdAt: "2025-05-14T08:30:00.000Z",
  },
  {
    id: "seed-2",
    name: "Budi Prasetya",
    type: "Saran",
    message:
      "Mungkin bisa ditambah papan informasi di lokasi tentang siklus hidup penyu.",
    createdAt: "2025-05-08T11:20:00.000Z",
  },
  {
    id: "seed-3",
    name: "Lintang Maharani",
    type: "Kolaborasi",
    message:
      "Kami dari komunitas pecinta laut Bandung, ingin kolaborasi riset dan edukasi.",
    createdAt: "2025-04-29T15:10:00.000Z",
  },
];

const TYPE_COLOR: Record<FeedbackType, string> = {
  Komentar: "border-seafoam/40 bg-seafoam/10 text-seafoam",
  Saran: "border-earth/40 bg-earth/10 text-earth",
  Pertanyaan: "border-ocean-light/40 bg-ocean-light/10 text-ocean-light",
  Kolaborasi: "border-coral/40 bg-coral/10 text-coral",
};

export function FeedbackWall() {
  const [entries, setEntries] = useState<FeedbackEntry[]>(() => {
    // Lazy initializer runs only on first render on the client.
    // On the server, useState returns the initial value ([]), then the
    // mount-effect below hydrates from localStorage.
    if (typeof window === "undefined") return [];
    const stored = loadEntries();
    return stored.length > 0 ? stored : SEED;
  });
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    type: "Komentar",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  // One-time hydration: persist the seed into storage if none exists yet.
  // We only write here — no setState — so the set-state-in-effect rule is
  // not triggered.
  useEffect(() => {
    if (loadEntries().length === 0) {
      saveEntries(SEED);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.message.trim()) return;

    const entry: FeedbackEntry = {
      id: `${Date.now()}`,
      name: form.name.trim(),
      email: form.email.trim() || undefined,
      type: form.type,
      message: form.message.trim(),
      createdAt: new Date().toISOString(),
    };
    const next = [entry, ...entries];
    setEntries(next);
    saveEntries(next);
    setForm({ name: "", email: "", type: "Komentar", message: "" });
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3500);
  };

  return (
    <div id="feedback" className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 rounded-3xl border border-sand-dark/50 bg-shell p-8 md:p-10"
      >
        <div>
          <p className="text-ui text-xs font-semibold uppercase tracking-[0.28em] text-coral">
            Feedback & Komentar
          </p>
          <h3 className="text-heading mt-2 text-3xl text-ocean-deep">
            Kami senang mendengar suara anda.
          </h3>
        </div>

        <label className="flex flex-col gap-2">
          <span className="text-ui text-xs font-semibold uppercase tracking-[0.22em] text-text-secondary">
            Nama <span className="text-coral">*</span>
          </span>
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            className="text-editorial rounded-xl border border-sand-dark/60 bg-sand/40 px-4 py-3 text-base text-ocean-deep focus:border-coral focus:outline-none"
          />
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-ui text-xs font-semibold uppercase tracking-[0.22em] text-text-secondary">
            Email (opsional)
          </span>
          <input
            type="email"
            value={form.email}
            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
            className="text-editorial rounded-xl border border-sand-dark/60 bg-sand/40 px-4 py-3 text-base text-ocean-deep focus:border-coral focus:outline-none"
          />
        </label>

        <fieldset className="flex flex-col gap-3">
          <legend className="text-ui text-xs font-semibold uppercase tracking-[0.22em] text-text-secondary">
            Jenis Pesan
          </legend>
          <div className="flex flex-wrap gap-2">
            {FEEDBACK_TYPES.map((t) => {
              const active = form.type === t;
              return (
                <label
                  key={t}
                  className={cn(
                    "text-ui inline-flex cursor-pointer items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                    active
                      ? "border-ocean-deep bg-ocean-deep text-sand"
                      : "border-sand-dark/60 text-ocean-deep hover:bg-sand/60",
                  )}
                >
                  <input
                    type="radio"
                    name="type"
                    value={t}
                    checked={active}
                    onChange={() =>
                      setForm((f) => ({ ...f, type: t }))
                    }
                    className="sr-only"
                  />
                  {t}
                </label>
              );
            })}
          </div>
        </fieldset>

        <label className="flex flex-col gap-2">
          <span className="text-ui text-xs font-semibold uppercase tracking-[0.22em] text-text-secondary">
            Pesan <span className="text-coral">*</span>
          </span>
          <textarea
            rows={5}
            required
            value={form.message}
            onChange={(e) =>
              setForm((f) => ({ ...f, message: e.target.value }))
            }
            className="text-editorial resize-none rounded-xl border border-sand-dark/60 bg-sand/40 px-4 py-3 text-base text-ocean-deep focus:border-coral focus:outline-none"
          />
        </label>

        <div className="flex items-center justify-between gap-4">
          <AnimatePresence>
            {submitted ? (
              <motion.span
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 8 }}
                className="text-ui text-sm text-seafoam"
              >
                Terima kasih — pesan anda tampil di dinding komentar.
              </motion.span>
            ) : (
              <span />
            )}
          </AnimatePresence>
          <Button as="button" variant="coral" size="md" type="submit">
            <Send className="h-4 w-4" />
            Kirim Pesan
          </Button>
        </div>
      </form>

      {/* Wall */}
      <div className="flex flex-col gap-6">
        <div>
          <p className="text-ui text-xs font-semibold uppercase tracking-[0.28em] text-coral">
            Dinding Komentar
          </p>
          <h3 className="text-heading mt-2 text-3xl text-ocean-deep">
            Apa kata pengunjung.
          </h3>
          <p className="text-editorial mt-2 text-sm text-text-secondary">
            Nama dimunculkan dalam bentuk tersamar untuk melindungi privasi
            pengirim.
          </p>
        </div>
        <ul className="flex flex-col gap-4">
          <AnimatePresence initial={false}>
            {entries.map((entry) => (
              <motion.li
                key={entry.id}
                layout
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className="rounded-2xl border border-sand-dark/40 bg-sand/60 p-5"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-ocean-deep text-sand">
                      <MessageSquare className="h-4 w-4" />
                    </span>
                    <div className="flex flex-col">
                      <p className="text-ui text-sm font-semibold text-ocean-deep">
                        {maskName(entry.name)}
                      </p>
                      <p className="text-ui text-[11px] uppercase tracking-[0.22em] text-text-muted">
                        {formatDateID(entry.createdAt)}
                      </p>
                    </div>
                  </div>
                  <span
                    className={cn(
                      "text-ui inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em]",
                      TYPE_COLOR[entry.type],
                    )}
                  >
                    {entry.type}
                  </span>
                </div>
                <p className="text-editorial mt-4 text-base leading-relaxed text-text-secondary">
                  {entry.message}
                </p>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      </div>
    </div>
  );
}
