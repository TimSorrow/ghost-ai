"use client"

import { PanelLeftClose, PanelLeftOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { UserButton } from "@clerk/nextjs"

interface EditorNavbarProps {
  isSidebarOpen: boolean
  onToggleSidebar: () => void
}

export function EditorNavbar({ isSidebarOpen, onToggleSidebar }: EditorNavbarProps) {
  return (
    <header
      className="h-12 shrink-0 flex items-center px-3 bg-surface border-b border-border-default"
    >
      {/* Left — sidebar toggle */}
      <div className="flex items-center">
        <Button
          variant="ghost"
          size="icon-sm"
          onClick={onToggleSidebar}
          aria-label={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
        >
          {isSidebarOpen ? (
            <PanelLeftClose className="h-5 w-5" />
          ) : (
            <PanelLeftOpen className="h-5 w-5" />
          )}
        </Button>
      </div>

      {/* Center */}
      <div className="flex-1" />

      {/* Right — Profile */}
      <div className="flex items-center px-2">
        <UserButton 
          appearance={{
            elements: {
              userButtonAvatarBox: "w-8 h-8 rounded-full border border-border-default"
            }
          }}
        />
      </div>
    </header>
  )
}
