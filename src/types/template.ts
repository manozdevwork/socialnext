
export interface Template {
  id: string;
  title: string;
  description: string;
  category: string;
  preview?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface TemplateCategory {
  id: string;
  name: string;
  description?: string;
  templates: Template[];
}
