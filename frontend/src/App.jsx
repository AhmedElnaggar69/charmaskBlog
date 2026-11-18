import NavC from './components/nav.jsx'
import MainC from './components/main.jsx'
import LearningC from './components/learning.jsx'
import EducationC from './components/education.jsx'
import SkillsC from './components/skills.jsx'
import ProjectsC from './components/projects.jsx'
import AboutC from './components/about.jsx'

// Each id matches a nav link: href="#learning" scrolls to id="learning".
// Same order as the nav bar.
export default function App() {
  return (
    <>
      <NavC />
      <MainC />

      <div id="learning" className="anchor">
        <LearningC />
      </div>
      <div id="education" className="anchor">
        <EducationC />
      </div>
      <div id="skills" className="anchor">
        <SkillsC />
      </div>
      <div id="projects" className="anchor">
        <ProjectsC />
      </div>
      <div id="blogs" className="anchor">
        {/* replace this placeholder with <BlogsC /> once it exists */}
        <h1>&gt;blogs (coming soon)</h1>
      </div>
      <div id="about" className="anchor">
        <AboutC />
      </div>
    </>
  )
}