import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Demo = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Simple Header */}
      <header className="py-6 px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <Link to="/" className="text-xl font-bold gradient-text hover:opacity-80 transition-opacity inline-block">
            ← Back to Home
          </Link>
        </div>
      </header>

      <main className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Title */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              🎥 Demo: Agent-Driven Loan Automation System
            </h1>
            <p className="text-white/70 text-lg max-w-3xl mx-auto">
              This demo video shows how our system transforms manual, error-prone loan processing into a fully automated, intelligent workflow powered by AI agents, our credit scoring model, and our multi-platform automation agent BIL.
            </p>
          </motion.div>

          {/* Video Section */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-black/30 rounded-xl overflow-hidden border border-white/10">
              <div className="aspect-video bg-black/50 flex items-center justify-center">
                {/* Replace YOUR_VIDEO_URL with your actual video URL (YouTube, Vimeo, etc.) */}
                <div className="text-center text-white/50 p-8">
                  <p className="text-xl mb-3">📹</p>
                  <p className="text-sm">Add your video embed URL in Demo.tsx</p>
                </div>
                {/* Uncomment and add your video URL when ready:
                <iframe
                  width="100%"
                  height="100%"
                  src="YOUR_VIDEO_URL"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
                */}
              </div>
            </div>
          </motion.div>

          {/* Description Section */}
          <motion.div
            className="space-y-6 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-2xl font-semibold mb-8 text-white">🔍 What the Video Demonstrates</h2>
            
            <div className="space-y-5">
              {/* The Real Problem */}
              <div className="bg-white/5 rounded-lg p-5 border border-white/10">
                <h3 className="text-lg font-semibold mb-3 text-primary-400">The Real Problem in Banks</h3>
                <ul className="space-y-1.5 text-white/70 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-400 mt-0.5">•</span>
                    <span>Staff struggling with messy, inconsistent documents</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-400 mt-0.5">•</span>
                    <span>Currency mismatches, handwritten values, wrong calculations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-400 mt-0.5">•</span>
                    <span>Manual data entry causing delays & errors</span>
                  </li>
                </ul>
              </div>

              {/* Data Chaos → Data Clarity */}
              <div className="bg-white/5 rounded-lg p-5 border border-white/10">
                <h3 className="text-lg font-semibold mb-3 text-primary-400">Data Chaos → Data Clarity</h3>
                <ul className="space-y-1.5 text-white/70 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-400 mt-0.5">•</span>
                    <span>Extracting a value (e.g., "$16") from a noisy bank statement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-400 mt-0.5">•</span>
                    <span>Showing how inconsistent formats break automation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-400 mt-0.5">•</span>
                    <span>Our system stabilizes and standardizes everything instantly</span>
                  </li>
                </ul>
              </div>

              {/* How Automation Works */}
              <div className="bg-white/5 rounded-lg p-5 border border-white/10">
                <h3 className="text-lg font-semibold mb-3 text-primary-400">How Automation Works</h3>
                <ul className="space-y-1.5 text-white/70 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-400 mt-0.5">•</span>
                    <span>Agents for: extraction, validation, scoring, routing, reporting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-400 mt-0.5">•</span>
                    <span>Real-time collaboration between automation agents</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-400 mt-0.5">•</span>
                    <span>BIL assisting staff across devices (desktop, mobile, web)</span>
                  </li>
                </ul>
              </div>

              {/* Our Real Prototype */}
              <div className="bg-white/5 rounded-lg p-5 border border-white/10">
                <h3 className="text-lg font-semibold mb-3 text-primary-400">Our Real Prototype</h3>
                <ul className="space-y-1.5 text-white/70 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-400 mt-0.5">•</span>
                    <span>Staff Dashboard</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-400 mt-0.5">•</span>
                    <span>Loan Processing Panel</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-400 mt-0.5">•</span>
                    <span>Scoring outputs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-400 mt-0.5">•</span>
                    <span>Audit logs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-400 mt-0.5">•</span>
                    <span>Agent-based staff chatbot for instant Q&A</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            className="text-center space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {/* Open Demo Button */}
            <div>
              <a
                href="https://iceberg.dilyor.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-10 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-primary-500/50 text-lg"
              >
                🧪 Try the Working Prototype →
              </a>
            </div>

            {/* Repositories */}
            <div className="pt-8 border-t border-white/10">
              <h3 className="text-lg font-semibold mb-5 text-white/90">🧩 Repositories</h3>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="https://github.com/dilyorm/bil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white/70 hover:text-white transition-all text-sm"
                >
                  BIL – Multi-Platform Agent →
                </a>
                <a
                  href="https://github.com/azxav/loan-processing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white/70 hover:text-white transition-all text-sm"
                >
                  Loan Processing Engine →
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Simple Footer */}
      <footer className="py-8 px-4 text-center text-white/40 text-sm border-t border-white/10 mt-16">
        <p>© {new Date().getFullYear()} Loan Automation Platform · Built for AI500! Agrobank Hackathon</p>
      </footer>
    </div>
  );
};

export default Demo;

