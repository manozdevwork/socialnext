
import React from 'react';
import { Check, Sparkles, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';
import { Button } from '@/components/ui/enhanced-button';
import { Title, Subtitle } from '@/components/ui/typography';
import { Card, CardContent } from '@/components/ui/card';

interface PlanFeature {
  text: string;
  included?: boolean;
  dimmed?: boolean;
}

interface PlanProps {
  title: string;
  price: string;
  period: string;
  features: PlanFeature[];
  popular?: boolean;
  buttonText: string;
  buttonVariant?: "primary" | "outlined";
}

const PlanCard: React.FC<PlanProps> = ({
  title,
  price,
  period,
  features,
  popular = false,
  buttonText,
  buttonVariant = "primary"
}) => {
  return (
    <Card className={`relative flex flex-col h-full transition-all duration-500 hover:shadow-xl hover:-translate-y-1 ${
      popular 
        ? 'border-2 border-primary-300 bg-gradient-to-b from-primary-50/80 to-white shadow-lg ring-1 ring-primary-200/50' 
        : 'border border-neutral-200/60 bg-white hover:border-primary-200/80 shadow-sm'
    }`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-2 rounded-full shadow-lg">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4" />
              <span className="font-semibold text-sm tracking-wide">Most Popular</span>
            </div>
          </div>
        </div>
      )}
      
      <CardContent className={`flex flex-col h-full p-8 ${popular ? 'pt-12' : 'pt-8'}`}>
        {/* Header */}
        <div className="text-center mb-8">
          <Title size="md" className="text-neutral-800 mb-4 font-semibold tracking-tight">
            {title}
          </Title>
          
          <div className="mb-6">
            <div className="flex items-baseline justify-center gap-1">
              <span className="text-5xl font-bold text-neutral-900 tracking-tight">{price}</span>
              <span className="text-neutral-600 text-lg font-medium">{period}</span>
            </div>
          </div>
        </div>
        
        {/* Features */}
        <div className="space-y-4 flex-grow mb-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`flex items-start transition-opacity duration-300 ${
                feature.dimmed ? 'opacity-40' : 'opacity-100'
              }`}
            >
              <div className="flex-shrink-0 h-6 w-6 mr-4 mt-0.5">
                {feature.included !== false ? (
                  <div className={`h-5 w-5 rounded-full flex items-center justify-center ${
                    feature.dimmed 
                      ? 'bg-neutral-200' 
                      : 'bg-primary-100'
                  }`}>
                    <Check className={`h-3 w-3 stroke-[3] ${
                      feature.dimmed 
                        ? 'text-neutral-400' 
                        : 'text-primary-600'
                    }`} />
                  </div>
                ) : (
                  <div className="h-5 w-5 rounded-full bg-neutral-100 flex items-center justify-center">
                    <X className="h-3 w-3 text-neutral-400 stroke-[3]" />
                  </div>
                )}
              </div>
              <Subtitle className={`leading-relaxed ${
                feature.dimmed 
                  ? 'text-neutral-500' 
                  : feature.included !== false 
                    ? 'text-neutral-700' 
                    : 'text-neutral-500'
              }`}>
                {feature.text}
              </Subtitle>
            </div>
          ))}
        </div>
        
        {/* CTA Button */}
        <div className="pt-4">
          <Button 
            asChild
            variant={buttonVariant}
            size="lg"
            className={`w-full h-14 rounded-xl font-semibold text-base transition-all duration-300 ${
              popular 
                ? 'bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white shadow-lg hover:shadow-xl border-0' 
                : 'border-2 border-neutral-300/80 text-neutral-800 hover:border-primary-400 hover:bg-primary-50/50 bg-white shadow-sm hover:shadow-md'
            }`}
          >
            <Link to={ROUTES.SIGNUP}>
              {buttonText}
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

const LandingPricing: React.FC = () => {
  const [billingPeriod, setBillingPeriod] = React.useState<'yearly' | 'monthly'>('yearly');

  const plans = [
    {
      title: "Current Plan",
      price: "$0",
      period: "/month",
      features: [
        { text: "5 carousels per month", included: true },
        { text: "Core AI templates", included: true },
        { text: "Standard export formats", included: true },
        { text: "Community support", included: true },
        { text: "Advanced AI templates", included: false, dimmed: true },
        { text: "Analytics dashboard", included: false, dimmed: true },
        { text: "Priority support", included: false, dimmed: true },
      ],
      buttonText: "Start Free",
      buttonVariant: "outlined" as const,
    },
    {
      title: "Premium",
      price: billingPeriod === 'yearly' ? "$7.99" : "$9.99",
      period: "/month",
      features: [
        { text: "Unlimited carousels", included: true },
        { text: "Advanced AI templates", included: true },
        { text: "All export formats", included: true },
        { text: "Priority support", included: true },
        { text: "Analytics dashboard", included: true },
        { text: "Custom branding", included: true },
        { text: "Team collaboration", included: true },
      ],
      popular: true,
      buttonText: "Start Free Trial",
      buttonVariant: "primary" as const,
    },
    {
      title: "Business",
      price: billingPeriod === 'yearly' ? "$23.99" : "$29.99",
      period: "/month",
      features: [
        { text: "Everything in Premium", included: true },
        { text: "White-label solution", included: true },
        { text: "API access", included: true },
        { text: "Custom integrations", included: true },
        { text: "Dedicated account manager", included: true },
        { text: "Advanced analytics", included: true },
        { text: "Enterprise security", included: true },
      ],
      buttonText: "Contact Sales",
      buttonVariant: "outlined" as const,
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-white via-neutral-50/30 to-white relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary-100/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-neutral-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary-50/80 text-primary px-5 py-2.5 rounded-full text-sm font-medium mb-8 border border-primary-200/50 shadow-sm">
            <Sparkles className="h-4 w-4" />
            Simple, Transparent Pricing
          </div>
          
          <Title size="lg" className="text-neutral-900 mb-6 font-bold tracking-tight">
            Choose the plan that fits your creative workflow
          </Title>
          
          <Subtitle size="lg" className="text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            Start free and scale as you grow. All plans include our core AI features with no hidden fees.
          </Subtitle>
        </div>
        
        {/* Billing Toggle */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex rounded-xl overflow-hidden border border-neutral-200 bg-white shadow-sm">
            <button
              className={`px-8 py-4 text-sm font-semibold transition-all duration-300 relative ${
                billingPeriod === 'yearly' 
                  ? 'bg-primary-500 text-white shadow-sm' 
                  : 'bg-white text-neutral-700 hover:bg-neutral-50'
              }`}
              onClick={() => setBillingPeriod('yearly')}
            >
              Yearly Billing
              {billingPeriod === 'yearly' && (
                <span className="ml-2 bg-white/20 px-2 py-1 rounded-md text-xs font-medium">Save 20%</span>
              )}
            </button>
            <button
              className={`px-8 py-4 text-sm font-semibold transition-all duration-300 ${
                billingPeriod === 'monthly' 
                  ? 'bg-primary-500 text-white shadow-sm' 
                  : 'bg-white text-neutral-700 hover:bg-neutral-50'
              }`}
              onClick={() => setBillingPeriod('monthly')}
            >
              Monthly Billing
            </button>
          </div>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <PlanCard {...plan} />
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="text-center space-y-4">
          <Subtitle className="text-neutral-600 font-medium">
            All plans include a 14-day free trial • No credit card required
          </Subtitle>
          <Subtitle className="text-neutral-500 text-sm">
            Questions about pricing?{' '}
            <a 
              href="#contact" 
              className="text-primary  hover:text-primary-700 font-medium transition-colors duration-300 underline underline-offset-4 decoration-primary-300 hover:decoration-primary-500"
            >
              Contact our team
            </a>
          </Subtitle>
        </div>
      </div>
    </section>
  );
};

export default LandingPricing;
