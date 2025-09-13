"use client"
import Image from "next/image";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { useEffect, useState } from "react";
import Contact from "./components/Contact";
import CustomCursor from "./components/CustomCursor";

export default function Home() {
  const [isDarkMode,setIsDarkMode]=useState(false);

  useEffect(()=>{
    if(localStorage.theme=== 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme:dark)').matches)){
      setIsDarkMode(true);
    }
    else{
      setIsDarkMode(false);
    }
  },[])
  useEffect(() => {
  if (isDarkMode) {    
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "";
  }
}, [isDarkMode]);

  return (
    <>
    <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
    <Header isDarkMode={isDarkMode} />
    <About isDarkMode={isDarkMode} />
    <Projects isDarkMode={isDarkMode} />
    <Skills isDarkMode={isDarkMode} />
    <Contact isDarkMode={isDarkMode} />
    <CustomCursor isDarkMode={isDarkMode} />
    </>
  );
}
