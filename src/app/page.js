
import Contact from "@/components/contacts/Contact";
import Cursor from "@/components/cursor/Cursor";
import Hero from "@/components/hero/Hero";
import NavBar from "@/components/navbar/NavBar";
import Projects from "@/components/project/Project";
import Skills from "@/components/skills/Skills";



export default function Home() {
  return (
    <>
      <NavBar/>
      <Hero/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Cursor/>
 
    </>
  )
}
