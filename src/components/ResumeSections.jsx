import { Badge } from "@/components/ui/badge"

function SectionHeading({ children }) {
  return (
    <h2 className="text-3xl font-bold tracking-tight mb-8 text-foreground border-b border-border/50 pb-4">
      {children}
    </h2>
  )
}

export function EmploymentSection({ employment }) {
  if (!employment || employment.length === 0) return null
  return (
    <section className="mb-16">
      <SectionHeading>Employment History</SectionHeading>
      <div className="space-y-12">
        {employment.map((job) => (
          <div key={job.id} className="relative pl-6 sm:pl-0">
            {/* Timeline dot for mobile, hidden on desktop if preferred, but let's keep it simple */}
            <div className="hidden sm:block absolute left-[-41px] top-1.5 h-3 w-3 rounded-full bg-primary ring-4 ring-background" />
            
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2 gap-2">
              <h3 className="text-xl font-semibold text-foreground">{job.role}</h3>
              <span className="text-sm font-medium text-muted-foreground bg-secondary/50 px-3 py-1 rounded-full whitespace-nowrap self-start sm:self-auto">
                {job.period}
              </span>
            </div>
            <p className="text-lg text-primary/80 mb-4 font-medium">{job.company}</p>
            <p className="text-muted-foreground leading-relaxed">
              {job.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export function EducationSection({ education }) {
  if (!education || education.length === 0) return null
  return (
    <section className="mb-16">
      <SectionHeading>Education</SectionHeading>
      <div className="space-y-10">
        {education.map((edu) => (
          <div key={edu.id}>
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2 gap-2">
              <h3 className="text-xl font-semibold text-foreground">{edu.degree}</h3>
              <span className="text-sm font-medium text-muted-foreground bg-secondary/50 px-3 py-1 rounded-full whitespace-nowrap self-start sm:self-auto">
                {edu.period}
              </span>
            </div>
            <p className="text-lg text-primary/80 mb-3 font-medium">{edu.institution}</p>
            <p className="text-muted-foreground leading-relaxed">
              {edu.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export function SkillsSection({ skills }) {
  if (!skills || skills.length === 0) return null
  return (
    <section className="mb-16">
      <SectionHeading>Skills</SectionHeading>
      <div className="space-y-6">
        {skills.map((skillCategory) => (
          <div key={skillCategory.category}>
            <h3 className="text-lg font-semibold text-foreground mb-3">{skillCategory.category}</h3>
            <div className="flex flex-wrap gap-2">
              {skillCategory.items.map((item) => (
                <Badge key={item} variant="secondary" className="px-3 py-1 text-sm font-medium bg-secondary/50 hover:bg-secondary">
                  {item}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export function LanguagesSection({ languages }) {
  if (!languages || languages.length === 0) return null
  return (
    <section className="mb-16">
      <SectionHeading>Languages</SectionHeading>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {languages.map((lang) => (
          <div key={lang.name} className="p-5 rounded-xl border border-border/50 bg-card/50">
            <h3 className="text-xl font-semibold text-foreground mb-3">
              {lang.name} <span className="text-primary/80">{lang.level}</span>
            </h3>
            <div className="space-y-1 text-sm text-muted-foreground">
              <p><strong className="font-medium text-foreground/80">Spoken:</strong> {lang.spoken}</p>
              <p><strong className="font-medium text-foreground/80">Written:</strong> {lang.written}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
