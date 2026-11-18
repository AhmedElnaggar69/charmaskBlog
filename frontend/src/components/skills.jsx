import '../style/SkillsC.css'
import { skills } from '../data/skills'

export default function SkillsC() {
  return (
    <section className="skills">
      <h1 className="skills-title">&gt;skills</h1>

      <div className="skills-grid">
        {skills.map((group) => (
          <div className="skill-window" key={group.group}>
            <div className="skill-bar">
              <span>▼</span>
              <span>C:\ {group.group}</span>
              <span className="skill-count">&lt; {group.items.length} &gt;</span>
            </div>

            <ul className="skill-list">
              {group.items.map((item) => (
                <li className="skill-chip" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}