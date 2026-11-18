import '../style/LearningC.css'
import { learning } from '../data/learning'

export default function LearningC() {
  return (
    <section className="learning">
      <h1 className="learning-title">&gt;learning</h1>

      <div className="learning-grid">
        {learning.map((item, i) => (
          <article className="card" key={item.topic}>
            <span className="card-count">
              {i + 1}/{learning.length}
            </span>
            <h2 className="card-topic">{item.topic}</h2>
            <p className="card-note">{item.note}</p>
            <a className="card-link" href={item.url} target="_blank" rel="noreferrer">
              Open resource.
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}