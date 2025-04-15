// src/types/project.ts
export interface Project {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
  images: string[];
  tags: string[];
  isStudent?: boolean;
  isComputer?: boolean;
  location?: string;
  descriptionText?: string;
  imageFiles?: string[];
  additionalImages?: string[];
}
