import { useState, useRef, useEffect } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { IntroSection } from "@/components/IntroSection"
import { ProjectCard } from "@/components/ProjectCard"
import { ProjectDialog } from "@/components/ProjectDialog"
import { portfolioData } from "@/config/portfolioData"

function App() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [dialogOpen, setDialogOpen] = useState(false)
  const scrollContainerRef = useRef(null)

  useEffect(() => {
    const handleWheel = (e) => {
      // If the event target is inside a scrollable element (like a dialog or intro section), don't hijack it
      const target = e.target
      
      // Check if target is inside the dialog or intro section which have vertical scroll
      if (
        target.closest('[role="dialog"]') || 
        target.closest('.overflow-y-auto') ||
        target.closest('.hidden-scrollbar')
      ) {
        return
      }

      if (e.deltaY !== 0 && scrollContainerRef.current) {
        // Prevent default vertical scrolling to translate to horizontal
        if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
          scrollContainerRef.current.scrollLeft += e.deltaY * 1.5
          e.preventDefault()
        }
      }
    }

    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false })
    }

    return () => {
      if (container) {
        container.removeEventListener("wheel", handleWheel)
      }
    }
  }, [])

  const handleProjectClick = (project) => {
    setSelectedProject(project)
    setDialogOpen(true)
  }

  return (
    <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
      <div 
        ref={scrollContainerRef}
        className="flex h-screen w-screen overflow-x-auto overflow-y-hidden snap-x snap-mandatory bg-background text-foreground"
      >
        <IntroSection personalInfo={portfolioData.personalInfo} />
        
        <main className="flex items-center gap-8 px-12 py-8 min-w-max">
          {portfolioData.projects.map((project, idx) => (
            <div key={project.id} className="snap-center">
              <ProjectCard 
                project={project} 
                onClick={handleProjectClick} 
              />
            </div>
          ))}
          {/* Spacer at the end for comfortable scrolling */}
          <div className="w-12 shrink-0"></div>
        </main>
      </div>

      <ProjectDialog 
        project={selectedProject} 
        open={dialogOpen} 
        onOpenChange={setDialogOpen} 
      />
    </ThemeProvider>
  )
}

export default App
