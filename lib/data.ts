export const personalInfo = {
  name: "Suhrit Ghimire",
  title: "Computer Science Engineering Student @ DTU",
  email: "suhrit1ghimire@gmail.com",
  phone: "+91 9625609307",
  website: "https://www.suhrit.com.np",
  linkedin: "https://www.linkedin.com/in/suhrit-ghimire-b92913195",
  github: "https://github.com/suhritghimire",
  resume: "https://drive.google.com/file/d/1-wH_3Em-qfmlc87WIErY186X6xv_Bzdm/view?usp=sharing",
  location: "New Delhi, India",
  image: "/profile.jpeg",
  about: "I am a Computer Science Engineering student at Delhi Technological University specializing in ML, DL, and NLP. My work focuses on architecting transformer-based systems, fine-tuning neural models, and building robust linguistic data pipelines. I am also an active competitive programmer and researcher in the space of low-resource languages.",
  interests: [
    "Speech AI & TTS",
    "Machine Learning (ML)",
    "Deep Learning (DL)",
    "Natural Language Processing (NLP)",
    "Neural Machine Translation",
    "Transformer Architectures",
    "Competitive Programming"
  ],
  speechAI: "Developing a framework for zero-shot spontaneous TTS voice cloning that preserves natural disfluencies (filled pauses, word repetitions, prosodic variations) – a key gap in current expressive speech synthesis. Implementing a speaker-encoder architecture combined with a non-autoregressive duration predictor; experimenting with self-supervised representations to capture spontaneous speech characteristics from minimal target speaker data. Building evaluation metrics beyond standard MOS, focusing on spontaneous naturalness (disfluency rate, prosody similarity). Initial experiments show promising retention of paralinguistic markers in cloned voices."
};

export const education = [
  {
    institution: "Delhi Technological University, New Delhi",
    degree: "B.Tech in Computer Science Engineering",
    year: "2023 - 2027",
    grade: "9.51 CGPA",
  },
  {
    institution: "DAV School Kathmandu",
    degree: "CBSE (Grade XII)",
    year: "2022",
    grade: "96.2%",
  },
];

export const experience = [
  {
    company: "WIZA",
    location: "Remote",
    role: "Software Engineer",
    period: "Dec 2025 - Feb 2026",
    description: [
      "Developed a robust browser plugin to automate complex visa form filling processes using JavaScript, significantly reducing manual data entry time.",
      " implemented intelligent form field detection and auto-population logic to handle various visa application portals.",
      "Optimized the plugin performance for seamless user experience across different browser environments."
    ],
    link: "#",
  },
  {
    company: "Insight Workshop",
    location: "Lalitpur, Nepal",
    role: "Software Engineering Intern",
    period: "May – July 2024",
    description: [
      "Built responsive UI components for the LevelUp platform using React.",
      "Applied optimization techniques such as dynamic programming to improve performance and resource efficiency.",
      "Designed UI prototypes in Figma and participated in code reviews and team knowledge-sharing sessions.",
    ],
    link: "https://drive.google.com/file/d/1PInXlWxzEL-QD-s5kg_1YyK6Ph4JnYR1/view?usp=sharing",
  },
];

export const projects = [
  {
    title: "Transformer Architecture Implementation from Scratch",
    tech: ["PyTorch", "NumPy", "Matplotlib"],
    points: [
      "Implemented the complete 'Attention Is All You Need' architecture using core PyTorch kernels.",
      "Coded Multi-Head Attention, Position-wise Feed-Forward networks, and Sinusoidal Positional Encodings manually.",
      "Built a modular encoder-decoder stack with residual connections and layer normalization to understand modern neural foundations.",
    ],
    link: "https://github.com/suhritghimire/Transformer-from-Scratch-Using-only-PyTorch",
  },
  {
    title: "Hate Speech Classification with BERT & Attention",
    tech: ["PyTorch", "Transformers", "BERT", "LSTM", "Scikit-learn"],
    points: [
      "Fine-tuned BERT variants (base, large, multilingual) reaching a 92% F1-score on complex social media datasets.",
      "Implemented custom Attention layers over Bi-directional LSTMs to visualize and interpret hate-indicative token importance.",
      "Conducted ablation studies on layer freezing and unfrozen weights to optimize transformer convergence in specific domains.",
    ],
    link: "https://github.com/suhritghimire/Hate-Speech-Detection-Using-Bi-directional-LSTM",
  },
  {
    title: "bRial – Content Platform with Data Quality Pipeline",
    tech: ["Flutter", "Firebase", "Python", "Word2Vec"],
    points: [
      "Architected a scalable cloud-based data backend using Firebase to manage user-generated content.",
      "Developed a data quality pipeline using Word2Vec and ML models to analyze and filter content, ensuring platform integrity.",
      "Optimized data flows and state management using BLoC pattern for data-intensive operations.",
    ],
    link: "https://brial-6fd01.web.app",
  },
];

export const skills = {
  "Data Engineering": ["SQL", "Python (Pandas, NumPy)", "ETL Concepts", "Data Modeling"],
  "Applied Science & ML": ["PyTorch", "TensorFlow", "Transformers", "BERT", "LSTM", "Deep Learning", "Linear Algebra"],
  "Programming Languages": ["Python", "C", "C++", "Dart", "JavaScript"],
  "Tools & Frameworks": ["Flutter", "Git", "GitHub", "VS Code", "Jupyter Notebook", "Scikit-learn", "Matplotlib"],
};

export const awards = [
  {
    title: "CodeChef 4-star (max rating: 1872)",
    description: "Strong algorithmic and SQL problem-solving skills",
    link: "https://www.codechef.com/users/suhrit_g",
  },
  {
    title: "Codeforces Specialist (max rating: 1430)",
    description: "900+ problems solved across various CP platforms",
    link: "https://codeforces.com/profile/suhrit.g",
  },
  {
    title: "IBM Certified: Machine Learning with Python",
    description: "ML0101EN Certification",
    link: "https://courses.cognitiveclass.ai/certificates/5123c9b9c180486aad997958f514af45",
  },
  {
    title: "ICCR Scholarship",
    description: "Full-ride scholarship by the Government of India for BTech Studies",
    link: null,
  },
];


