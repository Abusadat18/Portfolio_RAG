"use client";

import { useEffect, useState } from "react";

const ROLES = [
  "Full Stack Developer",
  "AI Engineer",
  "RAG Specialist",
  "Open Source Contributor",
  "Problem Solver",
];

export default function Typewriter() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const t = setInterval(() => setCursorVisible((v) => !v), 530);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const current = ROLES[roleIndex];

    if (!deleting && displayed.length < current.length) {
      const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 70);
      return () => clearTimeout(t);
    }
    if (!deleting && displayed.length === current.length) {
      const t = setTimeout(() => setDeleting(true), 2200);
      return () => clearTimeout(t);
    }
    if (deleting && displayed.length > 0) {
      const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
      return () => clearTimeout(t);
    }
    if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }
  }, [displayed, deleting, roleIndex]);

  return (
    <div className="flex items-center gap-1.5">
      <span className="text-[#33ff66] font-code text-xl sm:text-2xl md:text-3xl font-medium tracking-tight">
        {displayed}
      </span>
      <span
        className={`inline-block w-[3px] h-6 sm:h-8 md:h-9 bg-[#33ff66] rounded-full transition-opacity duration-100 ${
          cursorVisible ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}
