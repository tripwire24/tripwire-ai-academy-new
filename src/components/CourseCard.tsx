"use client";

import Link from "next/link";
import {
  Brain,
  Shield,
  Building2,
  MessageSquareCode,
  Terminal,
  Sparkles,
  Image,
  Workflow,
  Lock,
  Clock,
  Users,
  ChevronRight,
  type LucideIcon,
} from "lucide-react";
import type { Course } from "@/src/data/courses";

const iconMap: Record<string, LucideIcon> = {
  Brain,
  Shield,
  Building2,
  MessageSquareCode,
  Terminal,
  Sparkles,
  Image,
  Workflow,
  Lock,
};

const colorMap: Record<string, { bg: string; text: string; border: string; badge: string }> = {
  blue:    { bg: "bg-blue-50 dark:bg-blue-950/30",    text: "text-blue-600 dark:text-blue-400",    border: "border-blue-200 dark:border-blue-800",    badge: "bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300" },
  red:     { bg: "bg-red-50 dark:bg-red-950/30",      text: "text-red-600 dark:text-red-400",      border: "border-red-200 dark:border-red-800",      badge: "bg-red-100 text-red-700 dark:bg-red-900/50 dark:text-red-300" },
  emerald: { bg: "bg-emerald-50 dark:bg-emerald-950/30", text: "text-emerald-600 dark:text-emerald-400", border: "border-emerald-200 dark:border-emerald-800", badge: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300" },
  violet:  { bg: "bg-violet-50 dark:bg-violet-950/30",  text: "text-violet-600 dark:text-violet-400",  border: "border-violet-200 dark:border-violet-800",  badge: "bg-violet-100 text-violet-700 dark:bg-violet-900/50 dark:text-violet-300" },
  cyan:    { bg: "bg-cyan-50 dark:bg-cyan-950/30",    text: "text-cyan-600 dark:text-cyan-400",    border: "border-cyan-200 dark:border-cyan-800",    badge: "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/50 dark:text-cyan-300" },
  amber:   { bg: "bg-amber-50 dark:bg-amber-950/30",   text: "text-amber-600 dark:text-amber-400",   border: "border-amber-200 dark:border-amber-800",   badge: "bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-300" },
  pink:    { bg: "bg-pink-50 dark:bg-pink-950/30",    text: "text-pink-600 dark:text-pink-400",    border: "border-pink-200 dark:border-pink-800",    badge: "bg-pink-100 text-pink-700 dark:bg-pink-900/50 dark:text-pink-300" },
  orange:  { bg: "bg-orange-50 dark:bg-orange-950/30",  text: "text-orange-600 dark:text-orange-400",  border: "border-orange-200 dark:border-orange-800",  badge: "bg-orange-100 text-orange-700 dark:bg-orange-900/50 dark:text-orange-300" },
  rose:    { bg: "bg-rose-50 dark:bg-rose-950/30",    text: "text-rose-600 dark:text-rose-400",    border: "border-rose-200 dark:border-rose-800",    badge: "bg-rose-100 text-rose-700 dark:bg-rose-900/50 dark:text-rose-300" },
};

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  const Icon = iconMap[course.icon] ?? Brain;
  const colors = colorMap[course.color] ?? colorMap.blue;

  return (
    <Link href={`/courses/${course.slug}`} className="group block">
      <div
        className={`relative overflow-hidden rounded-xl border ${colors.border} bg-background p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
      >
        {/* Top row: icon + tier badge */}
        <div className="flex items-start justify-between mb-4">
          <div className={`inline-flex items-center justify-center rounded-lg p-2.5 ${colors.bg}`}>
            <Icon className={`h-6 w-6 ${colors.text}`} />
          </div>
          <span
            className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${colors.badge}`}
          >
            {course.tier === "foundational" ? "Foundational" : "Implementation"}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-semibold text-lg leading-tight mb-2 group-hover:text-accent transition-colors">
          <span className="text-muted-foreground font-mono text-sm mr-1.5">{course.code}</span>
          {course.shortTitle}
        </h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {course.description}
        </p>

        {/* Meta row */}
        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            {course.duration}
          </span>
          <span className="inline-flex items-center gap-1">
            <Users className="h-3.5 w-3.5" />
            {course.audience[0]}
          </span>
        </div>

        {/* CTA */}
        <div className="flex items-center text-sm font-medium text-accent group-hover:gap-2 transition-all">
          View Course
          <ChevronRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}
