'use client';

import { personalInfo } from '@/lib/data';
import { motion } from 'framer-motion';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';

import Contact from '@/components/Contact';

export default function Home() {
  return (
    <div className="space-y-24">
      {/* Intro Section */}
      {/* Intro Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-8"
      >
        <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-black leading-[1.1]">
          Building systems that <br />
          <span className="text-[#4285F4]">scale</span> <span className="text-[#EA4335]">&</span> <span className="text-[#FBBC05]">learn</span><span className="text-[#34A853]">.</span>
        </h1>

        <div className="prose prose-xl text-gray-800 leading-relaxed max-w-3xl">
          <p>
            I am <span className="font-semibold text-black">{personalInfo.name}</span>, a developer specializing in <span className="text-black font-semibold">ML, DL, and NLP</span>.
          </p>
          <p>
            I specialize in architecting transformer models and building high-throughput data pipelines for linguistic intelligence. Currently pursuing Computer Science Engineering at <strong>Delhi Technological University</strong>.
          </p>
        </div>
      </motion.section>

      {/* Tech Stack Pulse */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-12"
      >
        <div className="space-y-6">
          <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 border-b pb-4">Engineering Gradient</h3>
          <p className="text-lg text-gray-700">
            My work exists at the intersection of <strong className="text-[#4285F4]">Linguistic Intelligence</strong> and <strong className="text-[#34A853]">Scalable Systems</strong>. I don't just fine-tune models; I build the infrastructure that powers them at scale.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 border-b pb-4">Toolkit</h3>
          <div className="flex flex-wrap gap-3">
            {['Python', 'C++', 'SQL', 'Pandas', 'NumPy', 'PyTorch', 'TensorFlow', 'Flutter', 'Dart', 'Scikit-learn', 'Git'].map((tech, i) => {
              const colors = [
                'border-blue-200 bg-blue-50 text-blue-700 hover:bg-blue-600',
                'border-red-200 bg-red-50 text-red-700 hover:bg-red-600',
                'border-yellow-200 bg-yellow-50 text-yellow-700 hover:bg-yellow-500',
                'border-green-200 bg-green-50 text-green-700 hover:bg-green-600'
              ];
              const colorClass = colors[i % 4];

              return (
                <span
                  key={tech}
                  className={`px-4 py-2 border rounded-lg text-sm font-semibold transition-all cursor-default hover:text-white ${colorClass}`}
                >
                  {tech}
                </span>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Philosophy / About */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-gray-50 rounded-3xl p-10 lg:p-14"
      >
        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold mb-8">The "Why"</h2>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Code is my medium for exploring complexity. Whether it's optimizing a distributed system for <strong>millisecond latency</strong> or fine-tuning a transformer model for <strong>semantic understanding</strong>, I am driven by the challenge of making machines "think" and "act" efficiently.
            </p>
            <p>
              Beyond the terminal, I am an active competitive programmer, constantly sharpening my algorithmic intuition. I believe that robust engineering is an art form—one that requires precision, creativity, and a deep respect for the user's experience.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Speech AI Interest Section */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative overflow-hidden bg-gradient-to-br from-[#4285F4]/10 to-[#34A853]/10 rounded-[2.5rem] p-10 lg:p-14 border border-blue-100"
      >
        <div className="max-w-4xl relative z-10">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
             Speech AI Research
          </h2>
          <p className="text-lg text-gray-800 leading-relaxed">
            I am currently <span className="font-semibold text-blue-700">developing a framework for zero-shot spontaneous TTS voice cloning</span> that preserves natural disfluencies (filled pauses, word repetitions, prosodic variations)—a key gap in current expressive speech synthesis. 
          </p>
          <p className="text-lg text-gray-800 leading-relaxed mt-4">
            Implementing a speaker-encoder architecture combined with a non-autoregressive duration predictor and experimenting with self-supervised representations to capture spontaneous speech characteristics from minimal target speaker data.
          </p>
        </div>
      </motion.section>

      {/* Main Content Sections */}
      <div className="space-y-32 pt-12 border-t border-gray-100">
        <section id="experience" className="space-y-12">
          <h2 className="text-4xl font-bold tracking-tight">Work & Education</h2>
          <Experience />
        </section>

        <section id="projects" className="space-y-12">
          <h2 className="text-4xl font-bold tracking-tight">Projects</h2>
          <Projects />
        </section>

        <section id="contact" className="space-y-12">
          <h2 className="text-4xl font-bold tracking-tight">Get in Touch</h2>
          <Contact />
        </section>
      </div>
    </div >
  );
}
