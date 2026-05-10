"use client";

import { useState } from "react";
import { academicRecords, cGPA } from "@/lib/data";
import { ArrowLeft, GraduationCap, Star } from "lucide-react";
import Link from "next/link";

const gradingScale = [
  { grade: "DIST", point: "4.0", description: "Distinction" },
  { grade: "A", point: "4.0", description: "Excellent" },
  { grade: "B+", point: "3.5", description: "Very Good" },
  { grade: "B", point: "3.0", description: "Very Good" },
  { grade: "C+", point: "2.5", description: "Good" },
  { grade: "C", point: "2.0", description: "Good" },
  { grade: "D+", point: "1.5", description: "Pass" },
  { grade: "D", point: "1.0", description: "Pass" },
  { grade: "F", point: "0.0", description: "Fail" },
  { grade: "Pass", point: "—", description: "Non-graded pass (not in cGPA)" },
];

function getGradeColor(grade: string) {
  if (grade === "DIST") return "text-yellow-600 bg-yellow-500/10";
  if (grade === "A") return "text-green-600 bg-green-500/10";
  if (grade === "B+" || grade === "B") return "text-blue-600 bg-blue-500/10";
  if (grade === "Pass") return "text-foreground/40 bg-foreground/5";
  return "text-foreground/60 bg-foreground/5";
}

export default function AcademicsPage() {
  const allGrades = [...new Set(academicRecords.map((m) => m.grade))];
  const allCredits = [...new Set(academicRecords.map((m) => m.credits))].sort(
    (a, b) => a - b
  );

  const [selectedGrades, setSelectedGrades] = useState<string[]>([]);
  const [selectedCredits, setSelectedCredits] = useState<number[]>([]);

  const toggleGrade = (grade: string) => {
    setSelectedGrades((prev) =>
      prev.includes(grade) ? prev.filter((g) => g !== grade) : [...prev, grade]
    );
  };

  const toggleCredit = (credit: number) => {
    setSelectedCredits((prev) =>
      prev.includes(credit)
        ? prev.filter((c) => c !== credit)
        : [...prev, credit]
    );
  };

  const filtered = academicRecords.filter((mod) => {
    const gradeMatch =
      selectedGrades.length === 0 || selectedGrades.includes(mod.grade);
    const creditMatch =
      selectedCredits.length === 0 || selectedCredits.includes(mod.credits);
    return gradeMatch && creditMatch;
  });

  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm font-medium text-foreground/60 transition-colors hover:text-foreground"
      >
        <ArrowLeft size={16} />
        Back to Home
      </Link>

      <h1 className="mt-8 text-3xl font-bold tracking-tight">
        Unofficial Statement of Results
      </h1>
      <p className="mt-2 text-foreground/60">
        Republic Polytechnic — Diploma in Information Technology
      </p>

      <div className="mt-4 inline-flex items-center gap-2 rounded-lg bg-blue-600/10 px-4 py-2 text-sm font-medium text-blue-600">
        <GraduationCap size={16} />
        Cumulative GPA: {cGPA.toFixed(2)} / 4.00
      </div>

      {/* Filters */}
      <div className="mt-8 rounded-xl border border-foreground/10 p-5">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <p className="text-sm font-semibold text-foreground/70">Filter by Grade</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {allGrades.map((grade) => (
                <button
                  key={grade}
                  onClick={() => toggleGrade(grade)}
                  className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-colors ${
                    selectedGrades.includes(grade)
                      ? "bg-foreground text-background"
                      : `border border-foreground/20 ${getGradeColor(grade)}`
                  }`}
                >
                  {grade}
                </button>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground/70">
              Filter by Modular Credits
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {allCredits.map((credit) => (
                <button
                  key={credit}
                  onClick={() => toggleCredit(credit)}
                  className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-colors ${
                    selectedCredits.includes(credit)
                      ? "bg-foreground text-background"
                      : "border border-foreground/20 text-foreground/60"
                  }`}
                >
                  {credit} CU
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-4 flex items-center gap-4">
          {(selectedGrades.length > 0 || selectedCredits.length > 0) && (
            <button
              onClick={() => {
                setSelectedGrades([]);
                setSelectedCredits([]);
              }}
              className="text-xs font-medium text-blue-600 hover:text-blue-500"
            >
              Clear all filters
            </button>
          )}
          <p className="text-xs text-foreground/40">
            Showing {filtered.length} of {academicRecords.length} modules
          </p>
        </div>
      </div>

      {/* Full transcript table */}
      <div className="mt-6 overflow-x-auto rounded-xl border border-foreground/10">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-foreground/10 bg-foreground/5">
            <tr>
              <th className="px-4 py-3 font-semibold whitespace-nowrap">
                Academic Year
              </th>
              <th className="px-4 py-3 font-semibold text-center">Semester</th>
              <th className="px-4 py-3 font-semibold whitespace-nowrap">
                Module Code
              </th>
              <th className="px-4 py-3 font-semibold">Module Name</th>
              <th className="px-4 py-3 font-semibold text-center whitespace-nowrap">
                Modular Credits
              </th>
              <th className="px-4 py-3 font-semibold text-center">Grade</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-foreground/5">
            {filtered.map((mod) => (
              <tr
                key={mod.code}
                className="transition-colors hover:bg-foreground/5"
              >
                <td className="px-4 py-3 text-foreground/60">
                  {mod.academicYear}
                </td>
                <td className="px-4 py-3 text-center text-foreground/60">
                  {mod.semester}
                </td>
                <td className="px-4 py-3 font-mono text-xs text-foreground/60">
                  {mod.code}
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    {mod.grade === "DIST" && (
                      <Star size={12} className="shrink-0 text-yellow-500" />
                    )}
                    {mod.name}
                  </div>
                </td>
                <td className="px-4 py-3 text-center text-foreground/60">
                  {mod.credits}
                </td>
                <td className="px-4 py-3 text-center">
                  <span
                    className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold ${getGradeColor(
                      mod.grade
                    )}`}
                  >
                    {mod.grade}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {filtered.length === 0 && (
        <p className="mt-4 text-center text-sm text-foreground/50">
          No modules match the selected filters.
        </p>
      )}

      <p className="mt-4 text-sm text-foreground/50">
        Cumulative Grade Point Average (cGPA):{" "}
        <span className="font-bold text-foreground">{cGPA.toFixed(2)}</span>
      </p>

      {/* Grading Legend */}
      <div className="mt-16">
        <h2 className="text-lg font-semibold">Grading Scale</h2>
        <p className="mt-1 text-sm text-foreground/50">
          Academic Year 2011 onwards. Distinction is awarded from AY2012
          onwards.
        </p>
        <div className="mt-4 overflow-x-auto rounded-xl border border-foreground/10">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-foreground/10 bg-foreground/5">
              <tr>
                <th className="px-4 py-3 font-semibold">Grade</th>
                <th className="px-4 py-3 font-semibold">Point</th>
                <th className="px-4 py-3 font-semibold">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-foreground/5">
              {gradingScale.map((row) => (
                <tr
                  key={row.grade}
                  className="transition-colors hover:bg-foreground/5"
                >
                  <td className="px-4 py-2.5">
                    <span
                      className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold ${getGradeColor(
                        row.grade
                      )}`}
                    >
                      {row.grade}
                    </span>
                  </td>
                  <td className="px-4 py-2.5 text-foreground/60">
                    {row.point}
                  </td>
                  <td className="px-4 py-2.5 text-foreground/60">
                    {row.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-foreground/40">
          Modules for which grade point or modular credit is not accorded will
          not be considered in the computation of the cGPA.
        </p>
      </div>
    </div>
  );
}
