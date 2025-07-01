"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiVercel,
  SiEjs,
  SiTypescript,
} from "react-icons/si";
import { ExternalLink, Code, Eye } from "lucide-react";
import { assets } from "@/assets/assets";

export default function Projects({ isDarkMode }) {
  const [activeTab, setActiveTab] = useState("fullstack");
  const [, setHoveredIndex] = useState(null);

  // Reference to the section for viewport detection
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { margin: "-100px 0px -100px 0px" });

  const projects = {
    fullstack: [
      {
        title: "HealthConnect",
        url: "https://healthconnect-w2m6.onrender.com",
        imageUrl: "https://i.pinimg.com/736x/2e/d9/ce/2ed9ceee2dc1e8fa81f5e5c267151b6d.jpg",
        github: "https://github.com/rishi-35/HealthConnect",
        techStack: ["React", "Tailwind CSS", "Express", "Node.js", "MongoDB"],
      },
      {
        title: "Netflix Clone",
        url: "https://netflix-clone-x83b.onrender.com/",
        imageUrl: `https://i.pinimg.com/736x/09/19/1b/09191b534c8c343d72416ea1239db900.jpg`,
        github: "https://github.com/rishi-35/Netflix-clone",
        techStack: ["React", "Tailwind CSS", "Express", "Node.js", "MongoDB"],
      },
      {
        title: "Portfolio",
        url: "http://Karank.tech",
        imageUrl: `https://image.thum.io/get/width/1200/crop/900/noanimate/https://karank.tech`,
        github: "https://github.com/kendrekaran/NextJs_Portfolio",
        techStack: ["Next.js", "React", "Tailwind CSS"],
      },
    ],
    mini: [
      {
        title: "Shrink Link",
        url: "https://shrink-link.onrender.com/",
        imageUrl: `https://i.pinimg.com/1200x/ac/84/4d/ac844ddca5671a065a55b7d8986c2176.jpg`,
        github: "https://github.com/rishi-35/url-shortner",
        techStack: ["Ejs", "Node.js"],
      },
    ],
  };

  const getTechIcon = (tech) => {
    switch (tech) {
      case "Next.js":
        return <SiNextdotjs className="text-white" />;
      case "React":
        return <SiReact className="text-cyan-400" />;
      case "Node.js":
        return <SiNodedotjs className="text-green-500" />;
      case "Express":
        return <SiExpress className="text-white" />;
      case "MongoDB":
        return <SiMongodb className="text-green-700" />;
      case "Tailwind CSS":
        return <SiTailwindcss className="text-blue-500" />;
      case "TypeScript":
        return <SiTypescript className="text-blue-600" />;
      default:
        return <SiVercel className="text-black" />;
    }
  };

  // Animation variants for staggering project cards
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section id="projects" className="py-20 w-full" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 1 } },
            }}
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font_ovo relative inline-block">
              My Projects
            </h2>
          </motion.div>
          <motion.p
            className="text-gray-400 max-w-lg mx-auto text-sm md:text-base"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.3 } },
            }}
          >
            A showcase of my web development journey, featuring full-stack applications, mini projects, and landing pages.
          </motion.p>
        </div>

        {/* Tabs */}
        <motion.div
          className="flex justify-center rounded-xl mb-10"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.5 } },
          }}
        >
          <div className="inline-flex p-1 rounded-xl">
            {["fullstack", "mini"].map((tab) => (
              <button
                key={tab}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeTab === tab
                    ? "bg-[#2d2d2d] text-white shadow-lg rounded-xl shadow-blue-500/20"
                    : "text-gray-400 hover:text-black dark:hover:text-white"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab === "fullstack" ? "Fullstack Projects" : "Mini Projects"}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects[activeTab].map((project, index) => (
            <motion.div
              key={index}
              className="group cursor-pointer transform transition-all duration-300 hover:-translate-y-1"
              variants={cardVariants}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="bg-[#2d2d2d] backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800/50 h-full transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                {/* Project Image */}
                <div className="relative_aspect-video overflow-hidden">
                  <img
                    src={project.imageUrl || "/placeholder.svg"}
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Action buttons */}
                  <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-blue-500/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-colors"
                      aria-label={`Visit ${project.title}`}
                    >
                      <Eye className="w-4 h-4" />
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-gray-800/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-blue-500 transition-colors"
                      aria-label={`View code for ${project.title}`}
                    >
                      <Code className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-blue-400 transition-colors"
                      aria-label={`External link to ${project.title}`}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>

                  <p className="text-white/80 text-xs mb-3 truncate">{project.url.replace("http://", "")}</p>

                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-1 bg-gray-800/50 px-2 py-0.5 rounded-md text-xs font-medium text-gray-300"
                      >
                        <span className="text-base">{getTechIcon(tech)}</span>
                        <span>{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Projects Button */}
        <motion.div
          className="mt-14 text-center"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.5 } },
          }}
        >
          <a
            href="https://github.com/rishi-35"
            target="_blank"
            rel="noopener noreferrer"
            className="max-w-xl mx-auto px-10 py-3 border border-white rounded-full bg-black text-white flex items-center justify-center gap-2"
          >
            <span>View All Projects</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}