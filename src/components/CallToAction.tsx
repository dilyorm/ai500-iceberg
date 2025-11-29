import { motion } from 'framer-motion';

const CallToAction = () => {
  return (
    <section id="cta" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          className="glass-card p-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Ready to Transform Loan Processing?
          </h2>
          <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
            Our next step: build a working prototype that automates loan processing and provides an AI assistant for instant insights.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="#solution"
              className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors"
            >
              See How It Works
            </a>
            <a
              href="mailto:contact@example.com"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg border border-white/20 transition-colors"
            >
              Contact Us
            </a>
          </div>

          <div className="mt-8 pt-8 border-t border-white/10">
            <p className="text-white/60 text-sm mb-4">Connect with us:</p>
            <div className="flex justify-center gap-6">
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                Telegram
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                GitHub
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
