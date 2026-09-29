// Parts of a generic monopropellant thruster. Illustrative architecture only — not Brahmion specifications.
export type Part = { id: string; label: string; position: [number, number, number]; summary: string }
export const parts: Part[] = [
  { id: 'injector', label: 'INJECTOR', position: [0, 1.7, 0.45], summary: 'Meters liquid monopropellant from the feed system into the thruster.' },
  { id: 'catalyst', label: 'CATALYST', position: [0.55, 0.75, 0.45], summary: 'A catalyst bed triggers decomposition of the monopropellant. Brahmion develops catalyst systems alongside its propellants.' },
  { id: 'chamber', label: 'CHAMBER', position: [-0.75, 1.15, 0.2], summary: 'Decomposition and combustion happen here. Combustion stability is a core engineering concern.' },
  { id: 'thruster', label: 'THRUSTER', position: [0.85, -0.3, 0.3], summary: 'The nozzle accelerates hot gas to produce thrust. Brahmion builds micro-thruster hardware in-house.' },
  { id: 'exhaust', label: 'EXHAUST', position: [0, -2.0, 0.6], summary: 'Expelled gas leaves the nozzle; momentum exchange produces thrust.' },
]
export const propulsionStages = [
  { id: 'propellant', label: 'PROPELLANT', text: 'Green monopropellants — HTP, HAN, ADN and HAN-ADN blends — are developed as safer alternatives to hydrazine.' },
  { id: 'reaction', label: 'REACTION', text: 'Over a catalyst, the propellant decomposes (general monopropellant principle).' },
  { id: 'energy', label: 'ENERGY', text: 'Decomposition releases heat and hot gas in the chamber (general principle).' },
  { id: 'thrust', label: 'THRUST', text: 'The nozzle accelerates the gas, producing thrust (general principle).' },
]
export const capabilities = [
  { id: 'monoprop', title: 'Green Monopropellants', text: 'HTP, HAN, ADN and HAN-ADN blends as alternatives to hydrazine.' },
  { id: 'catalyst', title: 'Catalyst Systems', text: 'Catalysts that enable green monopropellant decomposition.' },
  { id: 'micro', title: 'Micro-Thruster Hardware', text: 'In-house thruster design for small satellites.' },
  { id: 'sim', title: 'Design & Simulation', text: 'Propulsion R&D covers the design and simulation of in-house thruster systems.' },
  { id: 'test', title: 'Hot-Fire Testing', text: 'Thrusters are validated on the test stand, including hot-fire tests.' },
  { id: 'plasma', title: 'Electric Propulsion', text: 'An emerging hybrid plasma-based electric propulsion system for deep-space, high-Isp missions. [CONTENT TO BE VERIFIED]' },
]
export const researchStages = [
  { id: 'concept', label: 'CONCEPT', text: 'Define propellant and thruster architecture.' },
  { id: 'simulation', label: 'SIMULATION', text: 'Model flow, decomposition and combustion behaviour.' },
  { id: 'design', label: 'DESIGN', text: 'Design thruster and catalyst hardware.' },
  { id: 'fabrication', label: 'FABRICATION', text: 'Build hardware in-house.' },
  { id: 'testing', label: 'TESTING', text: 'Run tests on the test stand, including hot-fire.' },
  { id: 'validation', label: 'VALIDATION', text: 'Review results and iterate. (Generic engineering workflow.)' },
]
export const trajectory = ['EARTH', 'ORBIT', 'DEEP SPACE', 'INTERPLANETARY']
