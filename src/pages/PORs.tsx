import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Users, Code, Globe, HeartHandshake, Music } from "lucide-react";

const pors = [
  {
  title: "Associate Coordinator",
  organization: "SPICMACAY IIT Kharagpur",
  icon: Music,
  description: [
    "Coordinated and managed classical music events under SPICMACAY at IIT Kharagpur",
    "Successfully organised concerts including Ustad Amjad Ali Khan's sarod recital with three houseful auditoriums",
    "Assisted in organising Pt. Vishwa Mohan Bhatt's recital and other cultural programs",
    "Handled event coordination, logistics, and audience management for large-scale performances",
  ],
},
{
  title: "Student Member",
  organization: "Child Rights and You (CRY)",
  icon: HeartHandshake,
  description: [
    "Conducted awareness workshops for school students on child rights, education, and child abuse",
    "Participated in fundraising and donation drives to support underprivileged children",
    "Taught school students on weekends using interactive teaching methods",
    "Contributed to social outreach initiatives focused on child welfare and education",
  ],
},
{
  title: "Unit Leader",
  organization: "National Service Scheme (NSS), IIT Kharagpur",
  icon: Users,
  description: [
    "Led and coordinated an NSS unit conducting weekly outreach activities in a local village school",
    "Managed team planning, task allocation, and on-ground execution of community initiatives",
    "Organised educational sessions, games, and TLM-based activities for school students",
    "Conducted community welfare and awareness drives to support local students",
  ],
},
];

const PORs = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Positions of Responsibility
          </h1>
          <p className="text-xl text-muted-foreground mb-12">
            Leadership roles and contributions
          </p>

          <div ref={ref} className="space-y-8">
            {pors.map((por, index) => {
              const Icon = por.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="bg-card border border-border rounded-lg p-8 hover:border-primary transition-all hover:shadow-lg group"
                >
                  <div className="flex items-start gap-6">
                    <div className="bg-primary/10 p-4 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {por.title}
                      </h3>
                      <p className="text-lg text-primary font-semibold mb-4">
                        {por.organization}
                      </p>
                      <ul className="space-y-2">
                        {por.description.map((point, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-muted-foreground"
                          >
                            <span className="text-primary mt-1">▹</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PORs;
