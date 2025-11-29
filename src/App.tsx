import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import Solution from './components/Solution';
import HowItWorks from './components/HowItWorks';
import AIAssistantDemo from './components/AIAssistantDemo';
import Benefits from './components/Benefits';
import ExecutionPlan from './components/ExecutionPlan';
import Roadmap from './components/Roadmap';
import Team from './components/Team';
import WhyOurTeam from './components/WhyOurTeam';
import BusinessModel from './components/BusinessModel';
import CallToAction from './components/CallToAction';

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      <main>
        <Hero />
        <ProblemSolution />
        <Solution />
        <HowItWorks />
        <AIAssistantDemo />
        <Benefits />
        <ExecutionPlan />
        <Roadmap />
        <Team />
        <WhyOurTeam />
        <BusinessModel />
        <CallToAction />
      </main>
      <footer className="py-8 px-4 text-center text-white/40 text-sm border-t border-white/10 bg-slate-900">
        <p>© {new Date().getFullYear()} Loan Automation Platform · Built for AI500! Agrobank Hackathon</p>
        <p className="mt-2 text-xs">
          <a href="#" className="hover:text-white transition-colors">GitHub</a> · 
          <a href="#" className="hover:text-white transition-colors ml-2">Technical Documentation</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
