import { motion } from 'framer-motion';

const Benefits = () => {
  return (
    <section id="benefits" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          What We Automate – and What You Get
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Automated */}
          <motion.div
            className="glass-card p-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-primary-400">Automated</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-primary-400 text-xl">✓</span>
                <span className="text-white/80">Document reading & data entry</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-400 text-xl">✓</span>
                <span className="text-white/80">Basic eligibility checks</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-400 text-xl">✓</span>
                <span className="text-white/80">Risk scoring and risk banding</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-400 text-xl">✓</span>
                <span className="text-white/80">Standard notifications & routing</span>
              </li>
            </ul>
          </motion.div>

          {/* Your Benefits */}
          <motion.div
            className="glass-card p-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-primary-400">Your Benefits</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-primary-400 text-xl">⚡</span>
                <span className="text-white/80"><strong>Faster processing:</strong> hours → minutes for simple cases</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-400 text-xl">👥</span>
                <span className="text-white/80"><strong>Less manual work</strong> for underwriters</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-400 text-xl">📊</span>
                <span className="text-white/80"><strong>Instant visibility</strong> for business & risk teams via the assistant</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-400 text-xl">✅</span>
                <span className="text-white/80"><strong>Better consistency</strong> and fewer human errors</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;

