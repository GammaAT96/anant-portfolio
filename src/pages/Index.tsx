import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Sparkle, SparkleGroup } from "@/components/Sparkle";
import { Code, Database, Globe, Server, Cloud } from "lucide-react";

const featureCards = [
  {
    label: "CORE",
    title: "Programming",
    description: "Building strong foundations in C++ and Python with OOP principles",
    gradient: "bg-gradient-lavender",
    icon: Code,
    link: "/skills",
  },
  {
    label: "DSA",
    title: "Algorithms",
    description: "Solving problems daily on LeetCode & Codeforces",
    gradient: "bg-gradient-mint",
    icon: Database,
    link: "/skills",
  },
  {
    label: "FULLSTACK",
    title: "Web Dev",
    description: "Building real-world applications with the MERN stack",
    gradient: "bg-gradient-cream",
    icon: Globe,
    link: "/projects",
  },
  {
    label: "SYSTEMS",
    title: "CS Fundamentals",
    description: "Understanding OS, Networks, DBMS & System Design",
    gradient: "bg-gradient-peach",
    icon: Server,
    link: "/skills",
  },
  {
    label: "LEARNING",
    title: "DevOps & Cloud",
    description: "Exploring Docker, CI/CD, and AWS fundamentals",
    gradient: "bg-gradient-sage",
    icon: Cloud,
    link: "/skills",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center px-4">
        {/* Decorative Sparkles */}
        <SparkleGroup className="top-20 right-[15%] md:right-[25%]" />
        <Sparkle 
          size="lg" 
          className="absolute top-32 left-[10%] animate-sparkle animation-delay-200 opacity-50" 
        />
        <Sparkle 
          size="md" 
          className="absolute bottom-40 left-[20%] animate-sparkle animation-delay-600 opacity-40" 
        />
        <Sparkle 
          size="sm" 
          className="absolute top-48 right-[10%] animate-sparkle animation-delay-400 opacity-30" 
        />

        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <h1 className="hero-title animate-fade-in-up">
              Hi. I'm Anant.
            </h1>
            <h2 className="hero-title animate-fade-in-up animation-delay-200">
              A Full-Stack Developer.
            </h2>
            <p className="hero-subtitle mx-auto mt-8 animate-fade-in-up animation-delay-400">
              BTech Computer Science student passionate about building real-world 
              applications, solving algorithmic problems, and continuously learning 
              the craft of software engineering.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Cards Section */}
      <section className="pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featureCards.map((card, index) => (
              <Link
                key={card.title}
                to={card.link}
                className={`card-portfolio ${card.gradient} opacity-0 animate-fade-in-up`}
                style={{ animationDelay: `${(index + 3) * 150}ms`, animationFillMode: 'forwards' }}
              >
                <div className="flex flex-col h-full">
                  <span className="card-label">{card.label}</span>
                  <div className="flex items-center gap-3 mb-3">
                    <card.icon className="w-6 h-6 text-primary/70" />
                    <h3 className="card-title">{card.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground text-lg mb-6">
            Currently open to internships and learning opportunities
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground 
                       rounded-full font-medium transition-all duration-300 
                       hover:shadow-elevated hover:scale-105"
          >
            Let's Connect
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
