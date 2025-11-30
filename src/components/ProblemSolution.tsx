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
          <h2 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">
            Loan Processing Is Slow — and Insights Are Locked in Silos
          </h2>
          
          <div className="space-y-6 mb-8">
            <div className="glass-card p-6">
              <div className="flex items-start gap-4">
                <div className="text-3xl">📄</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Manual Document Review</h3>
                  <p className="text-white/70">
                    Underwriters manually read dozens of pages per application (IDs, statements, contracts).
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6">
              <div className="flex items-start gap-4">
                <div className="text-3xl">❓</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Questions Go Unanswered</h3>
                  <p className="text-white/70 mb-3">
                    Risk and business teams can't quickly answer simple questions like:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-white/70 ml-4">
                    <li>"How many high-risk loans did we approve this week?"</li>
                    <li>"What's our average processing time for SME loans?"</li>
                    <li>"Which applications are stuck in manual review?"</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="glass-card p-6">
              <div className="flex items-start gap-4">
                <div className="text-3xl">📊</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Data Scattered Across Systems</h3>
                  <p className="text-white/70">
                    Data is scattered across systems; even with automation, business users still wait for reports.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Closing statement */}
          <div className="glass-card p-6 bg-primary-500/10 border-primary-500/30">
            <p className="text-lg text-white/90 leading-relaxed">
              We solve both problems: we automate the loan workflow <strong className="text-white">and</strong> make the resulting data instantly usable through an AI assistant.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSolution;
