import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen bg-base">
      {/* Left panel — Branding & Features (hidden on small screens) */}
      <div className="hidden lg:flex lg:flex-1 flex-col justify-center px-12 xl:px-24 bg-surface border-r border-border-default">
        <div className="max-w-md">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-8 h-8 rounded bg-brand flex items-center justify-center">
              <span className="text-base font-bold text-black">G</span>
            </div>
            <span className="text-xl font-bold text-text-primary tracking-tight">
              Ghost AI
            </span>
          </div>

          <h1 className="text-4xl font-bold text-text-primary mb-4 tracking-tight">
            Design your system in plain English.
          </h1>
          <p className="text-lg text-text-secondary mb-12">
            Real-time collaborative workspace for architects and engineers.
          </p>

          <ul className="space-y-4 text-text-muted">
            <li className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-brand" />
              <span>AI-powered architecture generation</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-brand" />
              <span>Collaborative real-time canvas</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-brand" />
              <span>Technical spec generation from graph</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Right panel — Auth Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        {children}
      </div>
    </div>
  );
}
