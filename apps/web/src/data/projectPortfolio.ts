export type ProjectIcon = 'cnc' | 'recovery' | 'network' | 'rack' | 'automation' | 'smart-home';

export interface PortfolioProject {
  slug: string;
  sourceId: string;
  title: string;
  category: string;
  period: string;
  status: 'Completed' | 'Ongoing';
  icon: ProjectIcon;
  preEvo?: boolean;
  summary: string;
  challenge: string;
  scope: string[];
  technologies: string[];
  result: string;
  currentStatus?: string[];
}

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: 'three-spindle-cnc-router-modernization',
    sourceId: 'asian-group-xk45mt-3b-cnc-modernization-2026',
    title: 'Three-Spindle CNC Router Modernization',
    category: 'CNC MODERNIZATION',
    period: '2025–2026',
    status: 'Completed',
    icon: 'cnc',
    summary:
      'Modernization of an approximately 25-year-old three-spindle CNC router, replacing the legacy NCStudio control approach with Mach3 and rebuilding the surrounding control integration.',
    challenge:
      'An aging CNC router required control-system modernization and restoration, including a maintainable replacement for the legacy control platform and repair of related spindle, drive, electrical and pneumatic systems.',
    scope: [
      'NCStudio to Mach3 control-system conversion',
      'Control-panel redesign and rewiring',
      'Motion-control and interface integration',
      'Three VFD and spindle-system setup, service or repair as required',
      'Electrical and pneumatic repair',
      'Machine calibration, testing and recommissioning'
    ],
    technologies: ['Mach3 CNC control', 'CNC motion control', 'Variable-frequency drives', 'Industrial control-panel wiring', 'Machine calibration'],
    result:
      'The machine was converted to Mach3, calibrated, tested and handed over in working condition.'
  },
  {
    slug: 'flood-damaged-industrial-machinery-recovery',
    sourceId: 'asian-group-flood-machinery-recovery-2025',
    title: 'Flood-Damaged Industrial Machinery Recovery',
    category: 'MACHINERY RECOVERY',
    period: '2025–2026',
    status: 'Completed',
    icon: 'recovery',
    summary:
      'Large-scale recovery, troubleshooting and recommissioning work across multiple flood-affected woodworking and production machines.',
    challenge:
      'Multiple industrial machines and their electrical/electronic control systems were affected by flood water and moisture, requiring inspection, fault finding, repair, servicing and selective component replacement.',
    scope: [
      'Flood-damaged machinery inspection and recovery',
      'Electrical and electronic troubleshooting',
      'VFD, contactor, servo and induction-motor service work',
      'Panel-board and machine-control system repair',
      'Repair work across CNC, edge-banding, table-saw and other production machinery',
      'Recommissioning work where completed'
    ],
    technologies: ['Industrial motor control', 'Variable-frequency drives', 'Servo systems', 'CNC machine controls', 'Industrial control panels'],
    result:
      'A broad recovery and repair program was carried out across multiple affected machines. Final operational status remains tracked machine-by-machine rather than generalized across the whole site.'
  },
  {
    slug: 'network-cctv-infrastructure',
    sourceId: 'dscsc-network-cctv-2018',
    title: 'Network & CCTV Infrastructure',
    category: 'NETWORK + CCTV',
    period: '2018–2019',
    status: 'Completed',
    icon: 'network',
    preEvo: true,
    summary:
      'Major institutional network and IP CCTV infrastructure work covering structured cabling, fiber installation and splicing, managed switching, configuration, testing and CCTV network integration.',
    challenge:
      'The project required coordinated copper and fiber infrastructure, managed network configuration and a complete CCTV network solution across a large institutional environment.',
    scope: [
      'Structured copper cabling',
      'Fiber-optic installation, splicing and termination',
      'Access-layer and other non-core switch configuration',
      'Network testing, troubleshooting and commissioning',
      'CCTV network design, configuration and integration',
      'Technical documentation and configuration support'
    ],
    technologies: ['Single-mode fiber networking', 'Managed Ethernet switching', 'VLAN-based segmentation', 'IP CCTV networking', 'Structured cabling'],
    result:
      'Network and CCTV infrastructure implementation, configuration, testing and commissioning were completed under a contractor collaboration scope.'
  },
  {
    slug: 'server-room-rack-cable-management',
    sourceId: 'british-school-colombo-server-room-rack-cable-management-2026',
    title: 'Server Room Rack & Cable Management',
    category: 'NETWORK INFRASTRUCTURE',
    period: '2026',
    status: 'Completed',
    icon: 'rack',
    summary:
      'Server-room rack reorganization focused on cleaner patch-cord routing, cable management and a more orderly, serviceable layout without redesigning the existing network.',
    challenge:
      'The existing server-room rack had congested and disorganized cabling that needed physical cleanup and improved routing while keeping the existing network design intact.',
    scope: [
      'Existing rack neatening',
      'Patch-cord reorganization',
      'Cable routing and cable management',
      'Rack equipment arrangement cleanup',
      'Reorganization of existing connections without network redesign'
    ],
    technologies: ['Network rack organization', 'Structured cabling', 'Patch-cord management', 'Server-room cable management'],
    result:
      'The rack and patching were reorganized into a substantially cleaner and more orderly physical layout, improving serviceability and cable organization.'
  },
  {
    slug: 'cardinal-mixing-machine-automation',
    sourceId: 'nippon-paint-cardinal-mixing-machine-2021',
    title: 'Cardinal Mixing Machine Automation',
    category: 'INDUSTRIAL AUTOMATION',
    period: '2021–2022 approx.',
    status: 'Completed',
    icon: 'automation',
    preEvo: true,
    summary:
      'Custom industrial automation and control-panel work for a Cardinal mixing machine, combining purpose-built electrical control with machine-control integration.',
    challenge:
      'The machine required a purpose-built control-panel solution and integrated electrical control for the mixing process.',
    scope: [
      'Custom industrial control-panel work',
      'Machine-control integration for a Cardinal mixing machine',
      'Electrical control and motor/drive-related integration'
    ],
    technologies: ['Industrial electrical control', 'Motor/drive control', 'PLC/logic-based machine control'],
    result:
      'The archived record confirms the custom control-panel and machine-control integration scope. No public performance figures are claimed.'
  },
  {
    slug: 'legacy-myhome-smart-home-recovery',
    sourceId: 'kollupitiya-residence-myhome-recovery-modernization-2026',
    title: 'Legacy MyHOME Smart Home Recovery & Modernization',
    category: 'SMART HOME RECOVERY',
    period: '2026',
    status: 'Ongoing',
    icon: 'smart-home',
    summary:
      'Ongoing multi-floor recovery and modernization of a legacy Legrand / BTicino MyHOME automation system, covering reverse engineering, device mapping, fault diagnosis, panel restoration and staged recommissioning.',
    challenge:
      'The aging multi-floor automation system had incomplete legacy documentation and no usable original project file, requiring device discovery, physical verification, mapping and fault tracing before safe staged modernization could proceed.',
    scope: [
      'MyHOME SCS BUS reverse engineering and recovery',
      'Bus scanning, device identification and address recovery',
      'Room-by-room switch, relay and light-point mapping',
      'Presence-sensor, relay-actuator and dimmer verification',
      'Panel-board cleaning, identification and fault tracing',
      'Lighting, dimming and automatic-lighting testing',
      'Floor-by-floor recommissioning and user testing',
      'Preparation for staged new-device integration and modernization'
    ],
    technologies: ['Legrand / BTicino MyHOME SCS BUS', 'MH202', 'F411/4', 'F420', 'F422', 'MyHOME Suite'],
    result:
      'Ground Floor and 3rd Floor main recovery stages are completed. 1st and 2nd Floor recovery and planned new-device integration remain pending, so the project is still ongoing.',
    currentStatus: [
      'Ground Floor main recovery — Completed',
      '3rd Floor main recovery — Completed',
      '1st Floor recovery — Pending',
      '2nd Floor recovery — Pending',
      'New-device integration — Pending'
    ]
  }
];

export const homepageProjects = portfolioProjects.slice(0, 4);
