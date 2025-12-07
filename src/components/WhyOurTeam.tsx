import { motion } from 'framer-motion';

const WhyOurTeam = () => {
  const reasons = [
    {
      title: 'We Already Have Two Production-Ready Components',
      description: 'BIL (multi-platform agent) + Credit Scoring Engine are real and working, not theoretical. This gives us a head start.',
      icon: '✅',
    },
    {
      title: 'Experience in AI Agents, ML Pipelines, Deployment',
      description: 'Team members have hands-on experience building AI agents, ML models, and deploying production systems.',
      icon: '🤖',
    },
    {
      title: 'PM + QA + Delivery Expertise',
      description: 'We have project management, quality assurance, and proven delivery track record from past hackathon wins.',
      icon: '📋',
    },
    {
      title: 'Perfect Skill Coverage',
      description: 'PM & Quality, ML & Scoring, Agent Development, Automation Pipeline—all critical areas are covered.',
      icon: '🔧',
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
          Why Our Team Can Solve This
        </motion.h2>

        <motion.p
          className="text-center text-white/70 mb-12 max-w-3xl mx-auto text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          We already have two production-ready components (BIL + Scoring Engine). We are experienced in AI agents, ML pipelines, and deployment. Past hackathon wins show execution ability. We have shipped complex AI projects before. Our skills perfectly cover the project.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6">
          {reasons.map((reason) => (
            <motion.div
              key={reason.title}
              className="glass-card glass-card-hover p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-4xl mb-4">{reason.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyOurTeam;
