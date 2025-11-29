import { motion } from 'framer-motion';

const AIAssistantDemo = () => {
  const scenarios = [
    {
      title: 'For Business Heads',
      context: 'on the phone',
      question: "Show me today's new SME loan approvals and their risk distribution.",
      response: {
        count: '128 approvals',
        volume: '$2.4M',
        riskBands: 'Low: 85% | Medium: 12% | High: 3%',
        insights: ['High-risk share increased by 5% vs yesterday', 'Average processing time: 8 minutes'],
      },
      icon: '📱',
    },
    {
      title: 'For Risk Team',
      question: "List loans approved this week with risk band 'High' and missing documents.",
      response: {
        list: '7 loans flagged',
        details: 'All require income verification follow-up',
        suggestion: 'Suggested: Schedule review meeting for tomorrow',
      },
      icon: '⚠️',
    },
    {
      title: 'For Operations',
      question: "Where are we losing the most time in the loan pipeline?",
      response: {
        finding: 'Document review stage',
        details: 'Average wait: 2.3 hours',
        suggestion: '23 applications currently stuck in manual review',
      },
      icon: '⏱️',
    },
  ];

  return (
    <section id="assistant" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-4 text-center gradient-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          What the AI Assistant Actually Does
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {scenarios.map((scenario, index) => (
            <motion.div
              key={index}
              className="glass-card glass-card-hover p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="text-3xl mb-4">{scenario.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{scenario.title}</h3>
              {scenario.context && (
                <p className="text-sm text-primary-400 mb-3">({scenario.context})</p>
              )}

              {/* Chat mockup */}
              <div className="space-y-3 mt-4">
                <div className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-primary-500 flex items-center justify-center text-xs font-bold flex-shrink-0">
                    You
                  </div>
                  <div className="text-sm text-white/90 bg-white/5 p-2 rounded-lg">
                    "{scenario.question}"
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-primary-600 flex items-center justify-center text-xs font-bold flex-shrink-0">
                    AI
                  </div>
                  <div className="text-sm text-white/90 bg-primary-500/10 p-2 rounded-lg">
                    {scenario.response.count && (
                      <div className="space-y-1">
                        <p><strong>{scenario.response.count}</strong> | Volume: <strong>{scenario.response.volume}</strong></p>
                        <p>Risk bands: {scenario.response.riskBands}</p>
                        <p className="text-primary-300 text-xs mt-2">Insights:</p>
                        <ul className="text-xs space-y-1">
                          {scenario.response.insights?.map((insight, i) => (
                            <li key={i}>• {insight}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {scenario.response.list && (
                      <div className="space-y-1">
                        <p><strong>{scenario.response.list}</strong></p>
                        <p>{scenario.response.details}</p>
                        <p className="text-primary-300 text-xs mt-2">{scenario.response.suggestion}</p>
                      </div>
                    )}
                    {scenario.response.finding && (
                      <div className="space-y-1">
                        <p><strong>{scenario.response.finding}</strong></p>
                        <p>{scenario.response.details}</p>
                        <p className="text-primary-300 text-xs mt-2">{scenario.response.suggestion}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="glass-card p-6 bg-primary-500/10 border-primary-500/30"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-white/80 text-center leading-relaxed">
            Because the automation engine already cleans and structures the data, the assistant can safely answer these questions using up-to-date information, with access controlled per role.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AIAssistantDemo;

