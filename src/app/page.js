import Navbar from '@/components/navbar/Navbar';
import Hero from '@/components/hero/Hero';
import About from '@/components/about/About';
import Projects from '@/components/projects/Projects';
import Skills from '@/components/skills/Skills';
import Timeline from '@/components/timeline/Timeline';
import Notes from '@/components/notes/Notes';
import Contact from '@/components/contact/Contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#09090B] text-white selection:bg-[#3B82F6] selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Timeline />
      <Notes />
      <Contact />
    </main>
  );
}
