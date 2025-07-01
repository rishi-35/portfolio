"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconMail,
} from "@tabler/icons-react";

export default function Contact() {
  // Reference to the section for viewport detection
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { margin: "-100px 0px -100px 0px" });

  // Variants for staggering button animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Stagger each button by 0.2 seconds
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div
      id="contact"
      className="w-full md:mb-20 mx-auto h-full flex flex-col md:flex-row items-center justify-center p-6 md:p-8 rounded-none md:rounded-2xl"
      ref={sectionRef}
    >
      {/* Contact Info Section */}
      <section className="flex flex-col items-center md:w-1/2 text-center space-y-6 md:space-y-8">
        <motion.div
          className="text-3xl md:text-5xl lg:text-6xl relative inline-block"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 1 } },
          }}
        >
          Contact Me
        </motion.div>
        <motion.p
          className="text-sm md:text-base max-w-md text-neutral-400 px-8"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.3 } },
          }}
        >
          Have a project in mind? I'd love to hear from you! Reach out to me, and let's turn your ideas into reality.
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col space-y-4 w-full max-w-xs"
        >
          {/* Email Button */}
          <motion.div variants={buttonVariants}>
            <button
              className="relative group/btn flex space-x-2 items-center justify-start px-4 py-2 rounded-md font-medium bg-zinc-900 text-neutral-300 shadow-lg hover:shadow-xl transition-all w-full"
              type="button"
            >
              <Link href="mailto:rishikonga3@gmail.com" className="flex space-x-2">
                <IconMail className="h-5 w-5" />
                <span>Email Me</span>
              </Link>
              <BottomGradient />
            </button>
          </motion.div>

          {/* GitHub Button */}
          <motion.div variants={buttonVariants}>
            <button
              className="relative group/btn flex space-x-2 items-center justify-start px-4 py-2 rounded-md font-medium bg-zinc-900 text-neutral-300 shadow-lg hover:shadow-xl transition-all w-full"
              type="button"
            >
              <Link href="https://github.com/rishi-35" target="_blank" rel="noopener noreferrer" className="flex space-x-2">
                <IconBrandGithub className="h-5 w-5" />
                <span>GitHub</span>
              </Link>
              <BottomGradient />
            </button>
          </motion.div>

          {/* LinkedIn Button */}
          <motion.div variants={buttonVariants}>
            <button
              className="relative group/btn flex space-x-2 items-center justify-start px-4 py-2 rounded-md font-medium bg-zinc-900 text-neutral-300 shadow-lg hover:shadow-xl transition-all w-full"
              type="button"
            >
              <Link href="https://linkedin.com/in/rishi-konga" target="_blank" rel="noopener noreferrer" className="flex space-x-2">
                <IconBrandLinkedin className="h-5 w-5" />
                <span>LinkedIn</span>
              </Link>
              <BottomGradient />
            </button>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};