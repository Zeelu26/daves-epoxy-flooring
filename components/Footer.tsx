export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="mx-auto max-w-6xl px-6 py-12">

        <h2 className="text-2xl font-bold">
          Dave&apos;s Epoxy Flooring
        </h2>

        <p className="mt-4 text-neutral-400 max-w-md">
          Professional epoxy flooring services for homes and businesses across New Jersey.
        </p>

        <div className="mt-6 text-sm text-neutral-500">
          © {new Date().getFullYear()} Dave&apos;s Epoxy Flooring. All rights reserved.
        </div>

      </div>
    </footer>
  );
}