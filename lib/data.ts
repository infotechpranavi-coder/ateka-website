import { Service, Project, BlogPost, Testimonial, FleetProduct, ServiceCategory } from './types';

export const services: Service[] = [
  {
    id: '1',
    number: '01',
    icon: 'Truck',
    title: 'Full Truck Load (FTL) Transportation',
    description:
      'Dedicated full-truck movement for high-volume cargo with consistent vehicle availability across India.',
    features: ['Dedicated FTL capacity', 'Highway and regional lanes', 'Reliable vehicle availability'],
    image: '/images/services/pan-india.jpg',
  },
  {
    id: '2',
    number: '02',
    icon: 'Globe',
    title: 'Road Freight Transportation',
    description:
      'Safe, efficient road freight solutions tailored for logistics companies, express networks, and corporate shippers.',
    features: ['Pan-India road coverage', 'Scheduled and ad-hoc dispatch', 'Professional operations team'],
    image: '/images/stock/cta-truck.jpg',
  },
  {
    id: '3',
    number: '03',
    icon: 'Warehouse',
    title: 'Dedicated Vehicle Services',
    description:
      'Assigned vehicles and drivers for customers who need predictable capacity on fixed or recurring lanes.',
    features: ['Reserved vehicle allocation', 'Familiar driver assignment', 'Lane-specific planning'],
    image: '/images/stock/hero-truck.jpg',
  },
  {
    id: '4',
    number: '04',
    icon: 'Package',
    title: 'E-commerce Logistics Support',
    description:
      'Transportation support for e-commerce and express distribution networks that depend on timely road movement.',
    features: ['High-frequency dispatch', 'Hub-to-hub movement', 'Flexible capacity for peak loads'],
    image: '/banners/refie 3.jpg',
  },
  {
    id: '5',
    number: '05',
    icon: 'Building2',
    title: 'Corporate Transportation Solutions',
    description:
      'Structured road transport for corporate clients with transparent coordination and consistent service quality.',
    features: ['Account-managed operations', 'SLA-oriented planning', 'Competitive commercial terms'],
    image: '/images/stock/hero-truck.jpg',
  },
  {
    id: '6',
    number: '06',
    icon: 'Clock',
    title: 'Time-Critical & Express Deliveries',
    description:
      'Priority road movement when deadlines are tight and cargo must reach destination without delay.',
    features: ['Priority dispatch windows', 'Express lane planning', 'Live coordination till handover'],
    image: '/banners/refie 3.jpg',
  },
  {
    id: '7',
    number: '07',
    icon: 'MapPinned',
    title: 'Distribution and Secondary Transportation',
    description:
      'Secondary movement from hubs and warehouses to regional destinations with dependable last-leg support.',
    features: ['Hub-to-spoke distribution', 'Regional coverage', 'Coordinated unloading windows'],
    image: '/images/stock/cta-warehouse.jpg',
  },
  {
    id: '8',
    number: '08',
    icon: 'Settings',
    title: 'Customized Logistics Solutions',
    description:
      'Flexible transportation plans designed around your cargo, lanes, and operating calendar.',
    features: ['Lane design support', 'Mixed FTL and dedicated models', 'Scalable capacity'],
    image: '/images/stock/hero-containers.jpg',
  },
];

