import { ReactNode } from 'react'

export interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  image: string;
} 