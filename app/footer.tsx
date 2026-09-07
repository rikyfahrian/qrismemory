/** @format */

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t mt-8 py-8 px-6 bg-green-500">
      <div className="absolute inset-0 halftone-pattern opacity-40" />
      <div className="relative flex flex-col items-center gap-2">
        <p className="bubble-text text-3xl sm:text-4xl">Create things you wish existed</p>
        <p className="text-white/90 text-sm font-medium">© {new Date().getFullYear()} Take Care</p>
      </div>
    </footer>
  );
}
