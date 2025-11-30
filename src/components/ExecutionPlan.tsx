import { motion } from 'framer-motion';

const ExecutionPlan = () => {
  const agents = [
    'Supervisor agent',
    'Specialist analysis agents',
    'Validation + compliance agent',
    'Scoring integration agent',
  ];

  const techStack = {
    backend: ['Python', 'FastAPI'],
    ml: ['XGBoost', 'scikit-learn'],
    documentProcessing: ['OCR', 'models'],
    agentSystems: ['Custom agent framework', 'BIL'],
    database: ['PostgreSQL'],
    frontend: ['Next.js / React'],
    deployment: ['Docker'],
    optional: ['Cloud LLMs if needed'],
  };

  const aiUsage = [
    'Agents analyze documents',
    'Agents reason about extracted data',
    'Agents generate risk insights',
    'Scoring model predicts probability of default',
    'BIL interacts across platforms',
  ];

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
          How We Plan to Solve It
        </motion.h2>

        {/* Agents Section */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="glass-card p-8">
            <h3 className="text-2xl font-semibold mb-6 text-primary-400">Agents (Main Component)</h3>
            <p className="text-white/80 mb-4">
              We rely on multi-agent architecture for automation:
            </p>
            <div className="grid md:grid-cols-2 gap-3">
              {agents.map((agent, index) => (
                <div key={index} className="flex items-center gap-2 text-white/80">
                  <span className="text-primary-400">•</span>
                  <span>{agent}</span>
                </div>
              ))}
            </div>
            <p className="text-white/60 text-sm mt-4 italic">
              (Fully aligned with the internal plan's "AI Agent Orchestrator")
            </p>
          </div>
        </motion.div>

        {/* Technologies Used */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-center">Technologies Used</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass-card p-6">
              <h4 className="font-semibold mb-3 text-primary-400">Backend</h4>
              <ul className="space-y-1 text-sm text-white/70">
                {techStack.backend.map((tech, i) => (
                  <li key={i}>• {tech}</li>
                ))}
              </ul>
            </div>
            <div className="glass-card p-6">
              <h4 className="font-semibold mb-3 text-primary-400">ML</h4>
              <ul className="space-y-1 text-sm text-white/70">
                {techStack.ml.map((tech, i) => (
                  <li key={i}>• {tech}</li>
                ))}
              </ul>
            </div>
            <div className="glass-card p-6">
              <h4 className="font-semibold mb-3 text-primary-400">Document Processing</h4>
              <ul className="space-y-1 text-sm text-white/70">
                {techStack.documentProcessing.map((tech, i) => (
                  <li key={i}>• {tech}</li>
                ))}
              </ul>
            </div>
            <div className="glass-card p-6">
              <h4 className="font-semibold mb-3 text-primary-400">Agent Systems</h4>
              <ul className="space-y-1 text-sm text-white/70">
                {techStack.agentSystems.map((tech, i) => (
                  <li key={i}>• {tech}</li>
                ))}
              </ul>
            </div>
            <div className="glass-card p-6">
              <h4 className="font-semibold mb-3 text-primary-400">Database</h4>
              <ul className="space-y-1 text-sm text-white/70">
                {techStack.database.map((tech, i) => (
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
              <h4 className="font-semibold mb-3 text-primary-400">Deployment</h4>
              <ul className="space-y-1 text-sm text-white/70">
                {techStack.deployment.map((tech, i) => (
                  <li key={i}>• {tech}</li>
                ))}
              </ul>
            </div>
            <div className="glass-card p-6">
              <h4 className="font-semibold mb-3 text-primary-400">Optional</h4>
              <ul className="space-y-1 text-sm text-white/70">
                {techStack.optional.map((tech, i) => (
                  <li key={i}>• {tech}</li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* AI Usage */}
        <motion.div
          className="glass-card p-8 bg-primary-500/10 border-primary-500/30"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-primary-400">AI Usage</h3>
          <div className="grid md:grid-cols-2 gap-3">
            {aiUsage.map((usage, index) => (
              <div key={index} className="flex items-start gap-2 text-white/80">
                <span className="text-primary-400">•</span>
                <span>{usage}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExecutionPlan;
