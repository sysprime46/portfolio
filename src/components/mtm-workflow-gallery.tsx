"use client";

import { cn } from "@/lib/utils";
import {
  mtmWorkflowGallery,
  workflowImageSrc,
} from "@/data/mtm-workflow-gallery";
import { AnimatePresence, motion } from "framer-motion";
import { XIcon } from "lucide-react";
import Image from "next/image";
import * as React from "react";

/** Wider “hero” tiles for visual rhythm (stable without explicit grid rows). */
const bentoClass = (index: number) =>
  cn(
    (index === 0 || index === 8 || index === 16) && "lg:col-span-2",
    index === 5 && "md:col-span-2",
  );

export function MtmWorkflowGallery() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIndex(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  React.useEffect(() => {
    if (openIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [openIndex]);

  return (
    <>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
        {mtmWorkflowGallery.map((item, index) => {
          const src = workflowImageSrc(item.file);
          return (
            <motion.button
              key={item.file}
              type="button"
              layout
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.45,
                delay: Math.min(index * 0.03, 0.45),
                ease: [0.16, 1, 0.3, 1],
              }}
              onClick={() => setOpenIndex(index)}
              className={cn(
                "group relative min-h-[220px] overflow-hidden rounded-2xl border border-border/80 bg-gradient-to-br from-muted/40 via-background to-muted/20 text-left shadow-sm ring-1 ring-black/5 transition-all hover:border-primary/40 hover:shadow-lg hover:ring-primary/10 dark:ring-white/10 dark:hover:ring-primary/20 lg:min-h-[200px]",
                (index === 0 || index === 8 || index === 16) && "lg:min-h-[280px]",
                bentoClass(index),
              )}
            >
              <Image
                src={src}
                alt={item.caption}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/20 to-transparent opacity-90 transition-opacity group-hover:opacity-100"
                aria-hidden
              />
              <div className="absolute inset-x-0 bottom-0 p-3 md:p-4">
                <p className="text-xs font-medium leading-snug text-foreground drop-shadow-sm md:text-sm">
                  {item.caption}
                </p>
                <p className="mt-1 text-[10px] text-muted-foreground md:text-xs">
                  Click to expand
                </p>
              </div>
            </motion.button>
          );
        })}
      </div>

      <AnimatePresence>
        {openIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <button
              type="button"
              className="absolute inset-0 bg-background/80 backdrop-blur-md"
              aria-label="Close gallery"
              onClick={() => setOpenIndex(null)}
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={mtmWorkflowGallery[openIndex].caption}
              className="relative z-10 flex max-h-[min(92vh,900px)] w-full max-w-6xl flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-2xl"
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-start justify-between gap-3 border-b border-border px-4 py-3 md:px-5">
                <p className="pr-8 text-sm font-medium leading-snug md:text-base">
                  {mtmWorkflowGallery[openIndex].caption}
                </p>
                <button
                  type="button"
                  onClick={() => setOpenIndex(null)}
                  className="shrink-0 rounded-lg border border-border bg-muted/50 p-2 text-foreground transition-colors hover:bg-muted"
                  aria-label="Close"
                >
                  <XIcon className="size-4" />
                </button>
              </div>
              <div className="relative min-h-[50vh] flex-1 bg-muted/30">
                <Image
                  src={workflowImageSrc(mtmWorkflowGallery[openIndex].file)}
                  alt={mtmWorkflowGallery[openIndex].caption}
                  fill
                  className="object-contain p-2 md:p-4"
                  sizes="(max-width: 1200px) 100vw, 1152px"
                  priority
                />
              </div>
              <div className="flex items-center justify-between gap-2 border-t border-border px-4 py-3 text-xs text-muted-foreground md:px-5">
                <span>
                  {openIndex + 1} / {mtmWorkflowGallery.length}
                </span>
                <div className="flex gap-2">
                  <button
                    type="button"
                    disabled={openIndex <= 0}
                    onClick={() => setOpenIndex((i) => (i !== null ? i - 1 : i))}
                    className="rounded-md border border-border px-3 py-1.5 text-foreground transition-colors enabled:hover:bg-muted disabled:opacity-40"
                  >
                    Previous
                  </button>
                  <button
                    type="button"
                    disabled={openIndex >= mtmWorkflowGallery.length - 1}
                    onClick={() => setOpenIndex((i) => (i !== null ? i + 1 : i))}
                    className="rounded-md border border-border px-3 py-1.5 text-foreground transition-colors enabled:hover:bg-muted disabled:opacity-40"
                  >
                    Next
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
