import React from 'react';
import { UserRole } from '../types';

interface LandingPageProps {
  onLogin: (role: UserRole) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onLogin }) => {
  return (
    <div className="bg-black text-gray-300 antialiased selection:bg-primary selection:text-black min-h-screen font-sans">
      <nav className="fixed w-full z-50 top-0 start-0 border-b border-white/5 bg-black/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-6 py-4">
          <a className="flex items-center space-x-2 group" href="#">
            <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary transition-colors duration-300 border border-primary/20 group-hover:border-primary">
              <span className="material-icons-round text-primary group-hover:text-black transition-colors">restaurant</span>
            </div>
            <span className="self-center text-xl font-bold whitespace-nowrap text-white tracking-tight group-hover:text-primary transition-colors">FoodRescue.ai</span>
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-4">
            <button
              onClick={() => onLogin(UserRole.ADMIN)}
              className="text-gray-300 hover:text-white bg-transparent hover:bg-white/5 border border-white/10 hover:border-white/20 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-all backdrop-blur-sm"
              type="button"
            >
              Admin Login
            </button>
            <button className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-400 rounded-lg md:hidden hover:bg-white/10" type="button">
              <span className="sr-only">Open main menu</span>
              <span className="material-icons-round">menu</span>
            </button>
          </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium md:space-x-8 md:flex-row md:mt-0 md:bg-transparent">
              <li>
                <a className="block py-2 px-3 text-gray-400 rounded hover:text-white md:p-0 transition-colors" href="#">How it works</a>
              </li>
              <li>
                <a className="block py-2 px-3 text-gray-400 rounded hover:text-white md:p-0 transition-colors" href="#">Impact Reports</a>
              </li>
              <li>
                <a className="block py-2 px-3 text-gray-400 rounded hover:text-white md:p-0 transition-colors" href="#">Partner with us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-black">
        <div className="absolute inset-0 w-full h-full -z-10 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: 'linear-gradient(rgba(16, 185, 129, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 185, 129, 0.3) 1px, transparent 1px)', backgroundSize: '60px 60px', maskImage: 'radial-gradient(circle at center, black 40%, transparent 80%)', WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 80%)' }}>
          </div>
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-blob"></div>
          <div className="absolute top-20 right-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full mix-blend-screen filter blur-[80px] opacity-20 animate-blob" style={{ animationDelay: '2s' }}></div>
          <div className="absolute -bottom-32 left-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full mix-blend-screen filter blur-[120px] opacity-30 animate-blob" style={{ animationDelay: '4s' }}></div>
          <div className="absolute top-1/2 left-10 w-64 h-64 bg-secondary-accent/5 rounded-full mix-blend-screen filter blur-[80px] opacity-10 animate-blob" style={{ animationDelay: '5s' }}></div>
          <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-highlight/80 backdrop-blur-md border border-white/10 text-primary text-xs font-bold uppercase tracking-wider mb-8 animate-fade-in-up shadow-glow-card">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Live in Bangalore & Mumbai
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight text-white animate-fade-in-up drop-shadow-lg" style={{ animationDelay: '0.1s' }}>
            Turn Surplus Food into <br className="hidden md:block" />
            <span className="text-gradient-primary relative">
              Social Impact.
              <span className="absolute -inset-1 bg-primary/20 blur-xl -z-10 rounded-full opacity-50"></span>
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 font-light leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            The hyperlocal logistics platform connecting restaurants with surplus food to nearby shelters and NGOs instantly.
            <span className="text-gray-200 font-medium">Zero waste. Zero hunger.</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <a
              href="#roles"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-black transition-all duration-300 bg-primary rounded-xl hover:bg-primary-hover hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] z-20"
            >
              Get Started
              <span className="material-icons-round ml-2 text-sm">arrow_forward</span>
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white transition-all duration-300 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/20 focus:outline-none backdrop-blur-sm z-20"
            >
              <span className="material-icons-round mr-2 text-primary">play_circle_filled</span>
              Watch Video
            </a>
          </div>
        </div>
      </section>

      <section className="py-24 bg-black relative" id="roles">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Restaurant Card */}
            <div className="group relative bg-surface rounded-2xl p-8 border border-white/5 hover:border-primary/50 transition-all duration-500 hover:-translate-y-1 overflow-hidden shadow-2xl hover:shadow-[0_0_30px_-10px_rgba(16,185,129,0.1)]">
              <div className="absolute -right-8 -top-8 opacity-[0.02] group-hover:opacity-[0.05] transform rotate-12 group-hover:scale-110 transition-all duration-500">
                <span className="material-icons-round text-9xl text-white">restaurant</span>
              </div>
              <div className="w-14 h-14 bg-surface-highlight border border-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-300">
                <span className="material-icons-round text-3xl text-primary">storefront</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-primary transition-colors">Restaurants</h3>
              <p className="text-gray-400 mb-8 leading-relaxed h-24">
                For Restaurants, Hotels, Caterers, and Supermarkets wanting to reduce waste and gain tax benefits.
              </p>
              <button
                onClick={() => onLogin(UserRole.DONOR)}
                className="inline-flex items-center text-sm font-bold text-white bg-white/5 border border-white/5 px-4 py-3 rounded-lg group-hover:bg-primary group-hover:text-black group-hover:border-primary transition-all w-full justify-center"
              >
                Donate Now
                <span className="material-icons-round ml-2 text-sm">arrow_forward</span>
              </button>
            </div>

            {/* NGO Card */}
            <div className="group relative bg-surface rounded-2xl p-8 border border-white/5 hover:border-secondary-accent/50 transition-all duration-500 hover:-translate-y-1 overflow-hidden shadow-2xl hover:shadow-[0_0_30px_-10px_rgba(234,179,8,0.1)]">
              <div className="absolute -right-8 -top-8 opacity-[0.02] group-hover:opacity-[0.05] transform rotate-12 group-hover:scale-110 transition-all duration-500">
                <span className="material-icons-round text-9xl text-white">favorite</span>
              </div>
              <div className="w-14 h-14 bg-surface-highlight border border-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:border-secondary-accent/50 group-hover:bg-secondary-accent/10 transition-all duration-300">
                <span className="material-icons-round text-3xl text-secondary-accent">volunteer_activism</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-secondary-accent transition-colors">NGOs</h3>
              <p className="text-gray-400 mb-8 leading-relaxed h-24">
                For NGOs, Shelters, Orphanages, and Community Fridges to claim fresh, safe meals instantly.
              </p>
              <button
                onClick={() => onLogin(UserRole.RECIPIENT)}
                className="inline-flex items-center text-sm font-bold text-white bg-white/5 border border-white/5 px-4 py-3 rounded-lg group-hover:bg-secondary-accent group-hover:text-black group-hover:border-secondary-accent transition-all w-full justify-center"
              >
                Find Food
                <span className="material-icons-round ml-2 text-sm">arrow_forward</span>
              </button>
            </div>

            {/* Volunteer Card */}
            <div className="group relative bg-surface rounded-2xl p-8 border border-white/5 hover:border-tertiary-accent/50 transition-all duration-500 hover:-translate-y-1 overflow-hidden shadow-2xl hover:shadow-[0_0_30px_-10px_rgba(59,130,246,0.1)]">
              <div className="absolute -right-8 -top-8 opacity-[0.02] group-hover:opacity-[0.05] transform rotate-12 group-hover:scale-110 transition-all duration-500">
                <span className="material-icons-round text-9xl text-white">pedal_bike</span>
              </div>
              <div className="w-14 h-14 bg-surface-highlight border border-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:border-tertiary-accent/50 group-hover:bg-tertiary-accent/10 transition-all duration-300">
                <span className="material-icons-round text-3xl text-tertiary-accent">directions_bike</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-tertiary-accent transition-colors">Volunteers</h3>
              <p className="text-gray-400 mb-8 leading-relaxed h-24">
                For Volunteers and Gig-economy drivers to facilitate transport and earn impact points.
              </p>
              <button
                onClick={() => onLogin(UserRole.RESCUER)}
                className="inline-flex items-center text-sm font-bold text-white bg-white/5 border border-white/5 px-4 py-3 rounded-lg group-hover:bg-tertiary-accent group-hover:text-white group-hover:border-tertiary-accent transition-all w-full justify-center"
              >
                Start Rescuing
                <span className="material-icons-round ml-2 text-sm">arrow_forward</span>
              </button>
            </div>

          </div>
        </div>
      </section>

      <section className="py-12 border-y border-white/5 bg-surface-highlight">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 hover:opacity-100 transition-opacity duration-300">
            <div className="flex items-center space-x-3 group cursor-default">
              <span className="material-icons-round text-gray-500 group-hover:text-primary transition-colors text-2xl">verified_user</span>
              <span className="font-bold text-sm tracking-widest text-gray-500 group-hover:text-gray-200 transition-colors uppercase">Safety First</span>
            </div>
            <div className="hidden md:block w-px h-8 bg-white/10"></div>
            <div className="flex items-center space-x-3 group cursor-default">
              <span className="material-icons-round text-gray-500 group-hover:text-primary transition-colors text-2xl">timeline</span>
              <span className="font-bold text-sm tracking-widest text-gray-500 group-hover:text-gray-200 transition-colors uppercase">Real-Time Tracking</span>
            </div>
            <div className="hidden md:block w-px h-8 bg-white/10"></div>
            <div className="flex items-center space-x-3 group cursor-default">
              <span className="material-icons-round text-gray-500 group-hover:text-primary transition-colors text-2xl">policy</span>
              <span className="font-bold text-sm tracking-widest text-gray-500 group-hover:text-gray-200 transition-colors uppercase">FSSAI Compliant</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden bg-black">
        <div className="absolute inset-0 bg-primary/[0.02]"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6 rounded-2xl hover:bg-white/5 transition-colors duration-300">
              <p className="text-4xl font-bold text-white mb-2">150k+</p>
              <p className="text-primary font-medium text-sm uppercase tracking-wider">Meals Rescued</p>
            </div>
            <div className="p-6 rounded-2xl hover:bg-white/5 transition-colors duration-300">
              <p className="text-4xl font-bold text-white mb-2">350+</p>
              <p className="text-primary font-medium text-sm uppercase tracking-wider">Partner NGOs</p>
            </div>
            <div className="p-6 rounded-2xl hover:bg-white/5 transition-colors duration-300">
              <p className="text-4xl font-bold text-white mb-2">80 tons</p>
              <p className="text-primary font-medium text-sm uppercase tracking-wider">CO2 Saved</p>
            </div>
            <div className="p-6 rounded-2xl hover:bg-white/5 transition-colors duration-300">
              <p className="text-4xl font-bold text-white mb-2">24/7</p>
              <p className="text-primary font-medium text-sm uppercase tracking-wider">Operations</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
              <span className="material-icons-round text-black text-sm">restaurant</span>
            </div>
            <span className="text-lg font-bold text-white">FoodRescue.ai</span>
          </div>
          <p className="text-gray-600 text-sm text-center">
            © 2024 FoodRescue.ai. Built for social good.
          </p>
          <div className="flex space-x-6">
            <a className="text-gray-500 hover:text-primary transition-colors" href="#">
              <span className="sr-only">Twitter</span>
              <svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
            </a>
            <a className="text-gray-500 hover:text-primary transition-colors" href="#">
              <span className="sr-only">LinkedIn</span>
              <svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path clip-rule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" fill-rule="evenodd"></path></svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;