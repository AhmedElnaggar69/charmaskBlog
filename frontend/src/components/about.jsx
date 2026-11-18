import '../style/AboutC.css'
import { about } from '../data/about'

export default function AboutC() {
  return (
    <section className="about">
      <h1 className="about-title">&gt;about</h1>

      {about.bio && <p className="about-bio">{about.bio}</p>}

      <div className="about-panel">
        <span className="about-tab">contact</span>

        <ul className="about-contact">
          {about.contact.map((c) => (
            <li key={c.label}>
              <a href={c.url}>
                <span className="about-label">// {c.label}</span>
                <span>{c.value}</span>
              </a>
            </li>
          ))}
        </ul>

        <ul className="about-links">
          {about.links.map((l) => (
            <li key={l.label}>
              <a className="about-tag" href={l.url} target="_blank" rel="noreferrer">
                :{l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}