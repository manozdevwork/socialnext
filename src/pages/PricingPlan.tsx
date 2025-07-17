
import React from 'react';
import PricingPlan from '@/components/design-system/PricingPlan';
import PageContentLayout from '@/components/layout/PageContentLayout';

const PricingPlanPage = () => {
  return (
    <div className="container mx-auto p-6">
      <PageContentLayout
        title="Pricing Plans"
        subtitle="Choose the right plan for your needs"
      >
        <PricingPlan />
      </PageContentLayout>
    </div>
  );
};

export default PricingPlanPage;
