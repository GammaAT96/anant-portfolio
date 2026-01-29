import Layout from "@/components/Layout";
import { Sparkle, SparkleGroup } from "@/components/Sparkle";
import { Mail, Github, Linkedin, Send, Twitter } from "lucide-react";
// 1. IMPORT YOUR DATA
import { personalDetails } from "@/portfolioData";

const Contact = () => {
  // 2. CREATE LINKS USING YOUR REAL DATA
  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: personalDetails.email, // This pulls "gammadeveloper5114@gmail.com"
      href: `mailto:${personalDetails.email}`,
    },
    {
      icon: Github,
      label: "GitHub",
      value: "GammaAT96",
      href: personalDetails.social.github,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Anant Tripathi",
      href: personalDetails.social.linkedin,
    },
    {
      icon: Twitter,
      label: "Twitter/X",
      value: "@anantdev5114",
      href: personalDetails.social.twitter,
    },
  ];

  return (
    <Layout>
      <section className="relative py-12 px-4 min-h-[70vh]">
        <SparkleGroup className="top-10 right-[15%]" />
        <Sparkle 
          size="md" 
          className="absolute bottom-32 left-[10%] animate-sparkle animation-delay-600 opacity-40" 
        />
        
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h1 className="section-title mb-4">Let's Connect</h1>
            <p className="hero-subtitle mx-auto">
              Open to internships, learning opportunities, and collaborations.
            </p>
          </div>

          <div className="space-y-4 mb-12">
            {contactLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 bg-card rounded-2xl shadow-soft 
                           transition-all duration-300 hover:shadow-elevated hover:scale-[1.02]
                           opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-lavender flex items-center justify-center">
                  <link.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground">{link.label}</p>
                  <p className="font-medium text-foreground">{link.value}</p>
                </div>
                <Send className="w-4 h-4 text-muted-foreground" />
              </a>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;