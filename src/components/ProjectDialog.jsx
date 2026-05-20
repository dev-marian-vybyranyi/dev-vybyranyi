import { ExternalLink, Code } from "lucide-react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function ProjectDialog({ project, open, onOpenChange }) {
  if (!project) return null

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl p-0 overflow-hidden bg-background border-border/50 shadow-2xl flex flex-col md:flex-row max-h-[90vh]">
        {/* Left: Images Carousel */}
        <div className="w-full md:w-3/5 bg-muted p-6 flex flex-col justify-center">
          <Carousel className="w-full max-w-xl mx-auto">
            <CarouselContent>
              {project.screenshots.map((src, index) => (
                <CarouselItem key={index}>
                  <div className="rounded-xl overflow-hidden border border-border shadow-sm aspect-video">
                    <img 
                      src={src} 
                      alt={`${project.title} screenshot ${index + 1}`} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {project.screenshots.length > 1 && (
              <>
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
              </>
            )}
          </Carousel>
        </div>

        {/* Right: Details */}
        <div className="w-full md:w-2/5 p-8 flex flex-col overflow-y-auto">
          <DialogHeader className="mb-6 space-y-3">
            <DialogTitle className="text-3xl font-bold tracking-tight">{project.title}</DialogTitle>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="bg-secondary/50 font-medium">
                  {tag}
                </Badge>
              ))}
            </div>
          </DialogHeader>

          <DialogDescription className="text-base text-muted-foreground leading-relaxed mb-8">
            {project.description}
          </DialogDescription>

          <div className="mt-auto flex flex-col gap-3">
            {project.demoUrl && (
              <Button asChild className="w-full justify-center group" size="lg">
                <a href={project.demoUrl} target="_blank" rel="noreferrer">
                  View Live Demo
                  <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </Button>
            )}
            {project.githubUrl && (
              <Button asChild variant="outline" className="w-full justify-center" size="lg">
                <a href={project.githubUrl} target="_blank" rel="noreferrer">
                  <Code className="mr-2 h-4 w-4" />
                  View Source Code
                </a>
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
