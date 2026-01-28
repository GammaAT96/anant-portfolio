import Layout from "@/components/Layout";
import { Sparkle, SparkleGroup } from "@/components/Sparkle";
import { Heart, Target, Lightbulb, TrendingUp } from "lucide-react";
// 1. IMPORT YOUR DATA
import { personalDetails } from "@/portfolioData";

const journeySteps = [
  {
    icon: Lightbulb,
    title: "The Spark",
    description: "Started with a curiosity for how things work, leading me to write my first C++ program.",
  },
  {
    icon: Target,
    title: "Academic Focus",
    description: "Pursuing B.Tech in CSE at NIET, Greater Noida, while diving deep into Data Science and Algorithms.",
  },
  {
    icon: TrendingUp,
    title: "Full-Stack Growth",
    description: "Mastered the MERN stack (MongoDB, Express, React, Node) to build scalable web applications.",
  },
  {
    icon: Heart,
    title: "Current Goals",
    description: "Preparing for GATE 2026, exploring System Design, and contributing to Open Source.",
  },
];

const About = () => {
  return (
    <Layout>
      <section className="relative py-12 px-4">
        <SparkleGroup className="top-20 right-[10%]" />
        <Sparkle 
          size="md" 
          className="absolute bottom-20 left-[15%] animate-sparkle animation-delay-400 opacity-40" 
        />
        
        <div className="container mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-16">
            <h1 className="section-title mb-4">About Me</h1>
            <p className="hero-subtitle">
              {/* 2. USE YOUR TAGLINE */}
              {personalDetails.tagline}
            </p>
          </div>

          {/* Intro Card */}
          <div className="bg-gradient-cream rounded-3xl p-8 md:p-12 mb-12 animate-fade-in-up">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-foreground leading-relaxed mb-6">
                I'm <span className="font-display font-bold text-primary">{personalDetails.name}</span>, a {personalDetails.role} based in {personalDetails.location}.
              </p>
              <p className="text-lg text-foreground leading-relaxed mb-6">
                {personalDetails.bio}
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                My primary focus right now is <span className="font-semibold text-primary">Data Structures & Algorithms</span> and <span className="font-semibold text-primary">System Design</span>. 
                I believe in learning by building — transforming theoretical concepts into working code.
              </p>
            </div>
          </div>

          {/* Journey Timeline */}
          <div className="mb-16">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-primary mb-8">
              My Journey
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {journeySteps.map((step, index) => (
                <div
                  key={step.title}
                  className="bg-card rounded-2xl p-6 shadow-soft opacity-0 animate-fade-in-up"
                  style={{ animationDelay: `${(index + 2) * 150}ms`, animationFillMode: 'forwards' }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-lavender flex items-center justify-center flex-shrink-0">
                      <step.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold text-primary mb-2">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Values */}
          <div className="bg-gradient-sage rounded-3xl p-8 md:p-12">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-primary mb-6">
              What I Value
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Code Quality", desc: "Clean, maintainable, and efficient code." },
                { title: "Open Source", desc: "Collaborating and learning from the community." },
                { title: "Continuous Learning", desc: "Tech evolves, and so do I." },
              ].map((value, index) => (
                <div key={value.title} className="text-center md:text-left">
                  <h3 className="font-display text-lg font-bold text-primary mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;