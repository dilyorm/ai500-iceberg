import { motion } from 'framer-motion';

const WhyAgrobank = () => {
  const reasons = [
    {
      title: 'High Volume of Microloans',
      description: 'Uzbekistan\'s banking sector processes thousands of microloan applications monthly. Our solution addresses the manual bottleneck in Agrobank\'s credit product workflows.',
      icon: '📈',
      stat: 'Thousands of applications/month',
    },
    {
      title: 'Manual Document Processing',
      description: 'Current workflows require extensive manual review of IDs, income proofs, and bank statements. Our AI platform automates 70-80% of this work while maintaining accuracy.',
      icon: '📄',
      stat: 'Hours → Minutes',
    },
    {
      title: 'Long Processing Queues',
      description: 'Applicants face long wait times due to manual underwriting. Our platform reduces processing time from days to minutes for eligible applications.',
      icon: '⏱️',
      stat: 'Days → Minutes',
    },
    {
      title: 'Compliance & Human Oversight',
      description: 'Solution designed with human-in-loop architecture. Final decisions remain with Agrobank underwriters, ensuring compliance with local regulations and bank policies.',
      icon: '✅',
      stat: 'Human-in-Loop',
    },
  ];

  const features = [
    {
      title: 'Uzbek Workflow Compatible',
      description: 'Built with understanding of Uzbek banking practices, document types, and regulatory requirements.',
    },
    {
      title: 'Agrobank Integration Ready',
      description: 'Pre-built connectors for core banking systems commonly used in Uzbekistan, with flexible REST/SOAP adapters.',
    },
    {
      title: 'Local Language Support',
      description: 'Document processing supports Uzbek, Russian, and English—matching Agrobank\'s customer base.',
    },
  ];

  return (
    <section id="why-agrobank" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Why This Matters for Agrobank
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Our solution addresses real challenges in Uzbekistan's banking sector, specifically tailored for Agrobank's credit processing workflows.
          </p>
        </motion.div>

        {/* Main Reasons */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              className="glass-card glass-card-hover p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl flex-shrink-0">{reason.icon}</div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold">{reason.title}</h3>
                    <span className="text-sm px-3 py-1 bg-primary-500/20 text-primary-300 rounded-full">
                      {reason.stat}
                    </span>
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed">{reason.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Solution Fit */}
        <motion.div
          className="glass-card p-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-center">Solution Tailored for Agrobank</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={feature.title} className="text-center">
                <h4 className="font-semibold mb-2 text-primary-400">{feature.title}</h4>
                <p className="text-white/70 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Human-in-Loop Emphasis */}
        <motion.div
          className="glass-card p-8 bg-primary-500/10 border-primary-500/30"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="text-5xl">👤</div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-semibold mb-3">Human Underwriters Remain in Control</h3>
              <p className="text-white/80 leading-relaxed">
                Our AI platform provides decision support and automates routine tasks, but <strong>final approval or rejection decisions remain with Agrobank's human underwriters</strong>. 
                This ensures compliance with local regulations, bank policies, and maintains the human judgment needed for complex cases.
              </p>
              <div className="mt-4 flex flex-wrap gap-3 justify-center md:justify-start">
                <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Auto-approve (low risk)</span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Auto-reject (high risk)</span>
                <span className="px-3 py-1 bg-primary-500/30 rounded-full text-sm">Manual review (complex cases)</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyAgrobank;

