"use client";

import { motion } from "framer-motion";
import React, { Fragment, useMemo } from "react";

interface Props {
  content: string;
}

type Block =
  | { type: "text"; content: string }
  | { type: "project"; name: string; description: string; tech: string[]; link: string }
  | { type: "contact"; contactType: string; value: string; link: string };

function ensureClosedBlocks(raw: string): string {
  const opens = (raw.match(/^:::(project|contact)/gm) || []).length;
  const closes = (raw.match(/^:::$/gm) || []).length;
  if (opens > closes) return raw.trimEnd() + "\n:::";
  return raw;
}

function parseBlocks(raw: string): Block[] {
  raw = ensureClosedBlocks(raw);
  const blocks: Block[] = [];
  const regex = /:::(project|contact)\n([\s\S]*?):::/g;
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(raw)) !== null) {
    // Text before this block
    if (match.index > lastIndex) {
      const text = raw.slice(lastIndex, match.index).trim();
      if (text) blocks.push({ type: "text", content: text });
    }

    const blockType = match[1];
    const body = match[2].trim();
    const fields: Record<string, string> = {};
    body.split("\n").forEach((line) => {
      const idx = line.indexOf(":");
      if (idx > 0) {
        fields[line.slice(0, idx).trim()] = line.slice(idx + 1).trim();
      }
    });

    if (blockType === "project") {
      blocks.push({
        type: "project",
        name: fields.name || "Untitled Project",
        description: fields.description || "",
        tech: (fields.tech || "").split(",").map((t) => t.trim()).filter(Boolean),
        link: fields.link || "#",
      });
    } else if (blockType === "contact") {
      blocks.push({
        type: "contact",
        contactType: fields.type || "link",
        value: fields.value || "",
        link: fields.link || "#",
      });
    }

    lastIndex = match.index + match[0].length;
  }

  // Remaining text
  if (lastIndex < raw.length) {
    const text = raw.slice(lastIndex).trim();
    if (text) blocks.push({ type: "text", content: text });
  }

  return blocks;
}

function renderInlineFormatting(text: string) {
  const parts: (string | React.ReactElement)[] = [];
  // Match **bold**, `code`, and [text](url)
  const re = /(\*\*(.+?)\*\*)|(`(.+?)`)|(\[(.+?)\]\((.+?)\))/g;
  let last = 0;
  let m;

  while ((m = re.exec(text)) !== null) {
    if (m.index > last) parts.push(text.slice(last, m.index));

    if (m[1]) {
      parts.push(<strong key={m.index} className="text-[var(--text-primary)] font-semibold">{m[2]}</strong>);
    } else if (m[3]) {
      parts.push(
        <code key={m.index} className="px-1.5 py-0.5 rounded bg-[#33ff66]/10 text-[#33ff66] font-code text-[13px]">
          {m[4]}
        </code>
      );
    } else if (m[5]) {
      parts.push(
        <a key={m.index} href={m[7]} target="_blank" rel="noopener noreferrer" className="text-[#33ff66] underline underline-offset-2 hover:brightness-125 transition-all">
          {m[6]}
        </a>
      );
    }

    last = m.index + m[0].length;
  }

  if (last < text.length) parts.push(text.slice(last));
  return parts;
}

function TextBlock({ content }: { content: string }) {
  const lines = content.split("\n");

  return (
    <div className="space-y-1.5">
      {lines.map((line, i) => {
        const trimmed = line.trim();
        if (!trimmed) return <div key={i} className="h-2" />;

        if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
          return (
            <div key={i} className="flex gap-2 items-start">
              <span className="text-[#33ff66] mt-0.5 shrink-0">-</span>
              <span>{renderInlineFormatting(trimmed.slice(2))}</span>
            </div>
          );
        }

        return <p key={i}>{renderInlineFormatting(trimmed)}</p>;
      })}
    </div>
  );
}

function ProjectCard({ name, description, tech, link }: Block & { type: "project" }) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.02, borderColor: "rgba(51,255,102,0.4)" }}
      className="block glass-card p-4 my-3 group"
    >
      <div className="flex items-center justify-between mb-2">
        <h4 className="font-semibold text-[var(--text-primary)] group-hover:text-[#33ff66] transition-colors">
          {name}
        </h4>
        <span className="text-[#33ff66] font-code text-xs opacity-60 group-hover:opacity-100 transition-opacity">
          ↗
        </span>
      </div>
      {description && (
        <p className="text-[var(--text-secondary)] text-sm mb-3 leading-relaxed">{description}</p>
      )}
      {tech.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {tech.map((t) => (
            <span key={t} className="px-2 py-0.5 text-xs rounded-full bg-[#33ff66]/8 text-[#33ff66]/80 border border-[#33ff66]/15 font-code">
              {t}
            </span>
          ))}
        </div>
      )}
    </motion.a>
  );
}

function ContactBlock({ contactType, value, link }: Block & { type: "contact" }) {
  const icons: Record<string, string> = { email: "@", github: "GH", linkedin: "IN" };
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.02, borderColor: "rgba(51,255,102,0.4)" }}
      className="inline-flex items-center gap-3 glass-card px-4 py-3 my-2 mr-2 group"
    >
      <span className="w-8 h-8 rounded-lg bg-[#33ff66]/10 flex items-center justify-center text-[#33ff66] font-code text-xs font-bold">
        {icons[contactType] || "→"}
      </span>
      <div>
        <p className="text-xs text-[var(--text-secondary)] capitalize">{contactType}</p>
        <p className="text-sm text-[var(--text-primary)] group-hover:text-[#33ff66] transition-colors font-medium">
          {value}
        </p>
      </div>
    </motion.a>
  );
}

export default function RichMessage({ content }: Props) {
  const blocks = useMemo(() => parseBlocks(content), [content]);

  if (blocks.length === 0) return null;

  return (
    <div className="space-y-2">
      {blocks.map((block, i) => (
        <Fragment key={i}>
          {block.type === "text" && <TextBlock content={block.content} />}
          {block.type === "project" && <ProjectCard {...block} />}
          {block.type === "contact" && <ContactBlock {...block} />}
        </Fragment>
      ))}
    </div>
  );
}
