
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check } from 'lucide-react';

interface PlanFeature {
  text: string;
}

interface PlanProps {
  title: string;
  price: string;
  period: string;
  features: PlanFeature[];
  popular?: boolean;
  buttonText: string;
  buttonVariant?: "default" | "outline";
}

const PlanCard: React.FC<PlanProps> = ({
  title,
  price,
  period,
  features,
  popular = false,
  buttonText,
  buttonVariant = "default"
}) => {
  return (
    <Card className={`flex flex-col h-full ${popular ? 'border-sky-400' : ''}`}>
      {popular && (
        <div className="bg-sky-400 text-white py-1 px-4 text-center">
          <div className="flex justify-center items-center">
            <span className="text-xl">✦</span>
            <span className="font-medium mx-2">Most Popular</span>
            <span className="text-xl">✦</span>
          </div>
          <div className="text-xs mt-1">Save 20% on Yearly Plans</div>
        </div>
      )}
      
      <CardContent className={`flex flex-col h-full p-6 ${popular ? 'pt-4' : ''}`}>
        <h3 className="text-xl font-semibold text-center mb-4">{title}</h3>
        
        <div className="text-center mb-6">
          <span className="text-4xl font-bold">{price}</span>
          <span className="text-gray-500 ml-1">{period}</span>
        </div>
        
        <div className="space-y-3 flex-grow">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start">
              <div className="flex-shrink-0 h-5 w-5 text-sky-400">
                <Check size={20} className="stroke-sky-400" />
              </div>
              <p className="ml-3 text-sm text-gray-600">{feature.text}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-6 pt-6">
          <Button 
            className={`w-full ${popular ? 'bg-sky-400 hover:bg-sky-500' : ''}`} 
            variant={buttonVariant}
          >
            {buttonText}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

interface PricingPlanProps {
  className?: string;
}

const PricingPlan: React.FC<PricingPlanProps> = ({ className }) => {
  const [billingPeriod, setBillingPeriod] = React.useState<'yearly' | 'monthly'>('yearly');

  return (
    <div className={`w-full ${className}`}>
      <div className="space-y-6">
        <div className="flex flex-col space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Billing and Subscription Plans</h2>
          <p className="text-gray-500">Please complete the following steps to complete your profile</p>
        </div>
        
        {/* Billing Toggle */}
        <div className="flex justify-center">
          <div className="inline-flex rounded-md overflow-hidden border">
            <button
              className={`px-8 py-3 text-sm font-medium ${
                billingPeriod === 'yearly' 
                  ? 'bg-sky-400 text-white' 
                  : 'bg-white text-gray-800'
              }`}
              onClick={() => setBillingPeriod('yearly')}
            >
              Yearly Billing
            </button>
            <button
              className={`px-8 py-3 text-sm font-medium ${
                billingPeriod === 'monthly' 
                  ? 'bg-sky-400 text-white' 
                  : 'bg-white text-gray-800'
              }`}
              onClick={() => setBillingPeriod('monthly')}
            >
              Monthly Billing
            </button>
          </div>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {/* Current Plan */}
          <PlanCard
            title="Current Plan"
            price="$0"
            period="/month"
            features={[
              { text: "Consequat ex proident" },
              { text: "Deserunt sit cupidatat" },
              { text: "Amet id ea et nisi cillum" },
            ]}
            buttonText="Upgrade Plan"
            buttonVariant="outline"
          />
          
          {/* Premium Plan */}
          <PlanCard
            title="Premium"
            price="$9.99"
            period="/month"
            features={[
              { text: "Consequat ex proident" },
              { text: "Deserunt sit cupidatat adipisicing" },
              { text: "Amet id ea et nisi cillum consectetur" },
              { text: "Excepteur nisi eiusmod proident" },
              { text: "Magna eu anim commodo qui nisif" },
            ]}
            popular={true}
            buttonText="Upgrade Plane"
          />
          
          {/* Business Plan */}
          <PlanCard
            title="Business"
            price="$29.99"
            period="/month"
            features={[
              { text: "Consequat ex proident" },
              { text: "Deserunt sit cupidatat" },
              { text: "Amet id ea et nisi cillum" },
            ]}
            buttonText="Upgrade Plan"
            buttonVariant="outline"
          />
        </div>
      </div>
    </div>
  );
};

export default PricingPlan;
