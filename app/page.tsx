'use client'

import { Divider, Grid, Stack } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";
import NavButton from "./components/button/navbutton/NavButton";
import { GitHub, LinkedIn, Email, BorderRight } from '@mui/icons-material';
import IconButton from "./components/button/iconbutton/IconButton";
import { useRouter, useSearchParams } from "next/navigation";
import ProjectCard from "./components/display/projectcard/ProjectCard";
import Project from "./types/project";
import Tech from "./types/tech";
import TechCard from "./components/display/techcard/TechCard";

const tabs = { ABOUT: "ABOUT", PROJECTS: "PROJECTS", TECHNOLOGIES: "TECHNOLOGIES" } as const;

type Tab = keyof typeof tabs;

export default function Home() {

  const [data, setData] = useState<{
    techs: Tech[],
    projects: Project[]
  }>({
    techs: [],
    projects: [],
  })

  const searchParams = useSearchParams()
  const spTab = searchParams.get('t');

  const [selectedTab, setSelectedTab] = useState<Tab>(spTab && Object.keys(tabs).includes(spTab) ? (spTab as Tab) || null : tabs.ABOUT)
  const router = useRouter();

  useEffect(() => {
    router.push(`?t=${selectedTab}`)
  }, [selectedTab])

  useEffect(() => {
    Promise.all([
      fetch("/static/data/techs.json").then(res => res.json()),
      fetch("/static/data/projects.json").then(res => res.json())
    ]).then(([techs, projects]) => {
      setData({
        techs, projects
      })
    })
  }, [])

  return (
    <div className="page">
      <div className="header">
        <div className="nav-header">
          <NavButton
            onClick={() => setSelectedTab(tabs.ABOUT)}
            selected={selectedTab === tabs.ABOUT}>
            About
          </NavButton>
          <NavButton
            onClick={() => setSelectedTab(tabs.PROJECTS)}
            selected={selectedTab === tabs.PROJECTS}>
            Projects
          </NavButton>
          <NavButton
            onClick={() => setSelectedTab(tabs.TECHNOLOGIES)}
            selected={selectedTab === tabs.TECHNOLOGIES}>
            Tech
          </NavButton>
        </div>
        <div
          className="header-card"
          style={{
            display: "flex",
            justifyContent: 'space-around',
            alignItems: 'center',
            margin: "10px"
          }}>
          <h1>Jonas de Boer</h1>
          <div className="header-card-profile-image">
            <Image width='200' height="200" alt="profile" src="/static/images/profile.jpg" />
          </div>
        </div>
      </div>


      <Divider />
      <div className="content">
        {selectedTab === tabs.ABOUT && (<div>
          <h2>About</h2>
          <p id="about">
            Full‐stack engineer leading projects end‐to‐end across Kotlin/Spring backends and React frontends. Comfortable
            owning technical direction, collaborating with customers, and translating business needs into reliable, maintainable
            software. Experienced with microservices, REST APIs, relational databases, and modern DevOps practices. Looking to
            build scalable products.
          </p>
        </div>)}
        {selectedTab === tabs.PROJECTS && (<div>
          <h2>Projects</h2>
          <Stack gap={4}>
            {data.projects.map(it => (
              <ProjectCard key={it.id} project={it} techs={data.techs} />
            ))}
          </Stack>
        </div>)}

        {selectedTab === tabs.TECHNOLOGIES && (<div>
          <h2>Technologies</h2>
          <Grid container spacing={2}>
            {data.techs.map(it => (
              <Grid size={{ xs: 12, sm: 6 }} key={it.key}>
                <TechCard key={it.key} tech={it} />
              </Grid>
            ))}
          </Grid>
        </div>)}
      </div>

      <div className="link-footer">
        <IconButton href="https://github.com/robedjason" icon={<GitHub fontSize="large" />} />
        <IconButton href="https://www.linkedin.com/in/jonas-de-boer-29a290166/" icon={<LinkedIn fontSize="large" />} />
        <IconButton href="mailto:jonasdeboer02@gmail.com" icon={<Email fontSize="large" />} />
      </div>
    </div>
  );
}
