import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";
import { ThemeToggle } from "./ThemeToggle";

export function IntroSection({ personalInfo }) {
  const { name, role, avatarUrl, bio, socialLinks, introVideoUrl } =
    personalInfo;

  return (
    <section className="flex flex-col h-full w-full p-8 pt-12 xl:p-12 xl:pt-16 glass-panel overflow-y-auto hidden-scrollbar">
      <div className="flex items-center justify-between mb-10">
        <Avatar className="h-48 w-48 border border-border">
          <AvatarImage src={avatarUrl} alt={name} fetchpriority="high" decoding="async" />
          <AvatarFallback>{name.charAt(0)}</AvatarFallback>
        </Avatar>
        <ThemeToggle />
      </div>

      <div className="flex-1 space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground mb-2">
            {name}
          </h1>
          <p className="text-lg font-medium text-muted-foreground">{role}</p>
        </div>

        <p className="text-muted-foreground leading-relaxed text-sm">{bio}</p>

        {introVideoUrl && (() => {
          // Helper to extract YouTube ID and format embed URL
          const getYouTubeEmbedUrl = (url) => {
            if (!url) return null;
            const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
            const match = url.match(regExp);
            return (match && match[2].length === 11) ? `https://www.youtube.com/embed/${match[2]}` : null;
          };
          
          const youtubeEmbed = getYouTubeEmbedUrl(introVideoUrl);

          return (
            <div className="mt-8 rounded-xl overflow-hidden border border-border shadow-sm aspect-video bg-muted relative">
              {youtubeEmbed ? (
                <iframe
                  src={youtubeEmbed}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full object-cover"
                />
              ) : (
                <video
                  src={introVideoUrl}
                  controls
                  className="absolute inset-0 w-full h-full object-cover"
                  preload="metadata"
                >
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          );
        })()}

        <div className="flex gap-4">
          <Button
            variant="outline"
            size="icon"
            asChild
            className="rounded-full"
          >
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
      <div className="mt-12 text-xs text-muted-foreground">
        © {new Date().getFullYear()} {name}.
      </div>
    </section>
  );
}
