'use client'

import { Divider } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";
import { GitHub, LinkedIn, Email } from '@mui/icons-material';
import IconButton from "./components/button/iconbutton/IconButton";
import Project from "./types/project";
import Tech from "./types/tech";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Techs from "./components/sections/Techs";
import Experiences from "./components/sections/Experiences";
import Experience from "./types/experience";

export default function Home() {

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
    })
  }, [])

  return (
    <div className="page">
      <div className="intro">
        <div className="intro-card">
          <div className="intro-card-text">
          <h1>Jonas de Boer</h1>
          <h2 className="subtext inverted">Senior Backend Engineer</h2>
          </div>
          <div className="intro-card-profile-image">
            <Image height={1000} width={1000} style={{ width: 'auto', height: '100%' }} alt="profile" src="/static/images/profile.jpg" />
          </div>
        </div>
      </div>
      <div className="content">
        <About />
        <Divider style={{ marginTop: 24, marginBottom: 24 }}/>
        <Projects projects={data.projects} techs={data.techs} />
        <Divider style={{ marginTop: 24, marginBottom: 24 }}/>
        <Techs techs={data.techs} />
        <Divider style={{ marginTop: 24, marginBottom: 24 }}/>
        <Experiences experiences={data.experiences} techs={data.techs} />
      </div>

      <div className="link-footer">
        <p>Contact me!</p>
        <IconButton href="https://github.com/robedjason" icon={<GitHub fontSize="large" />} />
        <IconButton href="https://www.linkedin.com/in/jonas-de-boer-29a290166/" icon={<LinkedIn fontSize="large" />} />
        <IconButton href="mailto:jonasdeboer02@gmail.com" icon={<Email fontSize="large" />} />
      </div>
    </div>
  );
}
