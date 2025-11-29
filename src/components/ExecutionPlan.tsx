import { motion } from 'framer-motion';

const ExecutionPlan = () => {
  const techStack = {
    backend: ['Python', 'FastAPI', 'PostgreSQL', 'Redis'],
    documentAI: ['OCR', 'document classifiers', 'field extraction models'],
    ml: ['XGBoost/scikit-learn', 'feature pipeline', 'REST scoring API'],
    aiAssistant: [
      'LLM (e.g., GPT-class model)',
      'Retrieval from a governed internal data store',
      'Role-based permissions and data filters',
    ],
    frontend: ['React/Next.js', 'responsive UI', 'embedded chat widget'],
    infra: ['Dockerized services', 'cloud deployment', 'observability'],
  };

  return (
    <section id="tech" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          How We Plan to Build It (Tech & AI)
        </motion.h2>

        {/* Tech Stack */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="glass-card p-6">
              <h4 className="font-semibold mb-3 text-primary-400">Backend & Data</h4>
              <ul className="space-y-1 text-sm text-white/70">
                {techStack.backend.map((tech, i) => (
                  <li key={i}>• {tech}</li>
                ))}
              </ul>
            </div>
            <div className="glass-card p-6">
              <h4 className="font-semibold mb-3 text-primary-400">Document AI</h4>
              <ul className="space-y-1 text-sm text-white/70">
                {techStack.documentAI.map((tech, i) => (
                  <li key={i}>• {tech}</li>
                ))}
              </ul>
            </div>
            <div className="glass-card p-6">
              <h4 className="font-semibold mb-3 text-primary-400">ML Credit Scoring</h4>
              <ul className="space-y-1 text-sm text-white/70">
                {techStack.ml.map((tech, i) => (
                  <li key={i}>• {tech}</li>
                ))}
              </ul>
            </div>
            <div className="glass-card p-6">
              <h4 className="font-semibold mb-3 text-primary-400">AI Assistant Layer</h4>
              <ul className="space-y-1 text-sm text-white/70">
                {techStack.aiAssistant.map((tech, i) => (
                  <li key={i}>• {tech}</li>
                ))}
              </ul>
            </div>
            <div className="glass-card p-6">
              <h4 className="font-semibold mb-3 text-primary-400">Frontend</h4>
              <ul className="space-y-1 text-sm text-white/70">
                {techStack.frontend.map((tech, i) => (
                  <li key={i}>• {tech}</li>
                ))}
              </ul>
            </div>
            <div className="glass-card p-6">
              <h4 className="font-semibold mb-3 text-primary-400">Infrastructure</h4>
              <ul className="space-y-1 text-sm text-white/70">
                {techStack.infra.map((tech, i) => (
                  <li key={i}>• {tech}</li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Security Note */}
        <motion.div
          className="glass-card p-6 bg-primary-500/10 border-primary-500/30"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-white/80 text-center">
            The assistant never sees raw production DB directly; it queries a curated, filtered data layer designed for safe AI access.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ExecutionPlan;
