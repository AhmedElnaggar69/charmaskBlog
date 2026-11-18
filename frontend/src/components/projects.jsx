import '../style/ProjectsC.css'
import { projects } from '../data/projects'

// A Bezier curve with its control points, like the shape editor in the project
function CoasterArt() {
  const points = [[20, 200], [80, 20], [140, 20], [200, 130], [260, 240], [320, 240], [380, 60]]

  return (
    <svg className="coaster-art" viewBox="0 0 400 260" aria-hidden="true">
      <g className="coaster-handles">
        <line x1="20" y1="200" x2="80" y2="20" />
        <line x1="140" y1="20" x2="200" y2="130" />
        <line x1="200" y1="130" x2="260" y2="240" />
        <line x1="320" y1="240" x2="380" y2="60" />
        {points.map(([x, y]) => (
          <rect key={x + ',' + y} x={x - 4} y={y - 4} width="8" height="8" />
        ))}
      </g>
      <path className="coaster-path" d="M20 200 C80 20 140 20 200 130 S320 240 380 60" />
      <circle className="coaster-dot" r="7" />
    </svg>
  )
}

export default function ProjectsC() {
  return (
    <section className="projects">
      <h1 className="projects-title">&gt;projects</h1>

      <div className="projects-list">
        {projects.map((p) => (
          <article className={'project project-' + p.theme} key={p.name}>
            <h2 className="project-name">{p.name}</h2>

            <div className="project-body">
              <p className="project-summary">{p.summary}</p>
              {p.theme === 'coaster' && <CoasterArt />}
              <a className="project-link" href={p.url} target="_blank" rel="noreferrer">
                {p.cta}
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}