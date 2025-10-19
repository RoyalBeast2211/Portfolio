import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Github, Linkedin, Mail, Code2, Download } from "lucide-react";
import heroAvatar from "@/assets/hero-avatar.png";

export const Hero = () => {
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/RoyalBeast2211",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/theomkarmore/",
      label: "LinkedIn",
    },
    { icon: Mail, href: "mailto:theomkarmore@gmail.com", label: "Email" },
    {
      icon: Code2,
      href: "https://codolio.com/profile/theomkarmore",
      label: "Codolio",
    },
  ];

  return (
    <section
      id="home"
      className="min-h-screen lg:min-h-[calc(100vh-4rem)] flex items-center justify-center py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12"
    >
      <div className="container mx-auto max-w-7xl w-full">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-14 xl:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-7 md:space-y-8 animate-fade-in order-2 lg:order-1">
            <div className="space-y-3 sm:space-y-4 md:space-y-5">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                Hi, I'm <span className="gradient-text">Omkar More</span>
              </h1>
              <div className="flex flex-wrap items-baseline gap-2 sm:gap-2.5 md:gap-3">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold gradient-text">
                  Full-Stack
                </h2>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                  Developer
                </h2>
              </div>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-xl pt-2 sm:pt-3 md:pt-4 leading-relaxed">
                Pre final year student at VNIT Nagpur with expertise in MERN
                stack, Flutter, and system programming. I build scalable
                applications and solve complex problems with clean, efficient
                code.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-5">
              <Link to="/projects">
                <Button
                  variant="gradient"
                  size="lg"
                  className="hover-lift text-xs sm:text-sm md:text-base w-full sm:w-auto"
                >
                  My Projects
                </Button>
              </Link>
              <Button
                variant="glass"
                size="lg"
                className="hover-lift text-xs sm:text-sm md:text-base w-full sm:w-auto"
                asChild
              >
                <a
                  href="https://drive.google.com/file/d/1AHet0TM2eji8MXoQA96_vdEe7KIZkdZk/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="w-3 h-3 sm:w-4 sm:h-4" />
                  View CV
                </a>
              </Button>
            </div>

            <div className="flex gap-3 sm:gap-4 md:gap-5 pt-2 sm:pt-2.5 md:pt-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 lg:w-13 lg:h-13 rounded-full glass flex items-center justify-center hover-lift hover:bg-primary/20 transition-colors"
                >
                  <social.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 lg:w-6 lg:h-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Content - Avatar */}
          <div className="relative flex items-center justify-center order-1 lg:order-2 mb-8 sm:mb-10 md:mb-12 lg:mb-0">
            <div className="relative w-full max-w-[240px] xs:max-w-[260px] sm:max-w-[300px] md:max-w-sm lg:max-w-md aspect-square">
              {/* Glow effects */}
              <div className="absolute inset-0 gradient-bg rounded-full blur-2xl sm:blur-3xl opacity-30 animate-glow"></div>

              {/* Glass frame */}
              <div className="relative glass rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 hover-lift">
                <img
                  src={heroAvatar}
                  alt="Developer Avatar"
                  className="w-full h-full object-contain animate-float"
                />
              </div>

              {/* Floating decorative elements */}
              <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 md:-top-4 md:-right-4 w-8 h-8 sm:w-12 sm:h-12 md:w-20 md:h-20 gradient-bg rounded-full blur-lg sm:blur-xl opacity-50 animate-float"></div>
              <div
                className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 md:-bottom-8 md:-left-8 w-16 h-16 sm:w-20 sm:h-20 md:w-32 md:h-32 bg-secondary/30 rounded-full blur-xl sm:blur-2xl animate-float"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
