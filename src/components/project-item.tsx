import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  /** Two logos side-by-side (e.g. client + platform). Overrides single `image` when set. */
  thumbnailSplit?: readonly [string, string];
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectItem({
  title,
  href,
  description,
  dates,
  tags,
  image,
  thumbnailSplit,
  video,
  links,
  className,
}: Props) {
  const isInternal = href?.startsWith("/");
  const thumbClassName =
    "relative flex-shrink-0 w-32 h-24 overflow-hidden rounded-md block no-underline";
  const thumbInner = (
    <>
      {video && (
        <video
          src={video}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
        />
      )}
      {!video && thumbnailSplit && (
        <div className="flex h-full w-full items-stretch gap-0.5 bg-muted/30 p-1 transition-transform duration-300 group-hover:scale-105">
          <div className="relative min-h-0 min-w-0 flex-1">
            <Image
              src={thumbnailSplit[0]}
              alt={`${title} — MedTech Momentum`}
              fill
              className="object-contain"
              sizes="64px"
            />
          </div>
          <div
            className="w-px shrink-0 self-stretch bg-border/80"
            aria-hidden
          />
          <div className="relative min-h-0 min-w-0 flex-1">
            <Image
              src={thumbnailSplit[1]}
              alt={`${title} — n8n`}
              fill
              className="object-contain"
              sizes="64px"
            />
          </div>
        </div>
      )}
      {image && !video && !thumbnailSplit && (
        <Image
          src={image}
          alt={title}
          width={128}
          height={96}
          className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
        />
      )}
    </>
  );
  const titleInner = (
    <h3 className="inline-flex items-center text-lg leading-none font-semibold group-hover:text-primary transition-colors">
      {title}
      <ChevronRightIcon className="size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100 ml-1" />
    </h3>
  );

  return (
    <div className={cn("group -mx-2 px-2 py-2", className)}>
      <div className="flex items-start gap-6">
        {/* Thumbnail on the left */}
        {isInternal ? (
          <Link
            href={href!}
            className={thumbClassName}
          >
            {thumbInner}
          </Link>
        ) : (
          <a
            href={href || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className={thumbClassName}
          >
            {thumbInner}
          </a>
        )}

        {/* Project details on the right */}
        <div className="flex-1 min-w-0">
          <div className="space-y-2">
            <div>
              {isInternal ? (
                <Link href={href!} className="no-underline">
                  {titleInner}
                </Link>
              ) : (
                <a
                  href={href || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline"
                >
                  {titleInner}
                </a>
              )}
              <time className="block text-xs text-muted-foreground">
                {dates}
              </time>
            </div>

            <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert line-clamp-2">
              {description}
            </Markdown>

            {tags && tags.length > 0 && (
              <div className="flex flex-wrap gap-1">
                {tags.map((tag) => (
                  <Badge
                    className="px-2 py-0 text-[10px]"
                    variant="secondary"
                    key={tag}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {links && links.length > 0 && (
        <div className="flex flex-row flex-wrap items-start gap-2 mt-2 ml-[152px]">
          {links.map((link, idx) => (
            <Link href={link?.href} key={idx} target="_blank">
              <Badge className="flex gap-1.5 px-2 py-1 text-[10px] hover:bg-primary/80 transition-colors">
                {link.icon}
                {link.type}
              </Badge>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
