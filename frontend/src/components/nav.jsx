import { useState } from 'react'
import '../style/NavC.css'

const links = ['learning', 'education', 'skills', 'projects', 'blogs', 'about']

export default function NavC() {
  const [active, setActive] = useState('') // which tag was last clicked
  const [sound, setSound] = useState(false) // sound toggle (just a label for now)

  return (
    <nav className="nav">
      <ul className="nav-links">
        {links.map((name) => (
          <li key={name}>
            {/* href="#learning" jumps to the element with id="learning" */}
            <a
              className={'nav-item' + (active === name ? ' active' : '')}
              href={'#' + name}
              onClick={() => setActive(name)}
            >
              :{name}
            </a>
          </li>
        ))}
      </ul>

      <button className="nav-sound" onClick={() => setSound(!sound)}>
        SOUND: {sound ? 'ON' : 'OFF'}
      </button>
    </nav>
  )
}