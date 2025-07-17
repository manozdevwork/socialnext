
import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';
import { Title, Subtitle } from '@/components/ui/typography';
import { Text } from '@/components/ui/text';
import OAuthSection from '@/components/auth/OAuthSection';

const SignIn = () => {
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
              Welcome Back
            </Title>
            <Subtitle size="lg" className="text-neutral-600 leading-relaxed font-normal text-xl">
              Continue creating better LinkedIn Carousels.{' '}
              <span className="text-primary font-medium">10x faster.</span>
            </Subtitle>
          </div>

          {/* OAuth Section */}
          <div className="mb-12 flex justify-center animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <OAuthSection mode="signin" />
          </div>

          {/* Product Preview Placeholder */}
          <div className="mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative mx-auto max-w-md">
              <div className="aspect-video bg-gradient-to-br from-primary-50 to-primary-100/50 rounded-2xl border border-primary-200/50 overflow-hidden shadow-sm">
                <div className="absolute inset-0 bg-gradient-to-t from-white/30 to-transparent"></div>
                <div className="p-6 h-full flex flex-col justify-center items-center">
                  <div className="w-16 h-16 bg-primary-500 rounded-2xl mb-4 shadow-sm flex items-center justify-center">
                    <div className="w-8 h-8 bg-white rounded-lg opacity-90"></div>
                  </div>
                  <Text variant="bodySmall" className="text-neutral-700 font-medium">
                    Your dashboard awaits
                  </Text>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Signals */}
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Text variant="caption" className="mb-6 text-neutral-600 font-medium">
              Trusted by professionals from
            </Text>
            
            {/* Social Proof */}
            <div className="flex items-center justify-center gap-8 opacity-50">
              {['LinkedIn', 'Instagram', 'Tiktok', 'Meta'].map((company) => (
                <Text key={company} variant="caption" className="text-neutral-600 font-medium tracking-wide">
                  {company}
                </Text>
              ))}
            </div>
          </div>

          {/* Footer Link */}
          <div className="mt-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Text variant="bodySmall" className="text-neutral-600 font-medium">
              New to SocialNext?{' '}
              <Link 
                to={ROUTES.SIGNUP} 
                className="text-primary underline underline-offset-4 hover:text-primary-700 transition-colors duration-300 font-medium"
              >
                Create your account
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

export default SignIn;
