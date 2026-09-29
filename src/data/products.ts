export type Product = {
  id: string
  name: string
  subtitle: string
  category: string
  price: string
  priceUnit?: string
  description: string
  specs: string[]
  image: string
  featured?: boolean
}

export const flagship = {
  name: 'VEGASTRA-1',
  native: 'वेगास्त्र',
  kind: '100 mN class green monopropellant micro thruster',
  text: 'Developed entirely in-house and successfully hot-fire tested at IIT Kanpur. Engineered for precision attitude control, station keeping, and agile orbital maneuvers.',
  callouts: ['100 mN class', 'Green monopropellant', 'Hot-fire tested', 'In-house development', '366s ISP Capability'],
}

export const products: Product[] = [
  {
    id: 'han-adn',
    name: 'HAN-ADN Green Propellant',
    subtitle: 'The fuel that changes everything',
    category: 'Green Propellant',
    price: '$8 – $30',
    priceUnit: '/ kg',
    description: "Our eco-friendly monopropellant delivers 366s ISP, matching the performance of toxic alternatives without any of the dangers. At $8–$30 per kg, it's affordable, powerful, and safe for people and the planet.",
    specs: ['366s Specific Impulse (ISP)', '$8–$30 / kg affordable pricing', 'Non-toxic, safe human handling', 'Direct replacement for Hydrazine'],
    image: '/assets/product/p01-han-adn.png',
    featured: true,
  },
  {
    id: 'ceramic-catalyst',
    name: 'Ceramic Catalyst',
    subtitle: 'The heart of clean combustion',
    category: 'Catalyst Technology',
    price: 'Custom / RFQ',
    priceUnit: 'mission tier',
    description: 'Our advanced ceramic catalyst enables efficient fuel decomposition at optimal temperatures, ensuring reliable ignition and consistent performance. Engineered to withstand the extreme conditions of space propulsion — durable and reusable.',
    specs: ['Optimal decomposition temp', 'Extreme thermal shock resistance', 'Durable and reusable architecture', 'Space-qualified reliability'],
    image: '/assets/product/p02-ceramic-catalyst.png',
  },
  {
    id: 'micro-pulse-thruster',
    name: 'Micro Pulse Thruster',
    subtitle: 'Precision control for small satellites',
    category: 'Hardware Thruster',
    price: 'Mission Quote',
    priceUnit: 'per unit',
    description: 'A compact PCB-based thruster using HTP green fuel to give your spacecraft the agility it needs — perfect for attitude control and orbital adjustments.',
    specs: ['Compact PCB-based architecture', 'HTP green fuel monopropellant', 'CubeSat & SmallSat ready', 'Precision attitude control (AOCS)'],
    image: '/assets/product/p03-micro-pulse-thruster.png',
  },
  {
    id: 'green-prop-system',
    name: 'Green Prop System',
    subtitle: 'Power without compromise',
    category: 'Integrated Propulsion',
    price: 'Enterprise Quote',
    priceUnit: 'turnkey system',
    description: 'Built on HAN-ADN technology, this propulsion system delivers 1-10 N of thrust with 366s specific impulse — ideal for orbital maneuvering and satellite boosters.',
    specs: ['1 – 10 N thrust output', '366s specific impulse', 'HAN-ADN monopropellant core', 'Orbital maneuvering & boosters'],
    image: '/assets/product/p04-green-prop-system.png',
  },
  {
    id: 'bhp-90',
    name: 'BHP-90 : High-Test Peroxide Propellant',
    subtitle: 'Safer, cleaner, high-performance propulsion',
    category: 'Green Propellant',
    price: 'Bulk on Request',
    priceUnit: 'per mission batch',
    description: "Brahmion Spacetech's high-purity 90% Hydrogen Peroxide-based green propellant, developed for safer and cleaner propulsion applications. Designed as an alternative to toxic conventional propellants, it offers reliable performance, simplified handling, and environmentally responsible operation.",
    specs: ['90% High-Test Peroxide (HTP)', 'Zero toxic hypergolic danger', 'Simplified ground handling logistics', 'High density impulse'],
    image: '/assets/product/p05-bhp-90.png',
  },
]

// Backward compatibility alias for any existing imports
export const otherProducts = products
