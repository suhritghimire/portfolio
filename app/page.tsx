'use client';

import { personalInfo } from '@/lib/data';
import { motion } from 'framer-motion';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';

import Contact from '@/components/Contact';

export default function Home() {
  return (
    <div className="space-y-16 md:space-y-24">
      {/* Intro Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6 md:space-y-8"
      >
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-zinc-900 leading-[1.15] md:leading-[1.1]">
          Building systems that <br className="hidden md:inline" />
          <span className="text-[#4285F4]">scale</span> <span className="text-[#EA4335]">&</span> <span className="text-[#FBBC05]">learn</span><span className="text-[#34A853]">.</span>
        </h1>

        <div className="prose prose-lg md:prose-xl text-zinc-600 leading-relaxed max-w-3xl">
          <p>
            I am <span className="font-semibold text-zinc-900">{personalInfo.name}</span>, a developer specializing in <span className="text-zinc-900 font-semibold">ML, DL, NLP, and Speech AI</span>.
          </p>
          <p>
            I specialize in architecting transformer models and building high-throughput data pipelines for linguistic intelligence.
          </p>
        </div>
      </motion.section>

      {/* Tech Stack Pulse */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
      >
        <div className="space-y-4 md:space-y-6">
          <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-400 border-b border-zinc-200 pb-4">Engineering Gradient</h3>
          <p className="text-base md:text-lg text-zinc-600">
            My work exists at the intersection of <strong className="text-[#4285F4]">Linguistic Intelligence</strong> and <strong className="text-[#34A853]">Scalable Systems</strong>. I don't just fine-tune models; I build the infrastructure that powers them at scale.
          </p>
        </div>

        <div className="space-y-4 md:space-y-6">
          <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-400 border-b border-zinc-200 pb-4">Toolkit</h3>
          <div className="flex flex-wrap gap-2 md:gap-3">
            {['Python', 'C++', 'SQL', 'Pandas', 'NumPy', 'PyTorch', 'TensorFlow', 'Flutter', 'Dart', 'Next.js', 'TypeScript', 'Supabase', 'Cloudflare R2', 'Scikit-learn', 'Git'].map((tech, i) => {
              const colors = [
                'border-blue-100 bg-blue-50/50 text-blue-600 hover:bg-blue-600 hover:text-white',
                'border-red-100 bg-red-50/50 text-red-600 hover:bg-red-600 hover:text-white',
                'border-yellow-100 bg-yellow-50/30 text-yellow-600 hover:bg-yellow-500 hover:text-white',
                'border-green-100 bg-green-50/50 text-green-600 hover:bg-green-600 hover:text-white'
              ];
              const colorClass = colors[i % 4];

              return (
                <span
                  key={tech}
                  className={`px-3 py-1.5 md:px-4 md:py-2 border rounded-lg text-xs md:text-sm font-semibold transition-all cursor-default ${colorClass}`}
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
        className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-14 border border-zinc-200 shadow-md shadow-zinc-200/30"
      >
        <div className="max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-8 text-zinc-900">The "Why"</h2>
          <div className="space-y-4 md:space-y-6 text-base md:text-lg text-zinc-600 leading-relaxed">
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
        className="relative overflow-hidden bg-white rounded-2xl sm:rounded-[2.5rem] p-6 sm:p-10 lg:p-14 border border-zinc-200 shadow-md shadow-zinc-200/30"
      >
        <div className="max-w-4xl relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3 text-zinc-900">
             Speech AI Research
          </h2>
          <p className="text-base md:text-lg text-zinc-700 leading-relaxed">
            Building a <span className="font-semibold text-blue-600">zero-shot spontaneous TTS framework</span> to clone voices while preserving natural disfluencies (filled pauses, prosody). My work combines speaker-encoder architectures with self-supervised representations to capture expressive speech markers from minimal target data.
          </p>
        </div>
      </motion.section>

      {/* Suchak Cofounder Section */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative overflow-hidden bg-white rounded-2xl sm:rounded-[2.5rem] p-6 sm:p-10 lg:p-14 border border-zinc-200 shadow-md shadow-zinc-200/30"
      >
        <div className="max-w-4xl relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3 text-zinc-900">
             Co-Founder & Developer @ Suchak
          </h2>
          <p className="text-base md:text-lg text-zinc-700 leading-relaxed">
            Co-founded and developed <span className="font-semibold text-red-600">Suchak</span>, a civic-tech map linking complaints directly to Nepal's local elected leaders. Engineered polygon ray-casting APIs, R2 media CDNs, and Supabase database query caches.
          </p>
        </div>
      </motion.section>

      {/* Main Content Sections */}
      <div className="space-y-20 md:space-y-32 pt-12 border-t border-zinc-200">
        <section id="experience" className="space-y-8 md:space-y-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900">Work & Education</h2>
          <Experience />
        </section>

        <section id="projects" className="space-y-8 md:space-y-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900">Projects</h2>
          <Projects />
        </section>

        <section id="contact" className="space-y-8 md:space-y-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900">Get in Touch</h2>
          <Contact />
        </section>
      </div>
    </div >
  );
}
