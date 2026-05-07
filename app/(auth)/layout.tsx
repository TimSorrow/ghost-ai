import { ReactNode } from "react";
import { Sparkles, Users, FileText } from "lucide-react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen bg-base">
      {/* Left panel — Branding & Features */}
      <div className="relative hidden lg:flex lg:flex-1 flex-col justify-center px-12 xl:px-24 bg-elevated border-r border-border-default">
        <div className="max-w-md">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-20">
            <div className="w-10 h-10 rounded-lg bg-[#00c8d4] flex items-center justify-center shadow-[0_0_20px_rgba(0,200,212,0.3)]">
              <div className="w-5 h-5 bg-black rounded-sm transform rotate-45" />
            </div>
            <span className="text-xl font-bold text-text-primary tracking-tight">
              Ghost AI
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-[40px] leading-[1.1] font-bold text-text-primary mb-6 tracking-tight">
            Design systems at the <br /> speed of thought.
          </h1>
          <p className="text-[17px] leading-relaxed text-text-muted mb-16">
            Describe your architecture in plain English. Ghost AI maps it to a shared canvas your whole team can refine in real time.
          </p>

          {/* Features */}
          <div className="space-y-10">
            <div className="flex gap-5">
              <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-md bg-brand-dim flex items-center justify-center border border-brand/20">
                <Sparkles className="w-4 h-4 text-brand" />
              </div>
              <div>
                <h3 className="text-[15px] font-semibold text-text-primary mb-1">AI Architecture Generation</h3>
                <p className="text-[14px] text-text-muted leading-relaxed">
                  Describe your system, AI maps it to nodes and edges on a live canvas.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-md bg-brand-dim flex items-center justify-center border border-brand/20">
                <Users className="w-4 h-4 text-brand" />
              </div>
              <div>
                <h3 className="text-[15px] font-semibold text-text-primary mb-1">Real-time Collaboration</h3>
                <p className="text-[14px] text-text-muted leading-relaxed">
                  Live cursors, presence indicators, and shared node editing across your team.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-md bg-brand-dim flex items-center justify-center border border-brand/20">
                <FileText className="w-4 h-4 text-brand" />
              </div>
              <div>
                <h3 className="text-[15px] font-semibold text-text-primary mb-1">Instant Spec Generation</h3>
                <p className="text-[14px] text-text-muted leading-relaxed">
                  Export a complete Markdown technical spec directly from the canvas graph.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="absolute bottom-10 left-12 xl:left-24">
          <p className="text-[12px] text-text-faint">© 2026 Ghost AI. All rights reserved.</p>
        </div>
      </div>

      {/* Right panel — Auth Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-[440px]">
          {children}
        </div>
      </div>
    </div>
  );
}
