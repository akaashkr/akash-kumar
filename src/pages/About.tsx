import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GraduationCap, Award } from "lucide-react";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip";
import { a } from "node_modules/framer-motion/dist/types.d-BJcRxCew";
import { Link } from "react-router-dom";
import { link } from "fs";

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const education = [
    {
      degree: "Bachelor of Science in Physics",
      institution: "Indian Institute of Technology Kharagpur",
      period: "2024 - 2028",
      // cgpa: "",
      logo: "about/kgp-logo.png",
      link: "https://iitkgp.ac.in",
    },
    {
      degree: "Class XII",
      institution: "Central Public School, Azamgarh",
      period: "2023",
      // percentage: "",
      logo: "about/cps-school-logo.png",
      link: "https://centralpublicschool.in/", 
    },
    {
      degree: "Class X",
      institution: "Central Public Academy, Azamgarh",
      period: "2021",
      // percentage: "",
      logo: "about/cpa-school-logo.png",
      // link: ""
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">
            About Me
          </h1>

          <TooltipProvider>
            <div className="bg-card border border-border rounded-lg p-8 mb-12 glow-border">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I am a
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="text-primary font-semibold cursor-pointer mx-1 inline-block">AI Engineer</span>
                  </TooltipTrigger>
                    <TooltipContent side="top" align="center">Building LLM systems, RAG pipelines, and AI agents.</TooltipContent>
                </Tooltip>
                , currently pursuing BSc in Physics at the
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="text-foreground font-semibold cursor-pointer mx-1 inline-block">Indian Institute of Technology Kharagpur.</span>
                  </TooltipTrigger>
                    <TooltipContent side="top" align="center">Consistently ranked among the top engineering institutes in India.</TooltipContent>
                </Tooltip>
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I build
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="text-primary font-semibold cursor-pointer mx-1 inline-block">
                      LLM-powered applications
                    </span>
                  </TooltipTrigger>
                  <TooltipContent side="top" align="center">
                    Applications powered by large language models for reasoning and automation.
                  </TooltipContent>
                </Tooltip>
                ,
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="text-primary font-semibold cursor-pointer mx-1 inline-block">
                      RAG systems
                    </span>
                  </TooltipTrigger>
                  <TooltipContent side="top" align="center">
                    Retrieval-Augmented Generation using vector databases and external knowledge.
                  </TooltipContent>
                </Tooltip>
                , and
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="text-primary font-semibold cursor-pointer mx-1 inline-block">
                      autonomous AI agents
                    </span>
                  </TooltipTrigger>
                  <TooltipContent side="top" align="center">
                    Agents capable of tool use, reasoning, and multi-step decision making.
                  </TooltipContent>
                </Tooltip>
                using frameworks such as
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="text-foreground font-semibold cursor-pointer mx-1 inline-block">
                     LangChain
                    </span>
                  </TooltipTrigger>
                  <TooltipContent side="top" align="center">
                    Framework for building LLM applications and agent workflows.
                  </TooltipContent>
                </Tooltip>
                and
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="text-foreground font-semibold cursor-pointer mx-1 inline-block">
                     LangGraph
                    </span>
                  </TooltipTrigger>
                  <TooltipContent side="top" align="center">
                    Framework for building stateful, multi-step LLM workflows and agent systems.
                  </TooltipContent>
                </Tooltip>
                , focusing on
                <span className="text-foreground font-semibold mx-1">
                  multi-agent systems
                </span>
                ,
                <span className="text-foreground font-semibold mx-1">
                  tool-integrated reasoning
                </span>
                , and
                <span className="text-foreground font-semibold mx-1">
                  intelligent automation workflows.
                </span>
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                My goal is to design
                <span className="text-primary font-semibold mx-1">
                  scalable AI systems
                </span>
                that combine
                <span className="text-foreground font-semibold mx-1">
                  language models
                </span>
                ,
                <span className="text-foreground font-semibold mx-1">
                  external tools
                </span>
                , and
                <span className="text-foreground font-semibold mx-1">
                  structured knowledge
                </span>
                to solve real-world problems efficiently.
              </p>
            </div>
            
          </TooltipProvider>

          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <GraduationCap className="text-primary" />
            Education
          </h2>

          <div ref={ref} className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-colors relative overflow-hidden"
              >
                {/* Logo/Crest Watermark */}
                {edu.logo && (
                  <Link to={edu.link} target="_blank" rel="noopener noreferrer">
                    <img
                      src={edu.logo}
                      alt={`${edu.institution} Logo`}
                      className="absolute bottom-4 right-6 w-12 h-12 md:w-10 md:h-10 md:bottom-3 md:right-6 object-contain opacity-80 pointer-events-none select-none drop-shadow transition-all duration-200"
                    />
                  </Link>
                )}
                <div className="flex items-start justify-between flex-wrap gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-muted-foreground mb-1">{edu.institution}</p>
                    <p className="text-sm text-muted-foreground">{edu.period}</p>
                  </div>
                  {/* <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-lg">
                    <Award className="h-5 w-5 text-primary" />
                    <span className="font-semibold text-primary">
                      {edu.cgpa || edu.percentage}
                    </span>
                  </div> */}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );

};

export default About;
