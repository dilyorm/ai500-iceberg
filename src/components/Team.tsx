import { motion } from 'framer-motion';

const Team = () => {
  const teamMembers = [
    {
      name: 'Zilolaxon Yo\'ldosheva',
      role: 'Project Manager & Quality Lead',
      owns: 'Leads product scope, timelines, demo clarity. Coordinates implementation. Oversees QA, testing & reliability. Makes sure assistant interactions & flows are intuitive. Ensures clean, finished prototype delivery.',
      skills: ['Project Management', 'QA & Testing', 'Product Coordination', 'User Experience'],
      cv: '/Zilolakhon Yoldosheva_CV (2).pdf',
      links: {
        github: '#',
        linkedin: '#',
      },
    },
    {
      name: 'Dilyorbek Muhammadjonov',
      role: 'AI Assistant & Intelligence Lead',
      owns: 'Designs the AI assistant + governed data access. Builds RAG pipelines, vector search, summarization. Implements conversational flows for business users. Ensures assistant answers correctly using allowed datasets.',
      skills: ['Python', 'RAG Pipelines', 'Vector Search', 'LLMs', 'LangChain'],
      aiTools: ['OpenAI API', 'LangChain', 'Vector DBs', 'RAG'],
      cv: '/Dilyorbek.pdf',
      links: {
        github: '#',
        linkedin: '#',
      },
    },
    {
      name: 'Azizbek Xasanov',
      role: 'ML/Automation Engine Lead',
      owns: 'Implements OCR → Extraction → Data structuring pipeline. Develops credit scoring model / feature pipeline. Integrates automation engine with AI assistant. Ensures system runs on FastAPI + Docker smoothly.',
      skills: ['Python', 'FastAPI', 'OCR', 'ML', 'XGBoost', 'Docker'],
      aiTools: ['Tesseract', 'Azure Form Recognizer', 'scikit-learn'],
      cv: '/Azizbek Xasanov.pdf',
      links: {
        github: '#',
        linkedin: '#',
      },
    },
  ];

  const teamStrengths = {
    coverage: 'We cover AI assistant design, ML automation engine, project management, and quality assurance—all critical components for this platform.',
    priorProjects: [
      'Built ML credit scoring models',
      'Developed AI-powered applications',
      'Delivered production-ready automation systems',
    ],
    motivation: `We care about automation, fintech, and AI because we've seen firsthand how manual processes slow down financial services and want to make banking more efficient and accessible through intelligent automation and AI assistance.`,
  };

  return (
    <section id="team" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Team
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              className="glass-card glass-card-hover p-6 flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
              <p className="text-primary-400 text-sm mb-4">{member.role}</p>
              
              <div className="mb-4 flex-grow">
                <p className="text-white/60 text-xs mb-2 font-medium">Owns:</p>
                <p className="text-white/80 text-sm mb-4">{member.owns}</p>
                
                <p className="text-white/60 text-xs mb-2 font-medium">Skills:</p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {member.skills.map((skill, i) => (
                    <span key={i} className="px-2 py-1 bg-white/5 rounded text-xs text-white/70">
                      {skill}
                    </span>
                  ))}
                </div>
                
                {member.aiTools && (
                  <>
                    <p className="text-white/60 text-xs mb-2 font-medium">AI Tools:</p>
                    <div className="flex flex-wrap gap-1">
                      {member.aiTools.map((tool, i) => (
                        <span key={i} className="px-2 py-1 bg-primary-500/20 rounded text-xs text-primary-300">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </>
                )}
              </div>

              <div className="flex flex-col gap-2 mt-auto pt-4 border-t border-white/10">
                {member.cv && (
                  <a
                    href={member.cv}
                    download
                    className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-lg transition-colors text-center"
                  >
                    📄 Download CV
                  </a>
                )}
                <div className="flex gap-3 justify-center">
                  {member.links.github && member.links.github !== '#' && (
                    <a
                      href={member.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/60 hover:text-white transition-colors text-sm"
                    >
                      GitHub →
                    </a>
                  )}
                  {member.links.linkedin && member.links.linkedin !== '#' && (
                    <a
                      href={member.links.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/60 hover:text-white transition-colors text-sm"
                    >
                      LinkedIn →
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Team Strengths */}
        <motion.div
          className="glass-card p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold mb-6">Team Strengths</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2 text-primary-400">Coverage</h4>
              <p className="text-white/80">{teamStrengths.coverage}</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-primary-400">Prior Projects</h4>
              <ul className="list-disc list-inside space-y-1 text-white/80">
                {teamStrengths.priorProjects.map((project, i) => (
                  <li key={i}>{project}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-primary-400">Motivation</h4>
              <p className="text-white/80">{teamStrengths.motivation}</p>
            </div>
          </div>
        </motion.div>

        <motion.p
          className="text-center text-white/60 text-sm mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          All team members are registered in the AI500 bot.
        </motion.p>
      </div>
    </section>
  );
};

export default Team;
