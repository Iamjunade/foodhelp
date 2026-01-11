import React from 'react';
import { UserRole } from '../types';

interface LandingPageProps {
  onLogin: (role: UserRole) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onLogin }) => {
  return (
    <div className="bg-black text-gray-300 antialiased selection:bg-primary selection:text-black overflow-x-hidden min-h-screen font-sans">
      <nav className="fixed w-full z-50 top-0 start-0 glass-nav transition-all duration-300">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-6 py-4">
          <a className="flex items-center space-x-3 group" href="#">
            <img src="/Gemini_Generated_Image_j3gzcyj3gzcyj3gz.png" alt="FoodRescue Logo" className="w-12 h-auto object-contain group-hover:scale-110 transition-transform duration-300" />
            <span className="self-center text-xl font-bold whitespace-nowrap text-white tracking-tight">FoodRescue<span className="text-primary">.ai</span></span>
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-4">
            <button className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-400 rounded-lg md:hidden hover:bg-white/10" type="button">
              <span className="sr-only">Open main menu</span>
              <span className="material-icons-round">menu</span>
            </button>
          </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium text-sm md:space-x-8 md:flex-row md:mt-0 md:bg-transparent">
              <li><a className="block py-2 px-3 text-gray-400 rounded hover:text-primary md:p-0 transition-colors duration-300" href="#">How it works</a></li>
              <li><a className="block py-2 px-3 text-gray-400 rounded hover:text-primary md:p-0 transition-colors duration-300" href="#">Impact Reports</a></li>
              <li><a className="block py-2 px-3 text-gray-400 rounded hover:text-primary md:p-0 transition-colors duration-300" href="#">Partner with us</a></li>
            </ul>
          </div>
        </div>
      </nav>

      <section className="relative pt-40 pb-32 lg:pt-56 lg:pb-48 overflow-hidden bg-black flex items-center justify-center min-h-[90vh]">
        <div className="absolute inset-0 w-full h-full -z-10 pointer-events-none">
          <div className="absolute inset-0 bg-grid-pattern bg-[length:40px_40px] opacity-[0.03] animate-grid-move"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
          <div className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[80vw] h-[50vh] bg-primary/10 rounded-full blur-[120px] animate-aurora mix-blend-screen"></div>
          <div className="absolute top-[20%] -left-[10%] w-[40vw] h-[40vh] bg-secondary-accent/5 rounded-full blur-[100px] animate-blob mix-blend-screen" style={{ animationDelay: '-5s' }}></div>
          <div className="absolute top-[30%] -right-[10%] w-[35vw] h-[35vh] bg-tertiary-accent/5 rounded-full blur-[100px] animate-blob mix-blend-screen" style={{ animationDelay: '-2s' }}></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10 flex flex-col items-center">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-surface/50 border border-white/10 backdrop-blur-md mb-10 animate-fade-in-up hover:border-primary/30 transition-colors duration-300 cursor-default">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-xs font-semibold uppercase tracking-widest text-gray-300">Live in Bangalore & Mumbai</span>
          </div>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 leading-[1.1] text-white animate-fade-in-up drop-shadow-2xl" style={{ animationDelay: '0.1s' }}>
            Turn Surplus Food into <br className="hidden md:block" />
            <span className="text-gradient-primary relative inline-block">
              Social Impact.
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary opacity-40" fill="none" viewBox="0 0 200 9" xmlns="http://www.w3.org/2000/svg"><path d="M2.00025 6.99997C25.8087 3.32185 106.337 -3.10702 197.994 3.49997" stroke="currentColor" strokeWidth="3"></path></svg>
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed animate-fade-in-up tracking-wide" style={{ animationDelay: '0.2s' }}>
            The hyperlocal logistics platform connecting restaurants with surplus food to nearby shelters instantly.
            <span className="text-white font-medium block mt-2">Zero waste. Zero hunger.</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center animate-fade-in-up w-full sm:w-auto" style={{ animationDelay: '0.3s' }}>
            <a
              href="#roles"
              className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-black transition-all duration-300 bg-primary rounded-full hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_40px_rgba(16,185,129,0.4)] overflow-hidden w-full sm:w-auto"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
              <span className="relative">Get Started</span>
              <span className="material-icons-round ml-2 text-lg relative transition-transform group-hover:translate-x-1">arrow_forward</span>
            </a>

          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-50">
          <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500">Scroll</span>
          <span className="material-icons-round text-gray-500">keyboard_arrow_down</span>
        </div>
      </section>

      <section className="py-12 border-y border-white/5 bg-surface-highlight/30 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-y-8 gap-x-12 md:gap-24 opacity-80 hover:opacity-100 transition-opacity duration-300">
            <div className="flex items-center space-x-4 group cursor-default">
              <div className="p-2 rounded-lg bg-white/5 group-hover:bg-primary/10 transition-colors">
                <span className="material-icons-round text-gray-400 group-hover:text-primary transition-colors text-xl">verified_user</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-sm tracking-wider text-white uppercase">Safety First</span>
                <span className="text-xs text-gray-500">Quality Assured</span>
              </div>
            </div>
            <div className="hidden md:block w-px h-12 bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
            <div className="flex items-center space-x-4 group cursor-default">
              <div className="p-2 rounded-lg bg-white/5 group-hover:bg-primary/10 transition-colors">
                <span className="material-icons-round text-gray-400 group-hover:text-primary transition-colors text-xl">timeline</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-sm tracking-wider text-white uppercase">Real-Time</span>
                <span className="text-xs text-gray-500">Live Tracking</span>
              </div>
            </div>
            <div className="hidden md:block w-px h-12 bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
            <div className="flex items-center space-x-4 group cursor-default">
              <div className="p-2 rounded-lg bg-white/5 group-hover:bg-primary/10 transition-colors">
                <span className="material-icons-round text-gray-400 group-hover:text-primary transition-colors text-xl">policy</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-sm tracking-wider text-white uppercase">Compliant</span>
                <span className="text-xs text-gray-500">FSSAI Certified</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-black relative" id="roles">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Who are you?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">Join the ecosystem. Select your role to get started with FoodRescue.ai today.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Restaurant Card */}
            <div className="group relative glass-card rounded-3xl p-8 hover:border-primary/40 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -right-12 -top-12 w-40 h-40 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-surface border border-white/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:border-primary/50 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] transition-all duration-300">
                  <span className="material-icons-round text-4xl text-primary">storefront</span>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-primary transition-colors">Restaurants</h3>
                <p className="text-gray-400 mb-8 leading-relaxed text-sm h-16">
                  For Restaurants, Hotels, Caterers, and Supermarkets wanting to reduce waste and gain tax benefits.
                </p>
                <button
                  onClick={() => onLogin(UserRole.DONOR)}
                  className="inline-flex items-center justify-between w-full text-sm font-bold text-white bg-white/5 border border-white/5 px-6 py-4 rounded-xl group-hover:bg-primary group-hover:text-black group-hover:border-primary transition-all duration-300"
                >
                  <span>Donate Now</span>
                  <span className="material-icons-round text-lg transition-transform group-hover:translate-x-1">arrow_forward</span>
                </button>
              </div>
            </div>

            {/* NGO Card */}
            <div className="group relative glass-card rounded-3xl p-8 hover:border-secondary-accent/40 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-secondary-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -right-12 -top-12 w-40 h-40 bg-secondary-accent/10 rounded-full blur-3xl group-hover:bg-secondary-accent/20 transition-all duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-surface border border-white/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:border-secondary-accent/50 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.2)] transition-all duration-300">
                  <span className="material-icons-round text-4xl text-secondary-accent">volunteer_activism</span>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-secondary-accent transition-colors">NGOs</h3>
                <p className="text-gray-400 mb-8 leading-relaxed text-sm h-16">
                  For NGOs, Shelters, Orphanages, and Community Fridges to claim fresh, safe meals instantly.
                </p>
                <button
                  onClick={() => onLogin(UserRole.RECIPIENT)}
                  className="inline-flex items-center justify-between w-full text-sm font-bold text-white bg-white/5 border border-white/5 px-6 py-4 rounded-xl group-hover:bg-secondary-accent group-hover:text-black group-hover:border-secondary-accent transition-all duration-300"
                >
                  <span>Find Food</span>
                  <span className="material-icons-round text-lg transition-transform group-hover:translate-x-1">arrow_forward</span>
                </button>
              </div>
            </div>

            {/* Volunteer Card */}
            <div className="group relative glass-card rounded-3xl p-8 hover:border-tertiary-accent/40 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-tertiary-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -right-12 -top-12 w-40 h-40 bg-tertiary-accent/10 rounded-full blur-3xl group-hover:bg-tertiary-accent/20 transition-all duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-surface border border-white/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:border-tertiary-accent/50 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all duration-300">
                  <span className="material-icons-round text-4xl text-tertiary-accent">directions_bike</span>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-tertiary-accent transition-colors">Volunteers</h3>
                <p className="text-gray-400 mb-8 leading-relaxed text-sm h-16">
                  For Volunteers and Gig-economy drivers to facilitate transport and earn impact points.
                </p>
                <button
                  onClick={() => onLogin(UserRole.RESCUER)}
                  className="inline-flex items-center justify-between w-full text-sm font-bold text-white bg-white/5 border border-white/5 px-6 py-4 rounded-xl group-hover:bg-tertiary-accent group-hover:text-white group-hover:border-tertiary-accent transition-all duration-300"
                >
                  <span>Start Rescuing</span>
                  <span className="material-icons-round text-lg transition-transform group-hover:translate-x-1">arrow_forward</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>



      <footer className="bg-surface-highlight/30 py-16 border-t border-white/5 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
            <div className="flex items-center space-x-3">
              <img src="/Gemini_Generated_Image_j3gzcyj3gzcyj3gz.png" alt="FoodRescue Logo" className="w-10 h-auto object-contain" />
              <span className="text-2xl font-bold text-white">FoodRescue.ai</span>
            </div>
            <div className="flex space-x-8">
              <a className="text-gray-400 hover:text-white transition-colors" href="#">Terms</a>
              <a className="text-gray-400 hover:text-white transition-colors" href="#">Privacy</a>
              <a className="text-gray-400 hover:text-white transition-colors" href="#">Contact</a>
            </div>
          </div>
          <div className="h-px w-full bg-white/5 mb-8"></div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-600 text-sm">
              © 2024 FoodRescue.ai. Built for social good.
            </p>
            <div className="flex space-x-6">
              <a className="text-gray-500 hover:text-primary transition-colors hover:scale-110 transform" href="#">
                <span className="sr-only">Twitter</span>
                <svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
              </a>
              <a className="text-gray-500 hover:text-primary transition-colors hover:scale-110 transform" href="#">
                <span className="sr-only">LinkedIn</span>
                <svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path clip-rule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" fill-rule="evenodd"></path></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;