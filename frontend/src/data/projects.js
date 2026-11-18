// src/data/projects.js
// theme decides which card style is used: terminal | arcade | coaster | window
export const projects = [
  {
    name: 'charmask tracker',
    theme: 'terminal',
    summary:
      'It scrapes jobs from LinkedIn, Indeed and Wuzzuf, processes them, and indexes them for features that make job hunting easier. I made a semi-comprehensive YouTube video explaining how to use it.',
    cta: 'Watch the video.',
    url: 'https://www.youtube.com/watch?v=Ya7OxLxQlOk',
  },
  {
    name: 'game jam',
    theme: 'arcade',
    summary: 'Made a small game for the Juniper Game Jam.',
    cta: 'Press start.',
    url: 'https://mazen-4.itch.io/sri-infinite-odds',
  },
  {
    name: 'rollercoaster sim',
    theme: 'coaster',
    summary: 'A rollercoaster simulation for my 3D graphics university course.',
    cta: 'View the code.',
    url: 'https://github.com/AhmedElnaggar69/graphicsProject',
  },
  {
    name: 'charmask compiler',
    theme: 'window',
    summary:
      "Charmask was originally made for projects I want to use exclusively. Sadly, I haven't finished this one. It was meant to be a small compiler with Lua-like syntax.",
    cta: 'View the repo.',
    url: 'https://github.com/AhmedElnaggar69/charmask-compiler',
  },
]