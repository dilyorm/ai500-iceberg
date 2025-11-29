import { motion } from 'framer-motion';

const WhyOurTeam = () => {
  const reasons = [
    {
      title: 'Full-Stack Coverage',
      description: 'We cover backend, ML, document AI, frontend, DevOps, and integrations—all critical components for this platform.',
      icon: '🔧',
    },
    {
      title: 'Experience with Financial Systems',
      description: 'Team members have experience with fintech, banks, or complex APIs, understanding the regulatory and technical challenges.',
      icon: '💼',
    },
    {
      title: 'Deep Focus on AI + Automation',
      description: 'Familiar with GPT-4 / Claude, LangChain, orchestration, and productionizing ML models in real-world applications.',
      icon: '🤖',
    },
    {
      title: 'Complete MVP Blueprint',
      description: 'Clear architecture for document processing, credit scoring, AI assistant layer, banking connectors, and notifications, plus a detailed build plan.',
      icon: '📋',
    },
  ];

  const proofPoints = [
    {
      metric: 'Past Projects',
      description: 'Successfully shipped AI/ML products in production',
    },
    {
      metric: 'Hackathon Wins',
      description: 'Experience building and presenting technical solutions',
    },
    {
      metric: 'Technical Expertise',
      description: 'Combined experience in banking, AI, and software engineering',
    },
  ];

  return (
    <section id="why-our-team" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Why We're the Right Team
        </motion.h2>

        <motion.p
          className="text-center text-white/70 mb-12 max-w-3xl mx-auto text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          We connect our team's expertise to the complexity of this problem, bringing together the right skills, 
          experience, and execution plan to build a production-ready loan automation platform with an AI assistant.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              className="glass-card glass-card-hover p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="text-4xl mb-4">{reason.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="grid md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {proofPoints.map((point) => (
            <div key={point.metric} className="glass-card p-6 text-center">
              <h4 className="text-2xl font-bold mb-2 gradient-text">{point.metric}</h4>
              <p className="text-white/70 text-sm">{point.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyOurTeam;