export const serviceCategories: ServiceCategory[] = [
  {
    id: '1',
    title: 'Logistics & Supply Chain',
    description: 'Road freight support for 3PLs, freight forwarders, and supply-chain networks.',
    overview:
      'Ateka Logistics partners with logistics and supply-chain companies that need dependable road capacity. We move FTL and dedicated loads with a focus on vehicle availability, safety, and on-time handover.',
    features: [
      'FTL and dedicated vehicle support',
      'Consistent capacity for recurring lanes',
      'Professional drivers and operations coordination',
      'GPS-enabled monitoring where applicable',
      'Transparent communication from pickup to delivery',
    ],
    image: '/images/stock/cta-truck.jpg',
  },
  {
    id: '2',
    title: 'E-commerce',
    description: 'Transportation support for e-commerce fulfilment and distribution flows.',
    overview:
      'E-commerce businesses need road partners who can keep up with volume and cut-offs. We provide reliable trucking support for hub transfers, secondary movement, and peak-season capacity.',
    features: [
      'High-frequency dispatch support',
      'Hub-to-hub and secondary movement',
      'Flexible capacity during sale periods',
      'Time-critical delivery options',
      'Operations team aligned to fulfilment windows',
    ],
    image: '/categories/fmcg.jpg',
  },
  {
    id: '3',
    title: 'Express Distribution',
    description: 'Fast, dependable road movement for express and time-bound networks.',
    overview:
      'Express distribution networks rely on vehicles that show up on time and complete lanes safely. Ateka Logistics supports express partners with dedicated and FTL capacity built around tight schedules.',
    features: [
      'Priority vehicle allocation',
      'Time-critical and express deliveries',
      'Experienced highway drivers',
      'Live coordination with operations desks',
      'Scalable fleet for network expansion',
    ],
    image: '/images/stock/hero-truck.jpg',
  },
  {
    id: '4',
    title: 'Retail',
    description: 'Store and DC replenishment with reliable secondary transportation.',
    overview:
      'Retail supply chains need predictable inbound movement to distribution centres and stores. We handle FTL and secondary transportation so inventory reaches the right location on schedule.',
    features: [
      'DC-to-store and warehouse replenishment',
      'Scheduled retail lanes',
      'Careful handling of mixed retail cargo',
      'Flexible vehicle sizes for different volumes',
      'Dependable delivery windows',
    ],
    image: '/categories/fast-food.jpg',
  },
  {
    id: '5',
    title: 'Manufacturing',
    description: 'Inbound and outbound road freight for plants, vendors, and warehouses.',
    overview:
      'Manufacturers depend on timely movement of raw materials and finished goods. Our 20 ft and 32 ft tonnage fleet supports plant-to-warehouse, vendor, and distribution lanes with a focus on safety and reliability.',
    features: [
      'Plant inbound and outbound FTL',
      'Vendor-to-factory movement',
      'Highway-ready 20 ft and 32 ft trucks',
      'Dedicated vehicles for production calendars',
      'Safety-first loading and transit practices',
    ],
    image: '/categories/cold-storage-warehouse.webp',
  },
  {
    id: '6',
    title: 'Corporate Logistics',
    description: 'Account-managed transportation for corporate and institutional shippers.',
    overview:
      'Corporate clients receive structured transportation support with clear coordination, competitive pricing, and a long-term partnership approach. We tailor FTL, dedicated, and express options to business requirements.',
    features: [
      'Single-point operations contact',
      'Customized lane planning',
      'Transparent commercial terms',
      'Consistent service quality',
      'Capacity that scales with demand',
    ],
    image: '/categories/catering.jpg',
  },
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'Pan-India FTL Movement',
    image: '/images/project-1.jpg',
    category: 'FTL Transport',
    description: 'Full-truck road freight for high-volume lanes with consistent vehicle availability.',
  },
  {
    id: '2',
    title: 'Express Network Support',
    image: '/images/project-2.jpg',
    category: 'Express',
    description: 'Time-critical road movement supporting express distribution partners.',
  },
  {
    id: '3',
    title: 'E-commerce Hub Transfers',
    image: '/images/project-3.jpg',
    category: 'Distribution',
    description: 'Secondary and hub-to-hub transportation for e-commerce fulfilment flows.',
  },
  {
    id: '4',
    title: 'Corporate Dedicated Fleet',
    image: '/images/project-4.jpg',
    category: 'Corporate',
    description: 'Assigned vehicles for corporate clients needing predictable daily capacity.',
  },
  {
    id: '5',
    title: 'Retail Distribution Lanes',
    image: '/images/project-5.jpg',
    category: 'Distribution',
    description: 'Scheduled secondary transportation from DCs to retail destinations.',
  },
  {
    id: '6',
    title: 'Manufacturing Outbound Freight',
    image: '/images/project-6.jpg',
    category: 'FTL Transport',
    description: 'Plant-to-warehouse FTL using 20 ft and 32 ft tonnage trucks.',
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'ftl-road-freight-planning',
    title: 'Planning Reliable FTL Road Freight Across India',
    excerpt: 'How dedicated full-truck capacity, lane planning, and driver discipline keep deliveries on time.',
    content: `<h3>Introduction</h3>
<p>Full truck load transportation remains the backbone of Indian road freight. Capacity, routing, and driver readiness decide whether cargo arrives on schedule.</p>
<h3>What Matters</h3>
<p>Vehicle availability, well-maintained trucks, and clear pickup-to-delivery coordination reduce delays and improve customer confidence.</p>
<h3>Ateka Approach</h3>
<p>We combine a 27-vehicle fleet with experienced drivers and an operations team focused on safety, transparency, and timely handover.</p>`,
    image: '/images/blog-1.jpg',
    date: '2024-03-15',
    author: {
      name: 'Operations Team',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ateka',
    },
    category: 'Logistics',
    tags: ['FTL', 'Road Freight', 'Planning'],
  },
  {
    id: '2',
    slug: 'safety-in-road-transport',
    title: 'Safety and Operational Excellence in Road Transport',
    excerpt: 'Why maintenance, trained drivers, and GPS monitoring matter on every lane.',
    content: `<h3>Safety First</h3>
<p>Road freight quality is inseparable from vehicle condition and driver professionalism.</p>
<h3>Fleet Discipline</h3>
<p>Regular servicing, trained drivers, and GPS-enabled monitoring where applicable help keep cargo and people safe.</p>
<h3>Customer Value</h3>
<p>Clients choose partners who treat every shipment as a commitment to trust, reliability, and on-time delivery.</p>`,
    image: '/images/blog-3.jpg',
    date: '2024-03-10',
    author: {
      name: 'Fleet Team',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=fleet',
    },
    category: 'Operations',
    tags: ['Safety', 'Fleet', 'Operations'],
  },
  {
    id: '3',
    slug: 'ecommerce-road-support',
    title: 'Road Freight Support for E-commerce and Express Networks',
    excerpt: 'Flexible trucking capacity that keeps fulfilment and express lanes moving.',
    content: `<h3>Network Pressure</h3>
<p>E-commerce and express operators need road partners who can scale capacity without dropping service quality.</p>
<h3>Right Vehicles</h3>
<p>20 ft and 32 ft tonnage trucks cover both regional and long-haul requirements for hub transfers and secondary movement.</p>
<h3>Partnership</h3>
<p>Transparent communication and competitive pricing help build long-term logistics partnerships.</p>`,
    image: '/images/blog-2.jpg',
    date: '2024-03-05',
    author: {
      name: 'Customer Support',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=support',
    },
    category: 'E-commerce',
    tags: ['E-commerce', 'Express', 'Distribution'],
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote:
      'Ateka Logistics gives us consistent FTL capacity and professional coordination. Vehicles are available when we need them, and deliveries stay on schedule.',
    author: 'Operations Lead',
    designation: 'Logistics Partner',
    company: 'Express Distribution Network',
    rating: 5,
  },
  {
    id: '2',
    quote:
      'Dedicated vehicle support and trained drivers have made our recurring lanes far more predictable. Communication from pickup to handover is clear and reliable.',
    author: 'Dispatch Manager',
    designation: 'Supply Chain',
    company: 'Corporate Logistics Client',
    rating: 5,
  },
  {
    id: '3',
    quote:
      'For e-commerce and secondary movement, Ateka is a dependable road partner. Competitive pricing without compromising safety or service quality.',
    author: 'Hub Manager',
    designation: 'Distribution',
    company: 'E-commerce Fulfilment Partner',
    rating: 5,
  },
];

