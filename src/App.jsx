import { Header } from "@/components/Header";
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
    <ThemeProvider defaultTheme="light" storageKey="portfolio-theme">
      <div className="flex flex-col lg:flex-row min-h-screen bg-background text-foreground relative pt-14 lg:pt-0">
        {/* Left Sidebar - Sticky on Desktop */}
        <div className="w-full lg:w-[400px] shrink-0 lg:sticky lg:top-0 lg:h-screen z-10 border-b lg:border-b-0 lg:border-r border-border/40">
          <IntroSection personalInfo={portfolioData.personalInfo} />
        </div>

        {/* Right Content Area */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* Sticky Header */}
          <Header />

          {/* Scrollable Content */}
          <main className="max-w-4xl w-full mx-auto px-6 py-12 lg:px-16 lg:py-20 xl:px-24">
            <section id="projects" className="mb-16 scroll-mt-16">
              <h2 className="text-3xl font-bold tracking-tight mb-8 text-foreground border-b border-border/50 pb-4">
                Previous projects
              </h2>
              <div className="flex flex-col gap-8">
                {portfolioData.projects.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    priority={index === 0}
                  />
                ))}
              </div>
            </section>

            <div id="skills" className="scroll-mt-16">
              <SkillsSection skills={portfolioData.skills} />
            </div>

            <div id="education" className="scroll-mt-16">
              <EducationSection education={portfolioData.education} />
            </div>

            <div id="employment" className="scroll-mt-16">
              <EmploymentSection employment={portfolioData.employment} />
            </div>

            <div id="languages" className="scroll-mt-16">
              <LanguagesSection languages={portfolioData.languages} />
            </div>
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
