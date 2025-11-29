import { motion } from 'framer-motion';

const Solution = () => {
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
          Our Solution: Loan Automation Engine + AI Assistant
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* A. Automation Engine */}
          <motion.div
            className="glass-card glass-card-hover p-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-4xl mb-4">⚙️</div>
            <h3 className="text-2xl font-semibold mb-4">Automation Engine</h3>
            <p className="text-white/70 mb-4 text-sm">Under the hood:</p>
            <ul className="space-y-2 text-white/80">
              <li className="flex items-start gap-2">
                <span className="text-primary-400">•</span>
                <span>Document intake & OCR</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-400">•</span>
                <span>Data extraction & validation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-400">•</span>
                <span>ML credit scoring & risk bands</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-400">•</span>
                <span>Routing to auto-approve / auto-reject / manual review</span>
              </li>
            </ul>
          </motion.div>

          {/* B. AI Assistant */}
          <motion.div
            className="glass-card glass-card-hover p-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-2xl font-semibold mb-4">AI Assistant</h3>
            <p className="text-white/70 mb-4 text-sm">On top:</p>
            <ul className="space-y-2 text-white/80">
              <li className="flex items-start gap-2">
                <span className="text-primary-400">•</span>
                <span>Chat interface for underwriters, risk managers, and executives</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-400">•</span>
                <span>Governed access: each role only sees allowed datasets</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-400">•</span>
                <span>Can answer questions, generate daily/weekly reports, and summarize portfolios</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-400">•</span>
                <span>Works on desktop and mobile ("ask your bank in natural language")</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Simple Diagram */}
        <motion.div
          className="glass-card p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            <div className="text-center">
              <div className="text-3xl mb-2">👥</div>
              <p className="font-semibold">Customers</p>
            </div>
            <div className="text-2xl text-primary-400">→</div>
            <div className="text-center">
              <div className="text-3xl mb-2">⚙️</div>
              <p className="font-semibold">Automation Engine</p>
            </div>
            <div className="text-2xl text-primary-400">→</div>
            <div className="text-center">
              <div className="text-3xl mb-2">📊</div>
              <p className="font-semibold">Cleans & structures data</p>
            </div>
            <div className="text-2xl text-primary-400">→</div>
            <div className="text-center">
              <div className="text-3xl mb-2">🤖</div>
              <p className="font-semibold">AI Assistant & Dashboards</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Solution;

