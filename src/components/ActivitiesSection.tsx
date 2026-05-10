import { activities } from "@/lib/data";
import { CalendarDays, ArrowRight, Lightbulb } from "lucide-react";
import Link from "next/link";

export default function ActivitiesSection() {
  const featured = activities.filter((a) => a.featured);

  return (
    <section id="activities" className="mx-auto max-w-4xl px-4 py-20 sm:px-6">
      <h2 className="text-3xl font-bold tracking-tight">Activities</h2>
      <div className="mt-8 space-y-6">
        {featured.map((activity) => (
          <div
            key={activity.title}
            className="relative rounded-xl border border-foreground/10 p-5 transition-colors hover:bg-foreground/5"
          >
            <div className="flex items-center gap-2 text-sm text-foreground/50">
              <CalendarDays size={14} />
              <time>{activity.date}</time>
            </div>
            <h3 className="mt-2 text-lg font-semibold">{activity.title}</h3>
            <p className="mt-1 text-foreground/70">{activity.description}</p>
            {activity.whatILearned && (
              <div className="mt-3 rounded-lg border border-foreground/5 bg-foreground/[0.02] p-3">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-yellow-600">
                  <Lightbulb size={12} />
                  What I Learned
                </div>
                <p className="mt-1 text-sm text-foreground/60 leading-relaxed">
                  {activity.whatILearned}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link
          href="/activities"
          className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-5 py-2.5 text-sm font-medium transition-colors hover:bg-foreground/5"
        >
          View All Activities
          <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
