const projects = [
  {
    title: "GitLike: Version Control System",
    category: "System Programming",
    description:
      "Command-line VCS implementing repository, staging, committing, and branching from scratch with SHA-1 object database and zlib compression.",
    image:
      "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=800&auto=format&fit=crop",
    tags: ["Python", "Argparse", "SHA-1", "Zlib"],
    github: "https://github.com/RoyalBeast2211/GitLike",
    demo: "#",
  },
  {
    title: "RayTracer: Ray Tracing Engine",
    category: "Computer Graphics",
    description:
      "C++ raytracer rendering spheres with recursive reflection, refraction, shadows, and Lambertian shading with Fresnel effect blending.",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop",
    tags: ["C++", "OOP", "Computer Graphics"],
    github: "https://github.com/RoyalBeast2211/Raytracer",
    demo: "#",
  },
  {
    title: "Chatty: Real-Time Chat Application",
    category: "Full-Stack",
    description:
      "Full-stack chat app with WebSockets enabling real-time messaging, JWT authentication, typing indicators, and MongoDB-based chat history.",
    image:
      "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800&auto=format&fit=crop",
    tags: ["MERN", "Socket.io", "JWT", "Cloudinary"],
    github: "https://github.com/RoyalBeast2211",
    demo: "https://chatapp-fdps.onrender.com/", // Replace with actual live URL
    isLiveDemo: true,
  },
  {
    title: "VNIT Telephone Directory",
    category: "Mobile App",
    description:
      "Flutter mobile app integrating 4000+ department and faculty contacts with advanced search and filter features, benefiting 5000+ students.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop",
    tags: ["Flutter", "Dart", "Mobile Dev"],
    github: "https://github.com/RoyalBeast2211/Vnit_telephone_directory",
    demo: "#",
  },
  {
    title: "Database Management System",
    category: "Data Structures",
    description:
      "DBMS using order-4 B+ trees to index and interlink 4 databases, enabling O(log N) query efficiency with complex cross-database queries.",
    image:
      "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&auto=format&fit=crop",
    tags: ["C++", "B+ Trees", "DBMS"],
    github: "https://github.com/RoyalBeast2211/DBMS_B-Trees",
    demo: "#",
  },
];

export const Projects = () => {
  return (
    <section
      id="projects"
      className="py-6 md:py-10 lg:py-6 px-4 sm:px-6 lg:px-8"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg px-4">
            Explore my projects showcasing expertise in full-stack development,
            system programming, and mobile applications.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="glass rounded-xl md:rounded-2xl overflow-hidden hover-lift group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <a
                href={project.isLiveDemo ? project.demo : project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block aspect-video overflow-hidden cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold text-sm md:text-base px-4 py-2 rounded-lg bg-primary/20 backdrop-blur-sm border border-white/20">
                    {project.isLiveDemo ? "View Live Demo" : "View on GitHub"}
                  </span>
                </div>
              </a>
              <div className="p-5 md:p-6">
                <p className="text-xs md:text-sm text-primary font-medium mb-2">
                  {project.category}
                </p>
                <h3 className="text-lg md:text-xl font-bold mb-2">
                  {project.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
