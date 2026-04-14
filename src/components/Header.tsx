interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={`absolute top-0 left-0 right-0 z-20 p-6 ${className ?? ""}`}>
      <div className="flex justify-center items-center">
        <p className="font-sans text-xs uppercase tracking-[0.4em]" style={{ color: "var(--warm-brown)" }}>
          А &amp; П · 19.09.2026
        </p>
      </div>
    </header>
  );
}
