"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronRightIcon, Star } from "lucide-react";
import Link from "next/link";
import React from "react";

const FlagIcon = ({ country }: { country: string }) => {
  const flagMap: Record<string, React.ReactNode> = {
    Philippines: <Icons.flagPH className="size-4 rounded-sm" />,
    USA: <Icons.flagUS className="size-4 rounded-sm" />,
  };
  return flagMap[country] || null;
};

const renderBadge = (badge: string) => {
  // Check if badge contains a country name
  const countries = ["Philippines", "USA"];
  const matchedCountry = countries.find((country) => badge.includes(country));
  
  if (matchedCountry) {
    return (
      <span className="inline-flex items-center gap-1">
        <FlagIcon country={matchedCountry} />
        <span>{matchedCountry}</span>
      </span>
    );
  }
  return badge;
};

interface ResumeCardProps {
  logoUrl?: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period?: string;
  /** Plain paragraph, or bullet strings (from resume-style highlights). */
  description?: string | readonly string[];
  featured?: boolean;
}
export const ResumeCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  description,
  featured = false,
}: ResumeCardProps) => {
  const [isExpanded, setIsExpanded] = React.useState(featured); // Auto-expand featured items

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (description) {
      e.preventDefault();
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <Link
      href={href || "#"}
      className="block cursor-pointer"
      onClick={handleClick}
    >
      <div className={cn("relative", featured && "group/featured py-1")}>
        <Card className="flex relative">
        {logoUrl && (
          <div className="flex-none">
            <Avatar className="border size-12 m-auto bg-muted-background dark:bg-foreground">
              <AvatarImage
                src={logoUrl}
                alt={altText}
                className="object-contain"
              />
              <AvatarFallback>{altText[0]}</AvatarFallback>
            </Avatar>
          </div>
        )}
        <div
          className={cn(
            "flex-grow items-center flex-col group",
            logoUrl && "ml-4"
          )}
        >
          <CardHeader>
            <div className="flex items-center justify-between gap-x-2 text-base">
              <h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm">
                {title}
                {badges && (
                  <span className="inline-flex gap-x-1">
                    {badges.map((badge, index) => (
                      <Badge
                        variant="secondary"
                        className="align-middle text-xs"
                        key={index}
                      >
                        {renderBadge(badge)}
                      </Badge>
                    ))}
                  </span>
                )}
                <ChevronRightIcon
                  className={cn(
                    "size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100",
                    isExpanded ? "rotate-90" : "rotate-0"
                  )}
                />
              </h3>
              {period && (
                <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">
                  {period}
                </div>
              )}
            </div>
            {subtitle && <div className="font-sans text-xs">{subtitle}</div>}
          </CardHeader>
          {description && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: isExpanded ? 1 : 0,

                height: isExpanded ? "auto" : 0,
              }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-2 text-xs sm:text-sm text-muted-foreground"
            >
              {Array.isArray(description) ? (
                <ul className="list-disc space-y-1.5 pl-4 [text-wrap:pretty]">
                  {description.map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>
              ) : (
                description
              )}
            </motion.div>
          )}
        </div>
        {/* Featured badge with star */}
        {featured && (
          <motion.div
            className="absolute -top-3 -right-3 z-20"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.3,
            }}
          >
            <motion.div
              className="relative flex items-center gap-1"
              animate={{ y: [0, -2, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* Glow behind badge */}
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 via-yellow-500 to-orange-500 rounded-full blur-lg opacity-60" />
              {/* Badge pill */}
              <div className="relative flex items-center gap-1.5 bg-gradient-to-r from-amber-500 via-yellow-500 to-orange-500 rounded-full px-3 py-1 shadow-lg shadow-amber-500/50">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <Star className="size-3.5 text-white fill-white" />
                </motion.div>
                <span className="text-xs font-bold text-white tracking-wide">FEATURED</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </Card>
      </div>
    </Link>
  );
};
