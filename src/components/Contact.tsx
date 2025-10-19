import { Mail, Phone, MapPin } from "lucide-react";

export const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "theomkarmore@gmail.com",
      href: "mailto:theomkarmore@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 9370832495",
      href: "tel:+919370832495",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "VNIT Nagpur, Maharashtra",
      href: "#",
    },
  ];

  return (
    <section
      id="contact"
      className="py-6 md:py-10 lg:py-6 px-4 sm:px-6 lg:px-8"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg px-4">
            Have a project in mind or want to discuss opportunities? Let's
            connect and build something amazing together.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 hover-lift">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center">
              Contact <span className="gradient-text">Information</span>
            </h3>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-10">
              {contactInfo.map((info) => (
                <a
                  key={info.title}
                  href={info.href}
                  className="flex flex-col items-center text-center gap-3 md:gap-4 group p-5 md:p-6 rounded-xl md:rounded-2xl hover:bg-primary/5 transition-all hover-lift"
                >
                  <div className="w-14 h-14 md:w-16 md:h-16 gradient-bg rounded-xl md:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <info.icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                  </div>
                  <div>
                    <p className="text-xs md:text-sm text-muted-foreground mb-1 md:mb-2 font-semibold uppercase tracking-wider">
                      {info.title}
                    </p>
                    <p className="font-medium text-sm md:text-base break-words">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            <div className="border-t border-border pt-6 md:pt-8">
              <p className="text-muted-foreground text-center text-sm md:text-base lg:text-lg leading-relaxed px-4">
                I'm always interested in hearing about new projects, internship
                opportunities, and collaboration. Whether you have a question or
                just want to say hi, feel free to reach out!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
