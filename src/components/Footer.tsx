import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, Code2, Heart } from "lucide-react";

export const Footer = () => {
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
    <footer className="border-t border-border py-12 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-6">
          <Link to="/" className="text-2xl font-bold gradient-text">
            Omkar More
          </Link>

          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-full glass flex items-center justify-center hover-lift hover:bg-primary/20 transition-colors"
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
