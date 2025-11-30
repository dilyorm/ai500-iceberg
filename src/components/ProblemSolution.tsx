import { motion } from 'framer-motion';

const ProblemSolution = () => {
  return (
    <section id="problem" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Problem Section */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/20 border border-primary-500/30 rounded-full mb-6">
            <span className="text-primary-400 text-sm font-medium">
              Domain: Productivity / Financial Services
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">
            The Problem: Loan Processing Is Still Slow, Manual, and Repetitive
          </h2>
          
          <div className="space-y-4 mb-8">
            <div className="glass-card p-6">
              <div className="flex items-start gap-4">
                <div className="text-3xl">👤</div>
                <div>
                  <p className="text-white/80">
                    <strong className="text-white">Human staff manually check</strong> income, identity, bank statements, and forms
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6">
              <div className="flex items-start gap-4">
                <div className="text-3xl">❌</div>
                <div>
                  <p className="text-white/80">
                    <strong className="text-white">Errors happen</strong> because of manual data entry
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6">
              <div className="flex items-start gap-4">
                <div className="text-3xl">⏱️</div>
                <div>
                  <p className="text-white/80">
                    <strong className="text-white">Scoring is slow and inconsistent</strong>
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6">
              <div className="flex items-start gap-4">
                <div className="text-3xl">📊</div>
                <div>
                  <p className="text-white/80">
                    <strong className="text-white">Business teams lack real-time insights</strong> into loan quality
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6">
              <div className="flex items-start gap-4">
                <div className="text-3xl">⚙️</div>
                <div>
                  <p className="text-white/80">
                    <strong className="text-white">Automation tools usually require complex rule-based setups</strong>
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6">
              <div className="flex items-start gap-4">
                <div className="text-3xl">📱</div>
                <div>
                  <p className="text-white/80">
                    <strong className="text-white">Systems do not work across platforms</strong> (web, mobile, desktop), limiting adoption
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Why It Matters */}
          <div className="glass-card p-6 bg-primary-500/10 border-primary-500/30">
            <h3 className="text-xl font-semibold mb-3 text-primary-400">Why It Matters</h3>
            <p className="text-lg text-white/90 leading-relaxed">
              Banks and lending institutions waste enormous time on repetitive tasks that intelligent agents can automate instantly.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSolution;
