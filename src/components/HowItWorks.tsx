import { motion } from 'framer-motion';

const HowItWorks = () => {
  const steps = [
    {
      number: '1',
      title: 'Customer applies & uploads documents',
      description: 'Web or branch: documents go into the system.',
      icon: '📤',
    },
    {
      number: '2',
      title: 'AI Automation Engine processes the application',
      description: 'OCR + document classification, data extraction & validation, ML risk score & decision recommendation',
      icon: '⚙️',
    },
    {
      number: '3',
      title: 'Decisions & logs are stored as structured data',
      description: 'Every decision, feature, and risk flag is written into a clean internal data model.',
      icon: '💾',
    },
    {
      number: '4',
      title: 'AI Assistant exposes this data safely',
      description: 'Role-based access: business users, risk, operations. Chat or mobile app: "How many applications are stuck in manual review?" "Show me loans with rising risk in the last 7 days."',
      icon: '🤖',
    },
    {
      number: '5',
      title: 'Humans stay in control',
      description: 'AI recommends; underwriters and managers approve, override, or change thresholds.',
      icon: '👤',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          How It Works End-to-End
        </motion.h2>

        <div className="relative">
          {/* Timeline line for desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary-500/30 transform -translate-x-1/2"></div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                className="relative flex flex-col lg:flex-row items-center gap-8"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Step content */}
                <div className={`flex-1 glass-card glass-card-hover p-6 lg:p-8 ${index % 2 === 0 ? 'lg:mr-auto lg:max-w-md' : 'lg:ml-auto lg:max-w-md'}`}>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary-600 flex items-center justify-center text-2xl font-bold">
                      {step.number}
                    </div>
                    <div className="flex-1">
                      <div className="text-3xl mb-3">{step.icon}</div>
                      <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                      <p className="text-white/70 text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>

                {/* Timeline dot for desktop */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary-500 border-4 border-slate-900 z-10"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
