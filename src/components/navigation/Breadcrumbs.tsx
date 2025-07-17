
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

export interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, className }) => {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <Breadcrumb className={className}>
      <BreadcrumbList className="text-[10px] xs:text-xs sm:text-sm text-gray-500">
        {items.map((item, index) => (
          <React.Fragment key={index}>
            {index > 0 && <BreadcrumbSeparator className="mx-0.5 sm:mx-1" />}
            {index === items.length - 1 ? (
              <BreadcrumbItem>
                <BreadcrumbPage className="text-[10px] xs:text-xs sm:text-sm truncate max-w-[60px] xs:max-w-[80px] sm:max-w-full">
                  {item.label}
                </BreadcrumbPage>
              </BreadcrumbItem>
            ) : (
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to={item.path || '#'} className="hover:underline text-[10px] xs:text-xs sm:text-sm truncate max-w-[50px] xs:max-w-[70px] sm:max-w-full">
                    {item.label}
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
            )}
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default Breadcrumbs;
