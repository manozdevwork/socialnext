
import React, { useState } from 'react';
import { 
  TextField, 
  TextArea, 
  EmailField, 
  PasswordField, 
  SearchInput, 
  Checkbox, 
  RadioGroup, 
  RadioButton, 
  ToggleSwitch, 
  SelectDropdown, 
  SelectItem, 
  TagInput,
  type Tag
} from '../forms';

/**
 * Form Components Examples
 * 
 * Usage examples for all form components
 */

export const FormExamples: React.FC = () => {
  const [tags, setTags] = useState<Tag[]>([]);
  const [checkboxValue, setCheckboxValue] = useState(false);
  const [radioValue, setRadioValue] = useState("");
  const [switchValue, setSwitchValue] = useState(false);

  return (
    <div className="space-y-8 p-6 max-w-2xl">
      <div>
        <h3 className="text-lg font-semibold mb-4">Text Inputs</h3>
        <div className="space-y-4">
          <TextField 
            label="Full Name" 
            placeholder="Enter your full name" 
            helpText="This will be displayed on your profile"
          />
          <TextField 
            label="Username" 
            placeholder="@username" 
            error="Username is already taken"
          />
          <EmailField 
            label="Email Address" 
            placeholder="you@example.com"
          />
          <PasswordField 
            label="Password" 
            placeholder="Create a strong password"
          />
          <SearchInput 
            label="Search" 
            placeholder="Search for anything..."
            onSearch={(value) => console.log('Search:', value)}
          />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Text Area</h3>
        <TextArea 
          label="Description" 
          placeholder="Tell us about yourself..."
          helpText="Maximum 500 characters"
        />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Selection Inputs</h3>
        <div className="space-y-4">
          <Checkbox 
            label="I agree to the terms and conditions"
            checked={checkboxValue}
            onCheckedChange={(checked) => setCheckboxValue(checked === true)}
          />
          
          <RadioGroup 
            label="Choose your plan"
            value={radioValue}
            onValueChange={setRadioValue}
          >
            <RadioButton value="free" label="Free Plan" />
            <RadioButton value="pro" label="Pro Plan" />
            <RadioButton value="enterprise" label="Enterprise Plan" />
          </RadioGroup>

          <ToggleSwitch 
            label="Enable notifications"
            checked={switchValue}
            onCheckedChange={setSwitchValue}
          />

          <SelectDropdown 
            label="Country"
            placeholder="Select a country"
          >
            <SelectItem value="us">United States</SelectItem>
            <SelectItem value="ca">Canada</SelectItem>
            <SelectItem value="uk">United Kingdom</SelectItem>
          </SelectDropdown>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Tag Input</h3>
        <TagInput 
          label="Skills"
          placeholder="Add your skills..."
          tags={tags}
          onTagsChange={setTags}
          helpText="Press Enter or comma to add tags"
          maxTags={10}
        />
      </div>
    </div>
  );
};
