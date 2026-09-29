export type Part = { id: string; label: string; position: [number, number, number]; summary: string }

export const parts: Part[] = [
  { id: 'injector', label: 'INJECTOR SYSTEM', position: [0, 1.7, 0.45], summary: 'Precision micro-orifice injector metering green monopropellant directly from the pressurized feed line.' },
  { id: 'catalyst', label: 'CERAMIC CATALYST BED', position: [0.55, 0.75, 0.45], summary: 'Advanced porous ceramic substrate engineered for instantaneous, hypergolic-free thermal and catalytic decomposition.' },
  { id: 'chamber', label: 'COMBUSTION CHAMBER', position: [-0.75, 1.15, 0.2], summary: 'Inconel high-temperature chamber sustaining high chamber pressure and exothermic gas release.' },
  { id: 'thruster', label: 'EXPANSION NOZZLE', position: [0.85, -0.3, 0.3], summary: 'Bell-contoured supersonic expansion nozzle converting high enthalpy gas into vacuum thrust impulse.' },
  { id: 'exhaust', label: 'PROPULSIVE EXHAUST', position: [0, -2.0, 0.6], summary: 'Clean, non-toxic high-velocity exhaust plume delivering precise delta-V and attitude correction.' },
]

export const propulsionStages = [
  { id: 'propellant', label: 'PROPELLANT FEED', text: 'Green monopropellant blends — HAN-ADN and BHP-90 HTP — pressurized and delivered to the thruster manifold safely without hazmat suits.' },
  { id: 'reaction', label: 'CATALYTIC ACTIVATION', text: 'Passing over specialized ceramic catalysts initiates rapid exothermic breakdown without electrical preheating.' },
  { id: 'energy', label: 'THERMAL EXPANSION', text: 'Instantaneous decomposition produces clean superheated steam and oxygen gases at optimal chamber temperatures.' },
  { id: 'thrust', label: 'SUPERSONIC IMPULSE', text: 'Supersonic expansion through the micro-nozzle delivers high specific impulse (up to 366s ISP) for orbit maneuvers.' },
]

export const capabilities = [
  { id: 'monoprop', title: 'Green Monopropellants', text: 'High energy-density HAN-ADN and BHP-90 formulations providing 366s ISP with zero toxic handling risks.' },
  { id: 'catalyst', title: 'Ceramic Catalysts', text: 'Proprietary porous ceramic substrates engineered for rapid decomposition and thousands of thermal cycles.' },
  { id: 'micro', title: 'Micro-Thruster Hardware', text: '100 mN to 10 N class compact micro thrusters for SmallSats, CubeSats, and orbital transfer vehicles.' },
  { id: 'sim', title: 'Computational CFD & CAD', text: 'High-fidelity finite element modeling, reacting flow CFD simulations, and thermal shock structural analysis.' },
  { id: 'test', title: 'Vacuum Hot-Fire Testing', text: 'Comprehensive testing on our custom vacuum test bench at SIIC IIT Kanpur, measuring real-time thrust and impulse bits.' },
  { id: 'plasma', title: 'Deep-Space Propulsion', text: 'Next-generation electric propulsion systems and orbital refuelling architectures for long-duration interplanetary missions.' },
]

export const researchStages = [
  { id: 'concept', label: 'THERMOCHEMICAL ARCHITECTURE', text: 'Synthesize optimal energetic ionic liquids and determine stoichiometric ratios for non-toxic decomposition.' },
  { id: 'simulation', label: 'MULTIPHYSICS SIMULATION', text: 'Model non-equilibrium gas dynamics, thermal gradients, and catalytic bed residence times in high vacuum.' },
  { id: 'design', label: 'ADDITIVE HARDWARE DESIGN', text: 'Design aerospace-grade refractory metal housings and precision micro-machined injector assemblies.' },
  { id: 'fabrication', label: 'IN-HOUSE FABRICATION', text: 'Manufacture prototype thruster bodies and ceramic catalyst matrices at IIT Kanpur precision facilities.' },
  { id: 'testing', label: 'HOT-FIRE TEST STAND', text: 'Execute automated pulse firing, frequency response tests, and steady-state burns in vacuum chambers.' },
  { id: 'validation', label: 'FLIGHT QUALIFICATION', text: 'Vibration table testing, thermal vacuum cycling, and space qualification standards review.' },
]

export const trajectory = ['LOW EARTH ORBIT', 'GEOSTATIONARY', 'CISLUNAR ORBIT', 'DEEP SPACE EXPLORATION']
