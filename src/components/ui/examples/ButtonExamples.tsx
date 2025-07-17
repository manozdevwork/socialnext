
import React from 'react';
import { Button } from '../enhanced-button';
import { Plus, Search, Download } from 'lucide-react';

/**
 * Button Component Examples
 * 
 * Usage examples for the enhanced Button component
 */

export const ButtonExamples: React.FC = () => {
  return (
    <div className="space-y-8 p-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Button Variants</h3>
        <div className="flex gap-4 flex-wrap">
          <Button variant="primary">Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="outlined">Outlined Button</Button>
          <Button variant="underline">Underline Button</Button>
          <Button variant="ghost">Ghost Button</Button>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Button Sizes</h3>
        <div className="flex gap-4 items-center flex-wrap">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
          <Button size="icon"><Plus className="h-4 w-4" /></Button>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Button States</h3>
        <div className="flex gap-4 flex-wrap">
          <Button>Normal</Button>
          <Button isLoading>Loading...</Button>
          <Button isDisabled>Disabled</Button>
          <Button fullWidth>Full Width</Button>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Button with Icons</h3>
        <div className="flex gap-4 flex-wrap">
          <Button prefixIcon={<Plus className="h-4 w-4" />}>Add New</Button>
          <Button prefixIcon={<Search className="h-4 w-4" />} variant="outlined">Search</Button>
          <Button prefixIcon={<Download className="h-4 w-4" />} variant="secondary">Download</Button>
        </div>
      </div>
    </div>
  );
};
