
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';
import { ROUTES } from '@/constants/routes';
import { Title, Subtitle } from '@/components/ui/typography';

const LandingFooter: React.FC = () => {
  return (
    <footer className="bg-white text-neutral-800 pt-24 pb-12 border-t border-neutral-100">
      <div className="container mx-auto px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="col-span-1">
            <Link to={ROUTES.LANDING} className="inline-block mb-8">
              <img src="/sn-logo.png" alt="SocialNext" className="h-8 w-auto opacity-90" />
            </Link>
            <Subtitle tone="muted" className="mb-8 max-w-xs leading-relaxed font-light text-neutral-500">
              The AI-powered platform that transforms professionals into confident LinkedIn content creators. Never publish boring posts again! 🚀
            </Subtitle>
            
            {/* Social icons */}
            <div className="flex space-x-4">
              <a href="#" className="bg-neutral-50 hover:bg-primary-50 hover:text-primary-600 text-neutral-500 rounded-2xl p-3 transition-all duration-500" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="#" className="bg-neutral-50 hover:bg-primary-50 hover:text-primary-600 text-neutral-500 rounded-2xl p-3 transition-all duration-500" aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a href="#" className="bg-neutral-50 hover:bg-primary-50 hover:text-primary-600 text-neutral-500 rounded-2xl p-3 transition-all duration-500" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#" className="bg-neutral-50 hover:bg-primary-50 hover:text-primary-600 text-neutral-500 rounded-2xl p-3 transition-all duration-500" aria-label="Facebook">
                <Facebook size={18} />
              </a>
            </div>
          </div>
          
          {/* Platform */}
          <div>
            <Title size="sm" className="mb-6 font-semibold text-neutral-800">Platform 🔥</Title>
            <ul className="space-y-4">
              <li><Link to={ROUTES.DASHBOARD} className="text-neutral-500 hover:text-primary-600 transition-colors duration-500 font-light">Dashboard</Link></li>
              <li><a href="#create" className="text-neutral-500 hover:text-primary-600 transition-colors duration-500 font-light">Create Carousel</a></li>
              <li><a href="#activity" className="text-neutral-500 hover:text-primary-600 transition-colors duration-500 font-light">My Activity</a></li>
              <li><a href="#profile" className="text-neutral-500 hover:text-primary-600 transition-colors duration-500 font-light">Profile</a></li>
              <li><a href="#results" className="text-neutral-500 hover:text-primary-600 transition-colors duration-500 font-light">Results</a></li>
            </ul>
          </div>
          
          {/* Use Cases */}
          <div>
            <Title size="sm" className="mb-6 font-semibold text-neutral-800">Use Cases 🏆</Title>
            <ul className="space-y-4">
              <li><span className="text-neutral-500 font-light">💰 Sales Professionals</span><br/><span className="text-xs text-neutral-400">Close more deals</span></li>
              <li><span className="text-neutral-500 font-light">🎯 Job Seekers</span><br/><span className="text-xs text-neutral-400">Land dream roles</span></li>
              <li><span className="text-neutral-500 font-light">🚀 Entrepreneurs</span><br/><span className="text-xs text-neutral-400">Build your brand</span></li>
              <li><span className="text-neutral-500 font-light">👥 Team Leaders</span><br/><span className="text-xs text-neutral-400">Lead with confidence</span></li>
              <li><span className="text-neutral-500 font-light">📊 Consultants</span><br/><span className="text-xs text-neutral-400">Impress stakeholders</span></li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <Title size="sm" className="mb-6 font-semibold text-neutral-800">Support 🛠️</Title>
            <ul className="space-y-4">
              <li><a href="#help" className="text-neutral-500 hover:text-primary-600 transition-colors duration-500 font-light">Help Center</a><br/><span className="text-xs text-neutral-400">Get answers fast</span></li>
              <li><a href="#contact" className="text-neutral-500 hover:text-primary-600 transition-colors duration-500 font-light text-red-500">🔴 Contact Support</a><br/><span className="text-xs text-neutral-400">We're here to help</span></li>
              <li><a href="#privacy" className="text-neutral-500 hover:text-primary-600 transition-colors duration-500 font-light">Privacy Policy</a><br/><span className="text-xs text-neutral-400">Your data is safe</span></li>
              <li><a href="#terms" className="text-neutral-500 hover:text-primary-600 transition-colors duration-500 font-light">Terms of Service</a><br/><span className="text-xs text-neutral-400">Legal stuff</span></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom section with social proof */}
        <div className="border-t border-neutral-100 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <Subtitle tone="muted" className="text-neutral-400 font-light">
              © 2024 SocialNext. All rights reserved.
            </Subtitle>
            <div className="flex space-x-8 mt-4 md:mt-0">
              <a href="#privacy" className="text-neutral-400 hover:text-primary-600 transition-colors duration-500 text-sm font-light">Privacy</a>
              <a href="#terms" className="text-neutral-400 hover:text-primary-600 transition-colors duration-500 text-sm font-light">Terms</a>
              <a href="#cookies" className="text-neutral-400 hover:text-primary-600 transition-colors duration-500 text-sm font-light">Cookies</a>
            </div>
          </div>
          
          {/* Trust section inspired by warmup.me */}
          <div className="text-center">
            <p className="text-primary-600 font-medium text-sm mb-4">
              ⭐ Trusted by 12,847+ professionals
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-40">
              <span className="text-neutral-400 text-sm font-medium tracking-wider">GOOGLE</span>
              <span className="text-neutral-400 text-sm font-medium tracking-wider">MICROSOFT</span>
              <span className="text-neutral-400 text-sm font-medium tracking-wider">APPLE</span>
              <span className="text-neutral-400 text-sm font-medium tracking-wider">STRIPE</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default LandingFooter;
