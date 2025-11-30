import { motion } from 'framer-motion';

const Roadmap = () => {
  const phases = [
    {
      title: 'Phase 1 — Completed',
      status: 'completed',
      items: [
        '✔ Credit scoring engine (ready)',
        '✔ BIL multi-platform agent (ready)',
      ],
    },
    {
      title: 'Phase 2 — In Progress (Hackathon Goal)',
      status: 'in-progress',
      items: [
        'Build automation agent system',
        'Document upload → classification → extraction',
        'Connect extraction → scoring → decision',
        'Integrate BIL as:',
        '  • Supervisory agent OR',
        '  • Multi-platform automation companion',
      ],
    },
    {
      title: 'Phase 3 — MVP',
      status: 'future',
      items: [
        'End-to-end pipeline from upload to decision',
        'Agents collaborate autonomously',
        'Human-in-loop review interface',
        'Basic dashboard + logs',
      ],
    },
    {
      title: 'Phase 4 — Future',
      status: 'future',
      items: [
        'Multi-agent optimization',
        'Production-ready connectors',
        'More automation modules',
        'Fully autonomous decision reports',
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
          Roadmap & Current Stage
        </motion.h2>
        
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/20 border border-primary-500/30 rounded-full">
            <span className="text-primary-400 text-sm font-medium">
              Current Stage: <strong className="text-white">Prototype</strong> (Because you already have scoring + BIL as prototypes)
            </span>
          </div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {phases.map((phase, index) => (
            <motion.div
              key={phase.title}
              className={`glass-card glass-card-hover p-6 flex flex-col ${
                phase.status === 'completed' ? 'border-green-500/50' :
                phase.status === 'in-progress' ? 'border-primary-500/50' :
                'border-white/10'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-2xl font-bold mb-4 ${
                phase.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                phase.status === 'in-progress' ? 'bg-primary-500/20 text-primary-400' :
                'bg-white/5 text-white/50'
              }`}>
                {phase.status === 'completed' ? '✓' : index + 1}
              </div>
              <h3 className="text-xl font-semibold mb-4">{phase.title}</h3>
              <ul className="space-y-2 flex-grow">
                {phase.items.map((item, itemIndex) => (
                  <li key={itemIndex} className={`text-sm flex items-start ${
                    phase.status === 'completed' ? 'text-green-300/80' :
                    phase.status === 'in-progress' ? 'text-primary-300/80' :
                    'text-white/70'
                  }`}>
                    <span className={`mr-2 ${
                      phase.status === 'completed' ? 'text-green-400' :
                      phase.status === 'in-progress' ? 'text-primary-400' :
                      'text-white/50'
                    }`}>
                      {item.startsWith('✔') ? '' : item.startsWith('  •') ? '  •' : '•'}
                    </span>
                    <span>{item.replace(/^✔\s*/, '').replace(/^  •\s*/, '')}</span>
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
