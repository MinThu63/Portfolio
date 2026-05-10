"use client";

import { useState } from "react";
import {
  activities,
  representationRecords,
  type InvolvementRecord,
} from "@/lib/data";
import { CalendarDays, ArrowLeft, Search, Lightbulb, ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";

function ActivityCard({ activity }: { activity: (typeof activities)[number] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative rounded-xl border border-foreground/10 p-5 transition-colors hover:bg-foreground/5">
      <div className="flex items-center gap-2 text-sm text-foreground/50">
        <CalendarDays size={14} />
        <time>{activity.date}</time>
      </div>
      <h3 className="mt-2 text-lg font-semibold">{activity.title}</h3>
      <p className="mt-1 text-foreground/70">{activity.description}</p>
      {activity.whatILearned && (
        <>
          <button
            onClick={() => setOpen(!open)}
            className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-yellow-600 transition-colors hover:text-yellow-500"
          >
            <Lightbulb size={12} />
            What I Learned
            {open ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
          </button>
          {open && (
            <p className="mt-2 text-sm text-foreground/60 leading-relaxed">
              {activity.whatILearned}
            </p>
          )}
        </>
      )}
    </div>
  );
}

function InvolvementTable({
  title,
  description,
  records,
}: {
  title: string;
  description: string;
  records: InvolvementRecord[];
}) {
  const [search, setSearch] = useState("");
  const [volunteerOnly, setVolunteerOnly] = useState(false);

  const filtered = records.filter((r) => {
    const matchesSearch =
      r.event.toLowerCase().includes(search.toLowerCase()) ||
      r.level.toLowerCase().includes(search.toLowerCase()) ||
      r.academicYear.toLowerCase().includes(search.toLowerCase());
    const matchesVolunteer = !volunteerOnly || r.volunteer;
    return matchesSearch && matchesVolunteer;
  });

  return (
    <div>
      <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
      <p className="mt-1 text-sm text-foreground/60">{description}</p>

      {/* Search + Volunteer filter */}
      <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground/40"
          />
          <input
            type="text"
            placeholder="Search activities..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-lg border border-foreground/10 bg-background py-2.5 pl-10 pr-4 text-sm outline-none transition-colors focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
          />
        </div>
        <button
          onClick={() => setVolunteerOnly(!volunteerOnly)}
          className={`rounded-full px-4 py-2 text-sm font-medium transition-colors whitespace-nowrap ${
            volunteerOnly
              ? "bg-green-600 text-white"
              : "border border-foreground/20 text-foreground/70 hover:bg-foreground/5"
          }`}
        >
          🤝 Volunteer Work
        </button>
      </div>

      <div className="mt-4 overflow-x-auto rounded-xl border border-foreground/10">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-foreground/10 bg-foreground/5">
            <tr>
              <th className="px-4 py-3 font-semibold w-12">#</th>
              <th className="px-4 py-3 font-semibold">Level</th>
              <th className="px-4 py-3 font-semibold">Event</th>
              <th className="px-4 py-3 font-semibold whitespace-nowrap">
                Academic Year
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-foreground/5">
            {filtered.map((record, i) => (
              <tr
                key={i}
                className="transition-colors hover:bg-foreground/5"
              >
                <td className="px-4 py-3 text-foreground/50 font-medium">
                  {i + 1}
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <span className="rounded-full bg-blue-600/10 px-2.5 py-0.5 text-xs font-medium text-blue-600">
                    {record.level}
                  </span>
                </td>
                <td className="px-4 py-3">{record.event}</td>
                <td className="px-4 py-3 whitespace-nowrap text-foreground/60">
                  {record.academicYear}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {filtered.length === 0 && (
        <p className="mt-4 text-center text-sm text-foreground/50">
          No activities match your search.
        </p>
      )}
      <p className="mt-2 text-xs text-foreground/40">
        Showing {filtered.length} of {records.length} activities
      </p>
    </div>
  );
}

export default function ActivitiesPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm font-medium text-foreground/60 transition-colors hover:text-foreground"
      >
        <ArrowLeft size={16} />
        Back to Home
      </Link>

      <h1 className="mt-8 text-3xl font-bold tracking-tight">All Activities</h1>
      <p className="mt-2 text-foreground/60">
        A complete list of my activities, events, and engagements.
      </p>

      {/* General activities */}
      <div className="mt-10 space-y-6">
        {activities.map((activity) => (
          <ActivityCard key={activity.title} activity={activity} />
        ))}
      </div>

      {/* Representation table */}
      <div className="mt-16">
        <InvolvementTable
          title="Representation"
          description="Involvement in activities that interfaces with the public, industry partners, external agencies, award ceremonies and key RP events."
          records={representationRecords}
        />
      </div>
    </div>
  );
}
