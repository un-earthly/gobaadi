export function SkipNav() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-xl focus:bg-brand-primary focus:px-6 focus:py-3 focus:text-white focus:shadow-lg"
    >
      Skip to main content
    </a>
  );
}
