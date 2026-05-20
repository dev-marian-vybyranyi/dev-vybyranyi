import { Code, Briefcase, Send } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "./ThemeToggle"

export function IntroSection({ personalInfo }) {
  const { name, role, avatarUrl, bio, socialLinks, introVideoUrl } = personalInfo

  return (
    <section className="flex flex-col h-full w-full p-8 pt-12 xl:p-12 xl:pt-16 bg-background/50 backdrop-blur-sm overflow-y-auto hidden-scrollbar">
      <div className="flex items-center justify-between mb-10">
        <Avatar className="h-16 w-16 border border-border">
          <AvatarImage src={avatarUrl} alt={name} />
          <AvatarFallback>{name.charAt(0)}</AvatarFallback>
        </Avatar>
        <ThemeToggle />
      </div>

      <div className="flex-1 space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground mb-2">{name}</h1>
          <p className="text-lg font-medium text-muted-foreground">{role}</p>
        </div>

        <p className="text-muted-foreground leading-relaxed text-sm">
          {bio}
        </p>

        <div className="flex gap-4">
          <Button variant="outline" size="icon" asChild className="rounded-full">
            <a href={socialLinks.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <Code className="h-4 w-4" />
            </a>
          </Button>
          <Button variant="outline" size="icon" asChild className="rounded-full">
            <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Briefcase className="h-4 w-4" />
            </a>
          </Button>
          <Button variant="outline" size="icon" asChild className="rounded-full">
            <a href={socialLinks.telegram} target="_blank" rel="noreferrer" aria-label="Telegram">
              <Send className="h-4 w-4" />
            </a>
          </Button>
        </div>

        {introVideoUrl && (
          <div className="mt-8 rounded-xl overflow-hidden border border-border shadow-sm aspect-video bg-muted relative">
            <video 
              src={introVideoUrl} 
              controls 
              className="absolute inset-0 w-full h-full object-cover"
              preload="metadata"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        )}
      </div>
      <div className="mt-12 text-xs text-muted-foreground">
        © {new Date().getFullYear()} {name}.
      </div>
    </section>
  )
}
