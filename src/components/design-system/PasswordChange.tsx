
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface PasswordChangeProps {
  className?: string;
}

const PasswordChange: React.FC<PasswordChangeProps> = ({ className }) => {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!currentPassword) {
      toast({
        title: "Error",
        description: "Please enter your current password",
        variant: "destructive",
      });
      return;
    }

    if (!newPassword) {
      toast({
        title: "Error",
        description: "Please enter a new password",
        variant: "destructive",
      });
      return;
    }

    if (newPassword !== confirmPassword) {
      toast({
        title: "Error",
        description: "New passwords do not match",
        variant: "destructive",
      });
      return;
    }

    // Password change would be handled here
    toast({
      title: "Success",
      description: "Your password has been updated successfully",
    });

    // Reset form
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
  };

  return (
    <div className={`w-full ${className}`}>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Current Password */}
          <div className="space-y-2">
            <label htmlFor="current-password" className="block text-sm font-medium text-gray-700">
              Current Password
            </label>
            <div className="relative">
              <Input
                id="current-password"
                type={showCurrentPassword ? "text" : "password"}
                placeholder="Enter your current password"
                className="pr-10"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500"
                onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                aria-label={showCurrentPassword ? "Hide password" : "Show password"}
              >
                {showCurrentPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>

          {/* New Password */}
          <div className="space-y-2">
            <label htmlFor="new-password" className="block text-sm font-medium text-gray-700">
              New Password
            </label>
            <div className="relative">
              <Input
                id="new-password"
                type={showNewPassword ? "text" : "password"}
                placeholder="Enter your new password"
                className="pr-10"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500"
                onClick={() => setShowNewPassword(!showNewPassword)}
                aria-label={showNewPassword ? "Hide password" : "Show password"}
              >
                {showNewPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>

          {/* Confirm New Password */}
          <div className="space-y-2">
            <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
              Confirm New Password
            </label>
            <div className="relative">
              <Input
                id="confirm-password"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm your new password"
                className="pr-10"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                aria-label={showConfirmPassword ? "Hide password" : "Show password"}
              >
                {showConfirmPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>
        </div>

        <Button 
          type="submit" 
          className="bg-sky-400 hover:bg-sky-500 text-white"
        >
          Save Changes
        </Button>
      </form>
    </div>
  );
};

export default PasswordChange;
