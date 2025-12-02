import React, { useEffect } from "react";
import "../../App.css";
import { Navigate } from "react-router-dom";
import { features, benefits, integrations } from "../../constants/data";
import { useAuth,SignInButton, SignUpButton } from '@clerk/clerk-react';

const Home: React.FC = () => {
  const { isSignedIn } = useAuth();

  const {getToken} = useAuth();
  
  useEffect(() => {
    const fetchToken = async () => {
    const token = await getToken({ template: "devpulse" });
      console.log("User token:", token);
    };

    if (isSignedIn) {
      fetchToken();
    }
  }, [isSignedIn, getToken]);

  if (isSignedIn) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <>
    <div className="min-h-screen bg-[#0a1628] text-[#e0e7ff] font-sans">
      {/* Header */}
      <header className="sticky top-0 z-20 bg-[#0a1628]/95 backdrop-blur border-b border-blue-500/10">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-2xl font-bold text-blue-400">
              <a href="/">DevPulse</a>
            </div>
            <div className="flex gap-3">
              <SignInButton mode="modal">
                <button className="px-4 py-2 md:px-6 md:py-2.5 rounded-lg border border-blue-500 text-blue-400 font-semibold text-sm md:text-base hover:bg-blue-600 hover:text-white transition transform hover:-translate-y-0.5">
                  Login
                </button>
              </SignInButton>
              <SignUpButton mode="modal">
                <button className="px-4 py-2 md:px-6 md:py-2.5 rounded-lg bg-blue-600 text-white font-semibold text-sm md:text-base hover:bg-blue-500 hover:shadow-xl hover:shadow-blue-500/40 transition transform hover:-translate-y-0.5">
                  Sign Up
                </button>
              </SignUpButton>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-linear-to-br from-[#0c1e3a] to-[#1e3a5f] py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight drop-shadow-lg">
            Your AI-Powered
            <br />
            <span className="text-blue-400">Developer Operations Assistant</span>
          </h1>
          <p className="mt-6 text-base md:text-xl text-blue-200 max-w-2xl mx-auto">
            Plan tasks, track progress, and generate intelligent reports
            automatically. DevPulse keeps your workflow transparent and
            productive with cutting-edge AI technology.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <SignUpButton mode="modal">
              <button className="px-8 py-3 md:px-10 md:py-4 rounded-lg bg-blue-600 text-white text-base md:text-lg font-semibold hover:bg-blue-500 hover:shadow-2xl hover:shadow-blue-500/50 transition">
                Get Started Free
              </button>
            </SignUpButton>
            <a
              href="#features"
              className="px-8 py-3 md:px-10 md:py-4 rounded-lg border-2 border-blue-500 text-blue-300 text-base md:text-lg font-semibold bg-transparent hover:bg-blue-500/10 transition"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="bg-[#0f1f38] py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful Features for Modern Development
            </h2>
            <p className="text-blue-200 max-w-2xl mx-auto text-sm md:text-lg">
              Everything you need to manage tasks, track time, and boost
              productivity—all powered by intelligent AI.
            </p>
          </div>

          <div className="grid gap-6 md:gap-8 md:grid-cols-2 xl:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="p-6 md:p-8 rounded-2xl border border-blue-500/30 bg-linear-to-br from-[#1e3a5f] to-[#0c1e3a] hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/30 hover:border-blue-400 transition"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-blue-300 mb-2">
                  {feature.title}
                </h3>
                <p className="text-blue-200 text-sm md:text-base leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-[#0a1628] py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Developers Love DevPulse
            </h2>
            <p className="text-blue-200 max-w-2xl mx-auto text-sm md:text-lg">
              Built by developers, for developers—with features that actually
              matter.
            </p>
          </div>

          <div className="grid gap-5 md:gap-6 md:grid-cols-2 xl:grid-cols-3">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="flex gap-4 p-4 md:p-5 rounded-xl border border-blue-500/20 bg-[#1e3a5f]/30 hover:bg-[#1e3a5f]/60 hover:border-blue-400/60 transition"
              >
                <div className="text-2xl md:text-3xl shrink-0">
                  {benefit.icon}
                </div>
                <div>
                  <h4 className="text-base md:text-lg font-semibold text-blue-300 mb-1">
                    {benefit.title}
                  </h4>
                  <p className="text-xs md:text-sm text-blue-200">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="bg-[#0f1f38] py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Integrates With Your Favorite Tools
            </h2>
            <p className="text-blue-200 max-w-xl mx-auto text-sm md:text-lg">
              Connect DevPulse with the platforms you already use every day.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {integrations.map((integration) => (
              <div
                key={integration.name}
                className="min-w-[140px] text-center px-6 py-6 rounded-xl border border-blue-500/40 bg-[#1e3a5f]/40 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/30 transition"
              >
                <div className="text-4xl mb-2">{integration.icon}</div>
                <div className="text-blue-200 font-semibold text-sm md:text-base">
                  {integration.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-linear-to-br from-[#1e3a5f] to-[#0c1e3a] py-20 md:py-24 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Workflow?
          </h2>
          <p className="text-blue-200 text-sm md:text-lg mb-8">
            Join thousands of developers and teams already using DevPulse to
            work smarter, not harder. Start your free trial today—no credit card
            required.
          </p>
          <SignUpButton mode="modal">
            <button className="inline-block px-8 py-3 md:px-10 md:py-4 rounded-lg bg-blue-600 text-white text-base md:text-lg font-semibold hover:bg-blue-500 hover:shadow-2xl hover:shadow-blue-500/50 transition">
              Start Your Free Trial
            </button>
          </SignUpButton>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a1628] border-t border-blue-500/20 py-6">
        <div className="max-w-6xl mx-auto px-4 text-center text-sm text-slate-400">
          &copy; {new Date().getFullYear()} DevPulse. All rights reserved. Built
          with ⚡ for developers.
        </div>
      </footer>
    </div>
    </>
  );
};

export default Home;