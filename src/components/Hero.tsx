import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(34, 197, 94, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 80% 80%, rgba(30, 64, 175, 0.1) 0%, transparent 50%)`,
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Agrobank badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/20 border border-primary-500/30 rounded-full mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="text-primary-400 text-sm font-medium">Built with Uzbekistan — Ready for Agrobank</span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="text-primary-400">Agent-Driven</span> Loan Automation System
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-white/70 mb-8 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              We combine our ready credit scoring model and our multi-platform agent BIL to build an intelligent automation system that processes loan applications end-to-end using autonomous AI agents.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <a
                href="#problem"
                className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-primary-500/50"
              >
                View Problem → Solution
              </a>
              <a
                href="#roadmap"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg border border-white/20 transition-all"
              >
                Explore Roadmap
              </a>
            </motion.div>
          </motion.div>

          {/* Right: Animated Globe with Chat Bubble */}
          <motion.div
            className="relative h-[500px] lg:h-[600px] flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="relative w-[280px] h-[280px] lg:w-[320px] lg:h-[320px]">
              {/* Globe with realistic shading */}
              <motion.div
                className="globe-container absolute inset-0 rounded-full overflow-hidden"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                style={{
                  background: `
                    radial-gradient(circle at 30% 25%, rgba(255, 255, 255, 0.15), transparent 55%),
                    radial-gradient(circle at 70% 70%, rgba(0, 0, 0, 0.65), transparent 60%),
                    radial-gradient(circle at 50% 50%, #0c2940 0, #05101f 60%, #020712 100%)
                  `,
                  boxShadow: `
                    0 0 40px rgba(0, 0, 0, 0.7),
                    0 0 80px rgba(34, 197, 94, 0.25)
                  `,
                }}
              >
                {/* Inner glow */}
                <div 
                  className="absolute inset-0 rounded-full"
                  style={{
                    backgroundImage: 'radial-gradient(circle at 30% 15%, rgba(255, 255, 255, 0.25), transparent 55%)',
                    mixBlendMode: 'screen',
                    opacity: 0.9,
                  }}
                />

                {/* Orbit rings */}
                <div 
                  className="absolute rounded-full border border-slate-400/35 opacity-60"
                  style={{ inset: '18%', transform: 'rotate(18deg)' }}
                />
                <div 
                  className="absolute rounded-full border border-slate-400/35 opacity-60"
                  style={{ inset: '8%', transform: 'rotate(-24deg)' }}
                />
                <div 
                  className="absolute rounded-full border border-slate-400/35 opacity-60"
                  style={{ inset: '0', transform: 'rotate(40deg)' }}
                />
              </motion.div>

              {/* Data Points */}
              {[
                { top: '28%', left: '24%', delay: 0 },
                { top: '52%', left: '65%', delay: 0.6 },
                { top: '70%', left: '32%', delay: 1.2 },
                { top: '40%', left: '80%', delay: 0.9 },
              ].map((point, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2.5 h-2.5 rounded-full"
                  style={{
                    top: point.top,
                    left: point.left,
                    background: 'radial-gradient(circle, #34d399 0, #059669 40%, rgba(0, 0, 0, 0) 70%)',
                    boxShadow: '0 0 12px rgba(52, 211, 153, 0.9)',
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: [0.4, 1, 0.4],
                    scale: [0.9, 1.3, 0.9],
                  }}
                  transition={{
                    duration: 1.8,
                    delay: point.delay,
                    repeat: Infinity,
                    ease: 'easeOut',
                  }}
                />
              ))}

              {/* Data Flow Lines */}
              {[
                { top: '32%', left: '26%', width: '120px', rotate: '10deg', delay: 0.5 },
                { top: '56%', left: '35%', width: '105px', rotate: '-8deg', delay: 0.65 },
                { top: '68%', left: '38%', width: '90px', rotate: '18deg', delay: 0.8 },
              ].map((line, i) => (
                <motion.div
                  key={i}
                  className="absolute h-0.5 rounded-full overflow-hidden"
                  style={{
                    top: line.top,
                    left: line.left,
                    width: line.width,
                    transform: `rotate(${line.rotate})`,
                    transformOrigin: 'left center',
                  }}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{
                    delay: line.delay,
                    duration: 1,
                    ease: 'easeOut',
                  }}
                >
                  <motion.div
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(to right, rgba(34, 197, 94, 0) 0%, #22c55e 30%, #a7f3d0 60%, rgba(34, 197, 94, 0) 100%)',
                    }}
                    animate={{
                      x: ['-100%', '0%', '100%'],
                    }}
                    transition={{
                      duration: 2.4,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  />
                </motion.div>
              ))}

              {/* Central AI/Bank Hub */}
              <motion.div
                className="absolute right-[18%] top-[46%] flex items-center gap-1.5 px-2.5 py-1.5 rounded-full backdrop-blur-md"
                style={{
                  background: 'radial-gradient(circle at top left, rgba(34, 197, 94, 0.4), rgba(15, 23, 42, 0.96))',
                  boxShadow: '0 0 16px rgba(34, 197, 94, 0.5), 0 0 36px rgba(15, 23, 42, 0.9)',
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  y: [0, -6, 0],
                }}
                transition={{
                  opacity: { delay: 1.2, duration: 0.8 },
                  scale: { delay: 1.2, duration: 0.8 },
                  y: {
                    duration: 5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  },
                }}
              >
                {/* Bank icon */}
                <div 
                  className="w-4 h-4 rounded"
                  style={{
                    background: 'linear-gradient(135deg, #22c55e, #16a34a)',
                    boxShadow: '0 0 12px rgba(34, 197, 94, 0.8)',
                    position: 'relative',
                  }}
                >
                  <div 
                    className="absolute rounded-sm border border-white/90"
                    style={{ inset: '3px' }}
                  />
                  <div 
                    className="absolute left-0.5 right-0.5 bottom-0.5 h-1 rounded-b-sm border-b border-l border-r border-white/90"
                  />
                </div>
                <span className="text-[0.7rem] uppercase tracking-wider text-green-50 font-medium">
                  AI Core
                </span>
              </motion.div>
            </div>

            {/* Chat Bubble */}
            <motion.div
              className="absolute right-0 top-1/2 -translate-y-1/2 lg:translate-x-8 glass-card p-4 max-w-[280px]"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            >
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-primary-500 flex items-center justify-center text-xs font-bold flex-shrink-0">
                    You
                  </div>
                  <div className="text-sm text-white/90">
                    "Show me today's approved SME loans and average risk score."
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-primary-600 flex items-center justify-center text-xs font-bold flex-shrink-0">
                    AI
                  </div>
                  <div className="text-sm text-white/90">
                    "Today: <strong>128 approvals</strong> | Avg risk band: <strong>Low</strong> | <strong>7</strong> flagged for manual follow-up."
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Caption */}
            <motion.p
              className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm text-white/70 text-center max-w-xs"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              Data from customers flows into a single AI-powered loan processing core.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <div className="flex flex-col items-center gap-2 text-white/40">
          <span className="text-xs">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-2">
            <motion.div
              className="w-1.5 h-1.5 bg-white/40 rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
