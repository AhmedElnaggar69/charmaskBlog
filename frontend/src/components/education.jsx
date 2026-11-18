import '../style/EducationC.css'
import { education } from '../data/education'

export default function EducationC() {
  return (
    <section className="education">
      <h1 className="education-title">&gt;education</h1>

      <div className="education-hud">
        <h2 className="education-school">{education.school}</h2>
        <p>// {education.dates}</p>
        <p>// {education.faculty}</p>
        <p>{education.degree}</p>
      </div>
    </section>
  )
}