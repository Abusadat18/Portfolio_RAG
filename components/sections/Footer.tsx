export default function Footer() {
  return (
    <footer className="text-center py-10 text-sm text-[var(--text-secondary)] border-t border-[var(--border)]">
      <p>
        Made with 💚 by Sadat
        <span className="mx-3 opacity-40">|</span>
        <a
          href="https://github.com/Abusadat18/Portfolio_RAG"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#33ff66] transition-colors"
        >
          View Source
        </a>
      </p>
      <p className="mt-2 opacity-40">© {new Date().getFullYear()} Abu Sadat Ansari</p>
    </footer>
  );
}
