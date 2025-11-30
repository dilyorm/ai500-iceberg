import { motion } from 'framer-motion';

const Roadmap = () => {
  const phases = [
    {
      title: 'Phase 1 – Automation System Development',
      items: [
        'Build document processing pipeline (OCR → Extraction → Data structuring)',
        'Develop automation workflow engine',
        'Create integration layer for existing components',
      ],
    },
    {
      title: 'Phase 2 – Integration of Existing Components',
      items: [
        'Integrate ready credit scoring ensemble model',
        'Connect existing AI agent (multi-platform, user data capable)',
        'Unified data model for applications, decisions, and risk',
      ],
    },
    {
      title: 'Phase 3 – AI Assistant & Data Access',
      items: [
        'Build RAG pipeline connecting AI agent to automation data',
        'Implement role-based data access and governance',
        'Chat UI with question templates and basic reports',
      ],
    },
    {
      title: 'Phase 4 – Full Platform Integration',
      items: [
        'End-to-end workflow: documents → automation → scoring → AI assistant',
        'Free-form questions, follow-ups, saved dashboards',
        'Production deployment and pilot testing',
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
          Roadmap: Integrating Our Existing Components
        </motion.h2>
        
        <motion.p
          className="text-center text-white/70 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          We already have a <strong className="text-primary-400">ready credit scoring ensemble model</strong> and a <strong className="text-primary-400">ready AI agent</strong> that works across multiple platforms with user data. Our focus is building the automation system and integrating these components.
        </motion.p>
        
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
