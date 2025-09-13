import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import "../globals.css";
import {motion} from "framer-motion"
import { useRouter } from "next/navigation";

const About = ({isDarkMode}) => {
  const router =useRouter();
  return (
    <motion.div id="about" className="w-full px-[12%] py-10 scroll-mt-20"
       initial={{ opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1}}
    >
      <motion.h4 className="text-center mb-2 text-lg font_ovo"
      initial={{ opacity:0,y:-20}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.5,delay:0.3}}
      >Introduction</motion.h4>
      <motion.h2 className="text-center text-5xl font_ovo"
        initial={{ opacity:0,y:-20}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.5,delay:0.5}}
      >About me</motion.h2>
      <motion.div className=" flex w-full flex-col lg:flex-row items-center gap-20 my-20"
      initial={{ opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.8}}
      >
        <motion.div className="w-64 sm:w-80 rounded-3xl max-w-none"
          initial={{ opacity:0,scale:0.9}}
        whileInView={{opacity:1,scale:1}}
        transition={{duration:0.6}}
        >
          <Image
            src={assets.user_image}
            alt="user"
            className="w-full rounded-3xl"
          />
        </motion.div>
        <motion.div
          initial={{ opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.6,delay:0.8}}
        className="flex-1">
          <p className="mb-10 max-w-2xl font_ovo">
            I’m Rishi Konga, an Information Technology undergraduate at Gokaraju Rangaraju Institute with a strong focus on full-stack development. Skilled in JavaScript, React, Next.js, Node.js, and database systems, I enjoy transforming ideas into scalable web applications. One of my key projects, HealthConnect, addresses a critical healthcare challenge by enabling patients to find available doctors in real time during emergencies. Alongside projects, I have solved 400+ LeetCode problems, strengthening my expertise in data structures and algorithms. Passionate about problem-solving and innovation, I aim to build impactful solutions through technology.
          </p>
          <motion.ul
            initial={{ opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.8,delay:1}}  
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {
                infoList.map(({icon,iconDark,title,description,link},index)=>(
                    <motion.li
                        whileInView={{scale:1.05}}
                    className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer  hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_3px_black]  dark:hover:shadow-[8px_8px_8px_rgba(31,47,74,255)]" key={index}
                    onClick={()=>{router.push(link)}}
                    >
                        <Image src={isDarkMode? iconDark: icon} alt={title} className="w-7 mt-3" />
                        {/* {console.log("isDarkMode",isDarkMode)} */} 
                        <h3 className={` my-4 font-semibold text-gray-700 ${isDarkMode ? "text-white":""}`} >{title}</h3>
                        <p className={`text-sm text-gray-600  ${isDarkMode ? "text-white/80":""}`}>{description}</p>
                    </motion.li>
                ))
            }
          </motion.ul>
          {/* <h4 className="my-6 text-gray-700 font_ovo">Tools I Use</h4>

          <ul className=" flex items-center gap-3 sm:gap-5">
            {
              toolsData.map((tool,index)=>(
                <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500" key={index}>
                  <Image src={tool} alt="tool"className="w-5 sm:w-7"/>
                </li>
              ))
            } */}

          {/* </ul> */}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
