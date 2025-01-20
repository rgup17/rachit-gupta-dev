import { RoughNotation } from 'react-rough-notation'

const projectsData = [
  {
    title: 'SpeedChat',
    description: (
      <>
        A microservices-based real-time chat platform designed to support over 1000 concurrent
        users, featuring secure OTP-based authentication , Redis Pub/Sub for low-latency
        broadcasting, and Kafka-driven batch processing for reliable message storage.
      </>
    ),
    imgSrc: '',
    href: '',
    github: 'https://github.com/rgup17/speed-chat',
    tech1: 'Java Spring Boot',
    tech2: 'Redis',
    tech3: 'Kafka',
    tech4: 'PostgreSQL',
    tech5: 'React.js',
    tech6: 'Docker',
  },
  {
    title: 'Moodify',
    description:
      'A platform that uses deep learning/AI to analyze your journal entries to understand your emotions and recommends personalized Spotify playlists based on your mood. It also tracks emotional trends over time to provide insights into your mood patterns and music preferences.',
    imgSrc: '',
    href: '',
    github: 'https://github.com/rgup17/moodify',
    tech1: 'Python/Flask',
    tech2: 'TensorFlow',
    tech3: 'Java Spring Boot',
    tech4: 'PostgreSQL',
    tech5: 'React.js',
  },
  {
    title: 'MovieRecommender',
    description:
      'A machine learning project that recommends personalized movies by analyzing user behavior and movie metadata. It incorporates tailored rating thresholds and personalized weighting to deliver smarter, more accurate suggestions.',
    imgSrc: '',
    href: '',
    github: 'https://github.com/rgup17/MovieRecommender',
    tech1: 'Python',
    tech2: 'TensorFlow',
    tech3: 'Keras',
    tech4: 'Scikit-learn',
  },
  {
    title: 'PathVisual',
    description:
      'A tool that visually demonstrates how different pathfinding algorithms like Dijkstra’s and DFS work by solving mazes. It’s designed to help users understand these algorithms interactively with clear visualizations.',
    imgSrc: '',
    href: '',
    github: 'https://github.com/rgup17/visualizepathfinder',
    tech1: 'React.js',
  },
  {
    title: 'SpellCheck',
    description: `A command-line tool that detects spelling errors in text files using a trie-based dictionary for fast and efficient lookups. It handles capitalization, punctuation, hyphenated words, and reports precise error locations while supporting multiple files and directories. Designed for accuracy and tested with diverse edge cases.`,
    imgSrc: '',
    href: '',
    github: 'https://github.com/vianmiranda/systems-214/tree/main/spellcheck',
    tech1: 'C',
  },
  {
    title: 'MyShell',
    description:
      'A custom linux shell that supports interactive and batch modes, handling commands like cd, pwd, exit, pipelines (|), redirection (>, <), and wildcards (*). It efficiently processes user inputs, handles conditionals like then and else, and executes commands with precise precedence for pipelines and redirection.',
    imgSrc: '',
    href: '',
    github: 'https://github.com/vianmiranda/systems-214/tree/main/myshell',
    tech1: 'C',
  },
]

export default projectsData
