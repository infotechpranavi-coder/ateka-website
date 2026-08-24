export interface Service {
  id: string;
  number: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
  image: string;
}

export interface Project {
  id: string;
  title: string;
  image: string;
  category: 'FTL Transport' | 'Express' | 'Distribution' | 'Corporate';
  description: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  author: {
    name: string;
    avatar: string;
  };
  category: string;
  tags: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  designation: string;
  company: string;
  rating: number;
}

export interface FleetProduct {
  id: string;
  name: string;
  image: string;
  category: string;
  description: string;
  features: string[];
  specs: {
    capacity: string;
    dimensions: string;
    temperature: string;
  };
}

export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  overview: string;
  features: string[];
  image: string;
}

export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  origin: string;
  destination: string;
  containerType: string;
  temperature: string;
  cargoType: string;
  message: string;
}
