import { Code, Palette, Lightbulb, Zap } from "lucide-react";

const skills = [
  {
    icon: Code,
    title: "Full-Stack Development",
    description:
      "Building scalable web applications with MERN stack and modern frameworks.",
  },
  {
    icon: Palette,
    title: "System Programming",
    description:
      "Developing low-level systems like version control and ray tracing engines.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description:
      "1700+ rating on LeetCode, 3-star on CodeChef, 800+ problems solved.",
  },
  {
    icon: Zap,
    title: "Fast Learner",
    description:
      "Self-taught in OOP, DBMS, OS, and Computer Networks with practical projects.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-6 md:py-10 lg:py-6 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg px-4">
            Pre final year student at VNIT Nagpur passionate about building
            innovative solutions and solving complex problems through code.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.title}
              className="glass rounded-xl md:rounded-2xl p-5 md:p-6 hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 md:w-14 md:h-14 gradient-bg rounded-lg md:rounded-xl flex items-center justify-center mb-3 md:mb-4">
                <skill.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">
                {skill.title}
              </h3>
              <p className="text-sm md:text-base text-muted-foreground">
                {skill.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 glass rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">
                My <span className="gradient-text">Journey</span>
              </h3>
              <p className="text-muted-foreground mb-4">
                Currently pursuing B.Tech at Visvesvaraya National Institute of
                Technology, Nagpur (CGPA: 8.29/10). I've held leadership
                positions as Vice President of Institute Development Society and
                General Secretary of V.G.Bhide Boys Hostel.
              </p>
              <p className="text-muted-foreground">
                I've developed diverse projects ranging from a Git-like version
                control system to real-time chat applications, constantly
                pushing myself to learn new technologies and tackle challenging
                problems. My work has impacted over 5000+ students at VNIT.
              </p>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">Skills</span>
                  <span className="text-muted-foreground">100%</span>
                </div>
                <div className="h-3 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full gradient-bg rounded-full"
                    style={{ width: "100%" }}
                  ></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">Brains</span>
                  <span className="text-muted-foreground">100%</span>
                </div>
                <div className="h-3 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full gradient-bg rounded-full"
                    style={{ width: "100%" }}
                  ></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">Looks</span>
                  <span className="text-muted-foreground">50%</span>
                </div>
                <div className="h-3 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full gradient-bg rounded-full"
                    style={{ width: "50%" }}
                  ></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">Luck</span>
                  <span className="text-muted-foreground">20%</span>
                </div>
                <div className="h-3 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full gradient-bg rounded-full"
                    style={{ width: "20%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
