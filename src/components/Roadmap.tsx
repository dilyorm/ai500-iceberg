import { motion } from 'framer-motion';

const Roadmap = () => {
  const phases = [
    {
      title: 'Phase 1 – Core Automation Prototype',
      items: [
        'Document upload, OCR & extraction',
        'Simple scoring and decision recommendation',
      ],
    },
    {
      title: 'Phase 2 – Data Model & Governance',
      items: [
        'Unified data model for applications, decisions, and risk',
        'Role-based filters for different users',
      ],
    },
    {
      title: 'Phase 3 – AI Assistant MVP',
      items: [
        'Chat UI with fixed question templates (e.g. key KPIs, basic reports)',
        'Use curated data model for safe responses',
      ],
    },
    {
      title: 'Phase 4 – Full Copilot',
      items: [
        'Free-form questions, follow-ups, saved dashboards, alerts',
        'Integration with mobile and internal tools',
      ],
    },
  ];

  return (
    <section id="roadmap" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-4 text-center gradient-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Roadmap: From Engine to Assistant
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {phases.map((phase, index) => (
            <motion.div
              key={phase.title}
              className="glass-card glass-card-hover p-6 flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${
                index === 0 ? 'from-purple-500 to-purple-600' :
                index === 1 ? 'from-blue-500 to-blue-600' :
                index === 2 ? 'from-pink-500 to-pink-600' :
                'from-green-500 to-green-600'
              } flex items-center justify-center text-2xl font-bold mb-4`}>
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold mb-4">{phase.title}</h3>
              <ul className="space-y-2 flex-grow">
                {phase.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-white/70 text-sm flex items-start">
                    <span className="text-primary-400 mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
