import FooterSection from './components/FooterSection'; // NEW IMPORT
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import TimelineSection from './components/TimelineSection';

function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navbar />
      <main>
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <TimelineSection />
        <FooterSection /> {/* NEW COMPONENT */}
      </main>
    </div>
  );
}

export default App;