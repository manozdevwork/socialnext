
import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';
import { Title, Subtitle } from '@/components/ui/typography';
import { Text } from '@/components/ui/text';
import OAuthSection from '@/components/auth/OAuthSection';

const SignUp = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50/30 via-white to-neutral-50/50 flex flex-col">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-10 p-6">
        <Link to={ROUTES.LANDING} className="inline-block transition-opacity hover:opacity-80">
          <img
            src="/sn-logo.png"
            alt="SocialNext"
            className="h-10 w-auto"
          />
        </Link>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-6 py-20">
        <div className="w-full text-center">
          {/* Headline */}
          <div className="mb-12 animate-fade-in">
            <Title size="lg" className="text-neutral-800 mb-6 font-medium tracking-tight leading-tight text-3xl md:text-4xl">
              Create Better LinkedIn Carousels.
              <br />
              <span className="text-primary">10x Faster.</span>
            </Title>
            <Subtitle size="lg" className="text-neutral-600 leading-relaxed font-normal text-xl">
              No setup required. Connect and start creating professional carousels instantly.
            </Subtitle>
          </div>

          {/* OAuth Section */}
          <div className="mb-12 flex justify-center animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <OAuthSection mode="signup" />
          </div>

          {/* Product Preview */}
          <div className="mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative mx-auto max-w-md">
              <div className="aspect-video bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl border border-primary-200/50 overflow-hidden shadow-sm">
                <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent"></div>
                <div className="p-6 h-full flex flex-col justify-center items-center">
                  {/* Enhanced carousel preview with smooth animation */}
                  <div className="flex gap-3 mb-4 relative overflow-hidden w-32">
                    <div className="flex gap-3 animate-slide-seamless">
                      <div className="w-10 h-8 bg-primary-400 rounded-lg shadow-sm flex-shrink-0"></div>
                      <div className="w-10 h-8 bg-primary-300 rounded-lg shadow-sm flex-shrink-0"></div>
                      <div className="w-10 h-8 bg-primary-200 rounded-lg shadow-sm flex-shrink-0"></div>
                      <div className="w-10 h-8 bg-primary-400 rounded-lg shadow-sm flex-shrink-0"></div>
                      <div className="w-10 h-8 bg-primary-300 rounded-lg shadow-sm flex-shrink-0"></div>
                    </div>
                  </div>
                  <Text variant="bodySmall" className="text-neutral-700 font-medium">
                    AI-powered carousel editor
                  </Text>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Signals */}
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Text variant="caption" className="mb-6 text-neutral-600 font-medium">
              Join 10,000+ professionals creating stunning content
            </Text>
            
            {/* Rating */}
            <div className="flex items-center justify-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-5 h-5 text-amber-400">⭐</div>
              ))}
              <Text variant="caption" className="ml-2 text-neutral-600 font-medium">
                4.9/5 from 2,000+ reviews
              </Text>
            </div>
          </div>

          {/* Footer Link */}
          <div className="mt-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Text variant="bodySmall" className="text-neutral-600 font-medium">
              Already have an account?{' '}
              <Link 
                to={ROUTES.SIGNIN} 
                className="text-primary underline underline-offset-4 hover:text-primary-700 transition-colors duration-300 font-medium"
              >
                Sign in here
              </Link>
            </Text>
          </div>
        </div>
      </div>

      {/* Subtle Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary-100/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-neutral-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
    </div>
  );
};

export default SignUp;
