import { motion } from 'framer-motion';

const BusinessModel = () => {
  return (
    <section id="business" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          How This Could Be Used in Practice
        </motion.h2>

        <motion.div
          className="glass-card p-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <ul className="space-y-4 text-white/80">
            <li className="flex items-start gap-3">
              <span className="text-primary-400 text-xl">•</span>
              <span><strong>Start as a pilot:</strong> one loan product, a subset of users.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary-400 text-xl">•</span>
              <span><strong>Offer as modular platform:</strong> Automation engine, AI assistant for reporting & insights.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary-400 text-xl">•</span>
              <span><strong>Deployment models:</strong> cloud or bank's infrastructure.</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default BusinessModel;

