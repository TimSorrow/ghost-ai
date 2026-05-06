"use client"

import { X, Plus, FolderOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

interface ProjectSidebarProps {
  isOpen: boolean
  onClose: () => void
}

export function ProjectSidebar({ isOpen, onClose }: ProjectSidebarProps) {
  return (
    <aside
      className={cn(
        // Float above canvas — does NOT push page content
        "fixed top-12 left-0 z-40",
        "flex flex-col",
        "w-72 h-[calc(100vh-3rem)]",
        "bg-surface border-r border-border-default",
        // Slide-in animation
        "transition-transform duration-200 ease-in-out",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-border-default shrink-0">
        <h2 className="text-sm font-semibold text-text-primary">Projects</h2>
        <Button
          variant="ghost"
          size="icon-sm"
          onClick={onClose}
          aria-label="Close sidebar"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>

      {/* Tabs */}
      <div className="flex flex-col flex-1 overflow-hidden px-3 py-3 min-h-0">
        <Tabs defaultValue="my-projects" className="flex flex-col flex-1 min-h-0">
          <TabsList className="w-full">
            <TabsTrigger value="my-projects" className="flex-1">
              My Projects
            </TabsTrigger>
            <TabsTrigger value="shared" className="flex-1">
              Shared
            </TabsTrigger>
          </TabsList>

          <TabsContent value="my-projects" className="flex flex-col flex-1 mt-3">
            <EmptyState message="No projects yet." />
          </TabsContent>

          <TabsContent value="shared" className="flex flex-col flex-1 mt-3">
            <EmptyState message="No shared projects." />
          </TabsContent>
        </Tabs>
      </div>

      {/* Footer — New Project button */}
      <div className="p-3 border-t border-border-default shrink-0">
        <Button variant="outline" className="w-full gap-2">
          <Plus className="h-4 w-4" />
          New Project
        </Button>
      </div>
    </aside>
  )
}

function EmptyState({ message }: { message: string }) {
  return (
    <div className="flex flex-col items-center justify-center flex-1 gap-3 text-center py-8">
      <FolderOpen className="h-8 w-8 text-text-faint" />
      <p className="text-sm text-text-muted">{message}</p>
    </div>
  )
}
