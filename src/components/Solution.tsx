import { motion } from 'framer-motion';

const Solution = () => {
  const automationAgents = [
    'Document Intake Agent',
    'Classification Agent',
    'Extraction Agent',
    'Validation Agent',
    'Income Analysis Agent',
    'Debt Analysis Agent',
    'Compliance Agent',
    'Scoring Agent',
    'Decision Aggregation Agent',
    'Reporting Agent',
  ];

  return (
    <section id="solution" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Solution: Agent-Based Loan Automation System
        </motion.h2>

        <motion.p
          className="text-center text-white/70 mb-12 max-w-3xl mx-auto text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Instead of building a traditional rule-based workflow, our system is designed around AI agents that collaborate to process loans autonomously.
        </motion.p>

        <div className="space-y-12">
          {/* A) Loan Automation Agents */}
          <motion.div
            className="glass-card glass-card-hover p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="text-4xl">🤖</div>
              <div>
                <h3 className="text-2xl font-semibold">A) Loan Automation Agents (Core of This System)</h3>
                <p className="text-white/70 text-sm mt-1">These agents run the processing pipeline end-to-end</p>
              </div>
            </div>
            <p className="text-white/80 mb-4">
              Each agent has a specific role and collaborates with others in a multi-agent system:
            </p>
            <div className="grid md:grid-cols-2 gap-3">
              {automationAgents.map((agent, index) => (
                <div key={index} className="flex items-center gap-2 text-white/80">
                  <span className="text-primary-400">•</span>
                  <span>{agent}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* B) Credit Scoring Engine */}
          <motion.div
            className="glass-card glass-card-hover p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="text-4xl">📊</div>
              <div>
                <h3 className="text-2xl font-semibold">B) Credit Scoring Engine (Already Built)</h3>
                <p className="text-white/70 text-sm mt-1">Your scoring engine is real and already implemented, not theoretical</p>
              </div>
            </div>
            <ul className="space-y-3 text-white/80 mb-4">
              <li className="flex items-start gap-2">
                <span className="text-primary-400">✓</span>
                <span>Predicts default probability</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-400">✓</span>
                <span>Produces credit risk scores</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-400">✓</span>
                <span>Works on structured features</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-400">✓</span>
                <span>Extremely fast API-level scoring</span>
              </li>
            </ul>
            <a
              href="https://github.com/azxav/loan-processing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors"
            >
              🔗 View on GitHub →
            </a>
          </motion.div>

          {/* C) BIL Multi-Platform Agent */}
          <motion.div
            className="glass-card glass-card-hover p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="text-4xl">🌟</div>
              <div>
                <h3 className="text-2xl font-semibold">C) BIL — Multi-Platform Autonomous Agent (Already Built)</h3>
                <p className="text-white/70 text-sm mt-1">BIL is your X-factor</p>
              </div>
            </div>
            <ul className="space-y-3 text-white/80 mb-4">
              <li className="flex items-start gap-2">
                <span className="text-primary-400">✓</span>
                <span>Works on web, desktop, and mobile</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-400">✓</span>
                <span>Can interact with structured and user data</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-400">✓</span>
                <span>Supports sync, conversation memory, and reporting</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-400">✓</span>
                <span>Can access filtered datasets</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-400">✓</span>
                <span>Can act as supervisory agent OR support users directly</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-400">✓</span>
                <span>Integrates naturally into the automation system</span>
              </li>
            </ul>
            <a
              href="https://github.com/dilyorm/bil"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors"
            >
              🔗 View on GitHub →
            </a>
          </motion.div>

          {/* D) Integration */}
          <motion.div
            className="glass-card p-8 bg-primary-500/10 border-primary-500/30"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-primary-400">D) Integration: What We Build Now</h3>
            <p className="text-white/90 text-lg mb-4">
              We connect:
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-4">
              <div className="text-center">
                <div className="text-3xl mb-2">🤖</div>
                <p className="font-semibold">Agents</p>
              </div>
              <div className="text-2xl text-primary-400">+</div>
              <div className="text-center">
                <div className="text-3xl mb-2">📊</div>
                <p className="font-semibold">Scoring</p>
              </div>
              <div className="text-2xl text-primary-400">+</div>
              <div className="text-center">
                <div className="text-3xl mb-2">🌟</div>
                <p className="font-semibold">BIL</p>
              </div>
              <div className="text-2xl text-primary-400">=</div>
              <div className="text-center">
                <div className="text-3xl mb-2">🚀</div>
                <p className="font-semibold">Full Loan Automation Engine</p>
              </div>
            </div>
            <p className="text-white/80 text-center">
              This is exactly what AI500 expects: a meaningful, real-world solution with real components.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
