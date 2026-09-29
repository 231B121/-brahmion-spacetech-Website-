export type Member = {
  id: string
  name: string
  role: string
  category: 'Founders' | 'Mentors'
  degree?: string
  note: string
  image: string
  linkedin?: string
  mail?: string
  website?: string
}

export const team: Member[] = [
  {
    id: 'ayush',
    name: 'Ayush Sahu',
    role: 'Co-Founder · CEO',
    category: 'Founders',
    degree: 'MTech, Aerospace Engineering — IIT Kanpur',
    note: 'The strategist and systems architect. With an MTech in Aerospace Engineering from IIT Kanpur, Ayush leads business development while driving the technical evolution of our propulsion systems. He bridges the gap between cutting-edge engineering and market needs.',
    image: '/assets/team/ayush-sahu.webp',
    linkedin: 'https://www.linkedin.com/in/ayush1606/',
    mail: 'ayush.sahu@brahmionspacetech.com',
  },
  {
    id: 'mayank',
    name: 'Mayank Bhardwaj',
    role: 'Co-Founder · CTO',
    category: 'Founders',
    degree: 'B.Tech, Chemical Engineering — NIT Hamirpur',
    note: 'The chemistry wizard. Armed with B.Tech in Chemical Engineering from NIT Hamirpur, Mayank is the brain behind our green fuel formulations and catalyst innovations. His expertise in propellant chemistry and catalysis turns theoretical concepts into real-world solutions.',
    image: '/assets/team/mayank-bhardwaj.webp',
    linkedin: 'https://www.linkedin.com/in/mayank-bhardwaj-b98876220/',
    mail: 'mayank.bhardwaj@brahmionspacetech.com',
  },
  {
    id: 'balaji',
    name: 'Balaji Sriram',
    role: 'Mentor · Technical Advisor',
    category: 'Mentors',
    degree: 'Doctoral Researcher — IIT Kanpur',
    note: 'Doctoral Researcher at IIT Kanpur and Co-Founder & CTO of Simactricals. Balaji provides critical technical guidance, helping us navigate complex engineering challenges and refine our approach to propulsion design.',
    image: '/assets/team/balaji-sriram.webp',
    linkedin: 'https://www.linkedin.com/in/balaji-sriram-simactricals/',
    mail: 'balaji@simactricals.io',
  },
  {
    id: 'chaitanya',
    name: 'Dr. Chaitanya Rao',
    role: 'Mentor · Technical Mentor',
    category: 'Mentors',
    degree: 'Assistant Professor, Aerospace Engg — IIT Kanpur',
    note: 'Assistant Professor in the Department of Aerospace Engineering at IIT Kanpur. Dr. Rao mentors our technological development journey, guiding prototype testing and ensuring our innovations meet the highest standards of aerospace engineering.',
    image: '/assets/team/chaitanya-rao.webp',
    linkedin: 'https://www.linkedin.com/in/d-chaitanya-kumar-rao-89595326/',
    mail: 'chaitanya@iitk.ac.in',
    website: 'https://www.iitk.ac.in/d-chaitanya-kumar-rao',
  },
]
