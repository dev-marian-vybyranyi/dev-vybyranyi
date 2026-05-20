import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ExternalLink, Code } from "lucide-react"

export function ProjectCard({ project, priority = false }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const isLongDescription = project.description && project.description.length > 150

  return (
    <Card className="flex flex-col overflow-hidden border-border/50 hover:border-border/80 glass-card py-0">
      <div className="w-full aspect-video bg-muted/50 overflow-hidden relative shrink-0">
        <img 
          src={project.screenshots[0]} 
          alt={project.title}
          fetchPriority={priority ? "high" : undefined}
          loading={priority ? undefined : "lazy"}
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
        />
      </div>
      <CardContent className="flex flex-col flex-1 p-6 sm:p-8">
        <h3 className="text-2xl font-bold tracking-tight mb-1">
          {project.title}
        </h3>
        {project.role && (
          <p className="text-sm font-medium text-primary mb-3">
            Role: {project.role}
          </p>
        )}
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="font-normal text-xs rounded-full bg-secondary/50">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="mb-6 flex-1">
          <p className={`text-muted-foreground text-base leading-loose max-w-prose whitespace-pre-line ${isExpanded ? '' : 'line-clamp-3'}`}>
            {project.description}
          </p>
          {isLongDescription && (
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-primary font-medium text-sm mt-2 hover:underline focus:outline-none"
            >
              {isExpanded ? "Show less" : "Show more"}
            </button>
          )}
        </div>

        <div className="flex flex-wrap gap-3 mt-auto">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className={cn(buttonVariants({ size: "sm" }), "group")}
            >
              View Live
              <ExternalLink className="ml-2 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
            >
              <Code className="mr-2 h-3.5 w-3.5" />
              Source
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
