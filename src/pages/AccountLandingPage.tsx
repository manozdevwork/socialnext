
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { ArrowRight, UserCog, Shield, CreditCard, LinkedinIcon, Settings } from 'lucide-react';
import { PageTitle } from '@/components/ui/page-title';
import { ScrollArea } from '@/components/ui/scroll-area';

const AccountLandingPage = () => {
  const navigate = useNavigate();

  const accountSections = [
    {
      title: "Personal Information",
      description: "Manage your personal details and contact information",
      icon: <UserCog className="h-8 w-8 text-sky-500" />,
      path: ROUTES.ACCOUNT_PERSONAL
    },
    {
      title: "Preferences",
      description: "Customize your app experience and notification settings",
      icon: <Settings className="h-8 w-8 text-sky-500" />,
      path: '/account/preference'
    },
    {
      title: "LinkedIn Integration",
      description: "Connect and manage your LinkedIn account",
      icon: <LinkedinIcon className="h-8 w-8 text-sky-500" />,
      path: '/account/linkedin'
    },
    {
      title: "Billing & Subscription",
      description: "Manage your subscription plan and payment methods",
      icon: <CreditCard className="h-8 w-8 text-sky-500" />,
      path: ROUTES.ACCOUNT_BILLING
    },
    {
      title: "Change Password",
      description: "Update your password and security settings",
      icon: <Shield className="h-8 w-8 text-sky-500" />,
      path: '/account/password'
    },
  ];

  return (
    <div className="h-full flex flex-col">
      <PageTitle
        title="Account Settings"
        subtitle="Manage your account settings and preferences"
      />
      
      <ScrollArea className="mt-6 flex-1 -mx-4 sm:mx-0 px-4 sm:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {accountSections.map((section, index) => (
            <Card 
              key={index} 
              className="transition-all hover:shadow-md cursor-pointer"
              onClick={() => navigate(section.path)}
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-full bg-sky-50">{section.icon}</div>
                  <ArrowRight className="h-5 w-5 text-gray-400" />
                </div>
                <CardTitle className="mt-4">{section.title}</CardTitle>
                <CardDescription>{section.description}</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <Button 
                  variant="link" 
                  className="px-0 text-sky-500 hover:text-sky-600"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(section.path);
                  }}
                >
                  Manage Settings
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default AccountLandingPage;
