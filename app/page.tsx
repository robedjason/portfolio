'use client'

import { useEffect, useState } from "react";
import Project from "./types/project";
import Tech from "./types/tech";
import About from "./components/sections/About";
import Experience from "./types/experience";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import Techs from "./components/sections/Techs";
import Experiences from "./components/sections/Experiences";
import Footer from "./components/sections/Footer";
import ThemeToggle from "./components/ThemeToggle";

export default function Home() {

  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<{
    techs: Tech[],
    projects: Project[],
    experiences: Experience[],
  }>({
    techs: [],
    projects: [],
    experiences: [],
  })

  useEffect(() => {
    Promise.all([
      fetch("/static/data/techs.json").then(res => res.json()),
      fetch("/static/data/projects.json").then(res => res.json()),
      fetch("/static/data/experiences.json").then(res => res.json())
    ]).then(([techs, projects, experiences]) => {
      setData({
        techs, projects, experiences
      })
      setLoading(false)
    })
  }, [])


  return (
    <div id="base" className="overflow-auto">
      <div className="fixed top-0 start-0 m-2 z-10" dir="rtl">
        <ThemeToggle />
      </div>
      <Hero />
      <About />
      <Techs techs={data.techs} />
      <Projects projects={data.projects} techs={data.techs} />
      <Experiences experiences={data.experiences} techs={data.techs} />
      <Footer />
    </div>
  );
}
