
import React from 'react';
import PersonaManagement from '@/components/design-system/PersonaManagement';
import { useIsMobile } from '@/hooks/use-mobile';
import { ScrollArea } from '@/components/ui/scroll-area';
import { PlusCircle } from 'lucide-react';
import PageContentLayout from '@/components/layout/PageContentLayout';
import { usePersonaStore } from '@/stores/usePersonaStore';

const PersonaManagementPage = () => {
  const isMobile = useIsMobile();
  const { openCreateDialog } = usePersonaStore();

  return (
    <div className="h-full flex flex-col">
      <PageContentLayout
        title="Personas Management"
        subtitle="Please complete the following steps to complete your profile"
        action={{
          label: "Add New Persona",
          onClick: openCreateDialog,
          icon: <PlusCircle className="h-4 w-4" />
        }}
      >
        <ScrollArea className="flex-1 -mx-4 sm:mx-0 px-4 sm:px-0">
          <PersonaManagement className="flex-1" />
        </ScrollArea>
      </PageContentLayout>
    </div>
  );
};

export default PersonaManagementPage;
