import {
  Smartphone,
  Monitor,
  Figma,
  Layers,
  Users,
  Sparkles,
} from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Full-Stack Development",
    description:
      "Building end-to-end web applications using MERN stack, Next.js, and modern frameworks.",
    features: ["React & Node.js", "REST APIs", "Database Design"],
  },
  {
    icon: Layers,
    title: "System Programming",
    description:
      "Developing low-level systems like version control, ray tracing engines, and data structures.",
    features: ["C++ & Python", "Algorithms", "Performance"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Creating cross-platform mobile applications with Flutter and native-like performance.",
    features: ["Flutter & Dart", "Cross-Platform", "Offline Support"],
  },
  {
    icon: Figma,
    title: "Database Management",
    description:
      "Designing and implementing efficient database systems with advanced indexing and queries.",
    features: ["SQL & NoSQL", "B+ Trees", "Query Optimization"],
  },
  {
    icon: Users,
    title: "Real-Time Applications",
    description:
      "Building real-time applications with WebSockets for instant communication and updates.",
    features: ["Socket.io", "WebRTC", "Event-Driven"],
  },
  {
    icon: Sparkles,
    title: "Problem Solving",
    description:
      "Expert in competitive programming and algorithmic problem-solving with 1700+ LeetCode rating.",
    features: ["DSA", "Optimization", "Code Quality"],
  },
];

export const Services = () => {
  return (
    <section
      id="services"
      className="py-12 md:py-16 lg:py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg px-4">
            Comprehensive technical expertise across full-stack development,
            system programming, and competitive programming.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="glass rounded-xl md:rounded-2xl p-6 md:p-8 hover-lift group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 md:w-16 md:h-16 gradient-bg rounded-xl md:rounded-2xl flex items-center justify-center mb-5 md:mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">
                {service.title}
              </h3>
              <p className="text-sm md:text-base text-muted-foreground mb-5 md:mb-6">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-xs md:text-sm"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
