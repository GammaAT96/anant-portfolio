import Layout from "@/components/Layout";
import { Sparkle } from "@/components/Sparkle";
import { ExternalLink, Github } from "lucide-react";
// 1. IMPORT YOUR DATA
import { projects } from "@/portfolioData";
// ...existing code...

const Projects = () => {
  return (
    <Layout>
      <section className="relative py-12 px-4">
        <Sparkle 
          size="lg" 
          className="absolute top-10 left-[10%] animate-sparkle opacity-50" 
        />
        
        <div className="container mx-auto">
          <div className="max-w-3xl mb-12">
            <h1 className="section-title mb-4">Projects</h1>
            <p className="hero-subtitle">
              Real projects I've built while learning. Each one represents 
              a step forward in my full-stack journey.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* 2. USE THE IMPORTED PROJECTS ARRAY */}
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`rounded-2xl p-6 md:p-8 ${project.gradient} opacity-0 animate-fade-in-up`}
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
              >
                <h2 className="font-display text-xl md:text-2xl font-bold text-primary mb-3">
                  {project.title}
                </h2>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="bg-card/50 rounded-xl p-4 mb-4">
                  <p className="text-sm text-foreground">
                    <span className="font-semibold text-primary">What I learned:</span>{" "}
                    {project.learnings}
                  </p>
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary font-medium 
                             hover:underline transition-all"
                >
                  <Github className="w-4 h-4" />
                  View on GitHub
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;