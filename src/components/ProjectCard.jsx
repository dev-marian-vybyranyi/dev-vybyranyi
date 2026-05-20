import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Code } from "lucide-react"

export function ProjectCard({ project }) {
  return (
    <Card className="flex flex-col overflow-hidden border-border/50 hover:border-border transition-all duration-300 bg-card/50 py-0">
      <div className="w-full aspect-video bg-muted overflow-hidden relative shrink-0">
        <img 
          src={project.screenshots[0]} 
          alt={project.title} 
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
            <Badge key={tag} variant="secondary" className="font-normal text-xs bg-secondary/50">
              {tag}
            </Badge>
          ))}
        </div>

        <p className="text-muted-foreground text-base leading-relaxed mb-6 flex-1">
          {project.description}
        </p>
      </CardContent>
    </Card>
  )
}
