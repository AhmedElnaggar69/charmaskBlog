import '../style/MainC.css'
import '@google/model-viewer' // registers the <model-viewer> tag
import modelUrl from '../glb_models/model.glb?url' // gives us the file's URL

export default function MainC() {
  return (
    <main className="main">
      {/* left side */}
      <section>
        <h1 className="main-name">&gt;ahmed elnaggar</h1>
        <h2 className="main-role">
          Software Engineer — backend systems &amp; AI agents
        </h2>
      </section>

      {/* right side */}
      <section className="window">
        <div className="window-bar">
          <span>▼</span>
          <span>C:\ NOW</span>
          <span className="window-tag">&lt; RN &gt;</span>
        </div>
        <div className="window-body">
          <model-viewer 
            src={modelUrl} 
            auto-rotate 
            camera-controls 
            autoplay 
            animation-loop 
            alt="3D model" 
        />
          <h2 className="window-caption">this is what im doing rn🤪</h2>
        </div>
      </section>
    </main>
  )
}