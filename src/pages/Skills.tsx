import Layout from "@/components/Layout";
import { Sparkle } from "@/components/Sparkle";
import { CheckCircle2, BookOpen } from "lucide-react";
// 1. IMPORT YOUR DATA
import { skillCategories } from "@/portfolioData";

const getLevelBadge = (level: string) => {
  const styles: Record<string, { icon: typeof CheckCircle2; label: string; className: string }> = {
    practicing: {
      icon: CheckCircle2,
      label: "Practicing",
      className: "text-primary/80 bg-primary/10",
    },
    learning: {
      icon: BookOpen,
      label: "Learning",
      className: "text-muted-foreground bg-muted",
    },
    building: {
      icon: CheckCircle2,
      label: "Building",
      className: "text-primary/80 bg-primary/10",
    },
    exploring: {
      icon: BookOpen,
      label: "Exploring",
      className: "text-muted-foreground bg-muted",
    },
  };

  const style = styles[level] || styles.learning;
  const Icon = style.icon;

  return (
    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium ${style.className}`}>
      <Icon className="w-3 h-3" />
      {style.label}
    </span>
  );
};

const Skills = () => {
  return (
    <Layout>
      <section className="relative py-12 px-4">
        <Sparkle 
          size="lg" 
          className="absolute top-10 right-[15%] animate-sparkle opacity-50" 
        />
        
        <div className="container mx-auto">
          <div className="max-w-3xl mb-12">
            <h1 className="section-title mb-4">Skills & Technologies</h1>
            <p className="hero-subtitle">
              A transparent view of my current skill set, from core CS fundamentals 
              required for GATE to the MERN stack I use for development.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* 2. USE THE IMPORTED SKILL CATEGORIES */}
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className={`rounded-2xl p-6 md:p-8 ${category.gradient} opacity-0 animate-fade-in-up`}
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
              >
                <h2 className="font-display text-xl md:text-2xl font-bold text-primary mb-6">
                  {category.title}
                </h2>
                <ul className="space-y-3">
                  {category.skills.map((skill) => (
                    <li 
                      key={skill.name}
                      className="flex items-center justify-between gap-4 py-2 border-b border-primary/10 last:border-0"
                    >
                      <span className="text-foreground font-medium">{skill.name}</span>
                      {getLevelBadge(skill.level)}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Skills;