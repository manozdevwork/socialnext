import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import PasswordChange from '@/components/design-system/PasswordChange';
import PreferenceSelector from '@/components/design-system/PreferenceSelector';
import { ROUTES } from '@/constants/routes';
import { CardContent } from '@/components/ui/card';
import PageContentLayout from '@/components/layout/PageContentLayout';

interface AccountSettingsProps {
  initialTab?: string;
}

const AccountSettings: React.FC<AccountSettingsProps> = ({ initialTab }) => {
  const location = useLocation();
  const path = initialTab || location.pathname.split('/').pop() || 'personal';

  // If no specific tab is specified, redirect to personal information
  if (!initialTab) {
    return <Navigate to={ROUTES.ACCOUNT_PERSONAL} replace />;
  }

  // Render the appropriate content based on the initialTab prop
  switch(initialTab) {
    case 'personal':
      return (
        <PageContentLayout
          title="Personal Information"
          subtitle="Update your personal details"
          showBackButton={true}
          backRoute={ROUTES.ACCOUNT}
        >
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">First Name</label>
                <input 
                  type="text" 
                  className="w-full p-2 border rounded-md" 
                  defaultValue="James"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Last Name</label>
                <input 
                  type="text" 
                  className="w-full p-2 border rounded-md" 
                  defaultValue="Smith"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Email Address</label>
                <input 
                  type="email" 
                  className="w-full p-2 border rounded-md" 
                  defaultValue="james.smith@example.com"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Phone Number</label>
                <input 
                  type="tel" 
                  className="w-full p-2 border rounded-md" 
                  defaultValue="+1 (555) 123-4567"
                />
              </div>
            </div>
            <button className="bg-sky-400 hover:bg-sky-500 text-white px-4 py-2 rounded-md">
              Save Changes
            </button>
          </CardContent>
        </PageContentLayout>
      );
    
    case 'billing':
      return (
        <PageContentLayout
          title="Billing and Subscription"
          subtitle="Manage your subscription plan"
          showBackButton={true}
          backRoute={ROUTES.ACCOUNT}
        >
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <h3 className="font-medium">Current Plan</h3>
              <div className="bg-sky-50 border border-sky-100 rounded-lg p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-semibold text-lg">Premium Plan</h4>
                    <p className="text-gray-600">10,000 words per month</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-lg">$9.99/month</p>
                    <p className="text-sm text-gray-500">Renews on May 15, 2023</p>
                  </div>
                </div>
                
                <div className="mt-4">
                  <p className="text-sm font-medium mb-1">Usage this month</p>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-sky-400 h-2.5 rounded-full w-1/5"></div>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">2,000 of 10,000 words used (20%)</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <h3 className="font-medium">Available Plans</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="border rounded-lg p-4">
                  <h4 className="font-semibold">Basic</h4>
                  <p className="text-2xl font-bold mt-2">$4.99<span className="text-sm text-gray-500">/mo</span></p>
                  <p className="text-gray-600 mt-2">5,000 words per month</p>
                  <button className="mt-4 w-full border border-sky-400 text-sky-500 px-2 py-1.5 rounded-md hover:bg-sky-50">
                    Downgrade
                  </button>
                </div>
                
                <div className="border-2 border-sky-400 rounded-lg p-4 relative">
                  <div className="absolute top-0 right-0 bg-sky-400 text-white text-xs px-2 py-0.5 rounded-bl-lg">Current</div>
                  <h4 className="font-semibold">Premium</h4>
                  <p className="text-2xl font-bold mt-2">$9.99<span className="text-sm text-gray-500">/mo</span></p>
                  <p className="text-gray-600 mt-2">10,000 words per month</p>
                </div>
                
                <div className="border rounded-lg p-4">
                  <h4 className="font-semibold">Pro</h4>
                  <p className="text-2xl font-bold mt-2">$19.99<span className="text-sm text-gray-500">/mo</span></p>
                  <p className="text-gray-600 mt-2">25,000 words per month</p>
                  <button className="mt-4 w-full bg-sky-400 text-white px-2 py-1.5 rounded-md hover:bg-sky-500">
                    Upgrade
                  </button>
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <h3 className="font-medium">Payment Method</h3>
              <div className="flex items-center border rounded-md p-3">
                <div className="bg-gray-200 rounded p-2 mr-3">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
                    <path d="M3 10H21" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Visa ending in 4242</p>
                  <p className="text-sm text-gray-500">Expires 12/2025</p>
                </div>
                <button className="ml-auto text-sky-500 hover:text-sky-600">Edit</button>
              </div>
            </div>
          </CardContent>
        </PageContentLayout>
      );
    
    case 'preference':
      // The PreferenceSelector component should be modified to use the new layout
      return <PreferenceSelector description="Select categories that are relevant to your interests" />;
    
    case 'linkedin':
      return (
        <PageContentLayout
          title="LinkedIn Integration"
          subtitle="Connect your LinkedIn account"
          showBackButton={true}
          backRoute={ROUTES.ACCOUNT}
        >
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full overflow-hidden bg-gray-200 mr-4">
                  <img src="https://picsum.photos/id/1005/200/200" alt="James Smith" className="h-full w-full object-cover" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">James Smith</h3>
                  <p className="text-sm text-gray-600">SEO-Content Writer/Marketer | Business Manager</p>
                  <a href="#" className="text-sky-500 text-sm flex items-center mt-1">
                    Disconnect 
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="flex items-center text-green-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="ml-2 text-sm">Status: Connected</span>
              </div>
            </div>
          </CardContent>
        </PageContentLayout>
      );
    
    case 'password':
      return (
        <PageContentLayout
          title="Change Password"
          subtitle="Update your password"
          showBackButton={true}
          backRoute={ROUTES.ACCOUNT}
        >
          <CardContent>
            <PasswordChange />
          </CardContent>
        </PageContentLayout>
      );
    
    case 'logout':
      return (
        <PageContentLayout
          title="Logout"
          subtitle="Are you sure you want to logout?"
          showBackButton={true}
          backRoute={ROUTES.ACCOUNT}
        >
          <CardContent className="space-y-4">
            <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md">
              Logout
            </button>
          </CardContent>
        </PageContentLayout>
      );
    
    default:
      return <Navigate to={ROUTES.ACCOUNT_PERSONAL} replace />;
  }
};

export default AccountSettings;
