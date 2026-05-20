import { IntroSection } from "@/components/IntroSection";
import { ProjectCard } from "@/components/ProjectCard";
import {
  EducationSection,
  EmploymentSection,
  LanguagesSection,
  SkillsSection,
} from "@/components/ResumeSections";
import { ThemeProvider } from "@/components/theme-provider";
import { portfolioData } from "@/config/portfolioData";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
      <div className="flex flex-col lg:flex-row min-h-screen bg-background text-foreground relative">
        {/* Left Sidebar - Sticky on Desktop */}
        <div className="w-full lg:w-[400px] shrink-0 lg:sticky lg:top-0 lg:h-screen z-10 border-b lg:border-b-0 lg:border-r border-border/40">
          <IntroSection personalInfo={portfolioData.personalInfo} />
        </div>

        {/* Right Content Area - Vertical Scroll */}
        <main className="flex-1 w-full max-w-4xl mx-auto px-6 py-12 lg:px-16 lg:py-20 xl:px-24">
          <section className="mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-8 text-foreground border-b border-border/50 pb-4">
              Previous projects
            </h2>
            <div className="flex flex-col gap-8">
              {portfolioData.projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </section>

          <EmploymentSection employment={portfolioData.employment} />

          <EducationSection education={portfolioData.education} />

          <SkillsSection skills={portfolioData.skills} />

          <LanguagesSection languages={portfolioData.languages} />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
