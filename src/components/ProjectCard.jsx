import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Play } from "lucide-react"

export function ProjectCard({ project, onClick }) {
  return (
    <Card 
      className="group shrink-0 w-[300px] sm:w-[400px] h-[500px] flex flex-col overflow-hidden cursor-pointer border-border/50 hover:border-border transition-all duration-300 hover:shadow-lg bg-card"
      onClick={() => onClick(project)}
    >
      <div className="relative h-[240px] w-full overflow-hidden bg-muted">
        <img 
          src={project.screenshots[0]} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="bg-background/90 text-foreground backdrop-blur-sm rounded-full p-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <Play className="w-6 h-6 ml-1" />
          </div>
        </div>
      </div>
      <CardContent className="flex flex-col flex-1 p-6">
        <h3 className="text-xl font-semibold tracking-tight mb-3 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm line-clamp-3 mb-6 flex-1">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="secondary" className="font-normal text-xs bg-secondary/50 hover:bg-secondary">
              {tag}
            </Badge>
          ))}
          {project.tags.length > 3 && (
            <Badge variant="secondary" className="font-normal text-xs bg-secondary/50 hover:bg-secondary">
              +{project.tags.length - 3}
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