export const fleetProducts: FleetProduct[] = [
  {
    id: '1',
    name: '20 Feet Tonnage Truck',
    image: '/images/stock/hero-truck.jpg',
    category: 'Tonnage',
    description:
      'A versatile 20 ft tonnage truck for regional and intercity FTL movement. Suited to dedicated lanes, corporate loads, and secondary distribution.',
    features: [
      'Well-maintained and regularly serviced',
      'Experienced, trained professional drivers',
      'GPS-enabled monitoring where applicable',
      'Ideal for FTL and dedicated vehicle services',
      'Focus on safety, reliability, and timely delivery',
    ],
    specs: {
      capacity: 'FTL / dedicated',
      dimensions: '20 ft body',
      temperature: 'Tonnage truck',
    },
  },
  {
    id: '2',
    name: '32 Feet Tonnage Truck',
    image: '/images/stock/cta-truck.jpg',
    category: 'Highway',
    description:
      'A 32 ft tonnage truck for higher-volume highway and pan-India movement. Built for customers who need extra capacity with dependable transit.',
    features: [
      'Higher cube for full-load shipments',
      'Highway-ready for long-haul lanes',
      'Professional driver assignment',
      'Regular maintenance and safety checks',
      'Supports e-commerce, manufacturing, and 3PL cargo',
    ],
    specs: {
      capacity: 'High-volume FTL',
      dimensions: '32 ft body',
      temperature: 'Tonnage truck',
    },
  },
];

export const esteemedClients = [
  'Expeditors International Pvt. Ltd.',
  'Amazon',
  'Blue Dart Express Limited',
  'BLR Logistics Pvt. Ltd.',
  'Kaba Express Pvt. Ltd.',
  'Best Roadways Pvt. Ltd.',
];
