import Navbar from './Navbar';
import Hero from './Hero';
import ProblemSolution from './ProblemSolution';
import Solution from './Solution';
import HowItWorks from './HowItWorks';
import AIAssistantDemo from './AIAssistantDemo';
import Benefits from './Benefits';
import ExecutionPlan from './ExecutionPlan';
import Roadmap from './Roadmap';
import Team from './Team';
import WhyOurTeam from './WhyOurTeam';
import BusinessModel from './BusinessModel';
import CallToAction from './CallToAction';

function Home() {
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

export default Home;

