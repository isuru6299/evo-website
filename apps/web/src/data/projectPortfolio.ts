export type ProjectIcon =
  | 'cnc'
  | 'recovery'
  | 'network'
  | 'rack'
  | 'automation'
  | 'telecom'
  | 'fire'
  | 'packaging'
  | 'conveyor'
  | 'smart-home';

export type ProjectGroup = 'automation' | 'machinery' | 'network-building' | 'smart-living';

export interface PortfolioProject {
  slug: string;
  sourceId: string;
  archiveCode: string;
  title: string;
  category: string;
  group: ProjectGroup;
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
    archiveCode: 'P01',
    slug: 'network-cctv-infrastructure',
    sourceId: 'dscsc-network-cctv-2018',
    title: 'Network & CCTV Infrastructure',
    category: 'NETWORK + CCTV',
    group: 'network-building',
    period: '2018–2019',
    status: 'Completed',
    icon: 'network',
    preEvo: true,
    summary: 'Major institutional network and IP CCTV infrastructure work covering structured cabling, fiber installation and splicing, managed switching, configuration, testing and CCTV network integration.',
    challenge: 'The project required coordinated copper and fiber infrastructure, managed network configuration and a complete CCTV network solution across a large institutional environment.',
    scope: ['Structured copper cabling', 'Fiber-optic installation, splicing and termination', 'Access-layer and other non-core switch configuration', 'Network testing, troubleshooting and commissioning', 'CCTV network design, configuration and integration', 'Technical documentation and configuration support'],
    technologies: ['Single-mode fiber networking', 'Managed Ethernet switching', 'VLAN-based segmentation', 'IP CCTV networking', 'Structured cabling'],
    result: 'Network and CCTV infrastructure implementation, configuration, testing and commissioning were completed under a contractor collaboration scope.'
  },
  {
    archiveCode: 'P02',
    slug: 'ibs-major-building-projects',
    sourceId: 'ibs-major-building-projects-2020',
    title: 'IBS Works – Major Building & High-Rise Projects',
    category: 'IBS + TELECOM INFRASTRUCTURE',
    group: 'network-building',
    period: '2020',
    status: 'Completed',
    icon: 'telecom',
    preEvo: true,
    summary: 'A portfolio of Indoor Building Solution infrastructure works across major developments, covering RF cabling, antennas, passive components, conduit, supports and associated telecom installation work.',
    challenge: 'The work involved implementing distributed indoor telecom infrastructure across complex building environments while coordinating cabling, passive RF hardware, supports and installation routes.',
    scope: ['IBS equipment installation', 'Antenna, splitter and jumper installation', 'RF and coaxial cabling', 'Telecom cable laying and routing', 'Conduit and cable-support installation', 'Rack-related installation work'],
    technologies: ['Indoor Building Solution infrastructure', 'Passive RF distribution', 'Coaxial feeder and jumper cabling', 'Antenna distribution infrastructure', 'Telecom cable routing'],
    result: 'The archive confirms a range of IBS installation works across several major developments. No public RF-performance figures are claimed.'
  },
  {
    archiveCode: 'P03',
    slug: 'itc-one-fire-security-systems',
    sourceId: 'itc-one-fire-security-2021',
    title: 'Fire & Security System Installation',
    category: 'FIRE + BUILDING SYSTEMS',
    group: 'network-building',
    period: '2021',
    status: 'Completed',
    icon: 'fire',
    preEvo: true,
    summary: 'Fire and security system installation work covering fire-alarm equipment, field devices, armoured cabling and associated control and security-system components.',
    challenge: 'The project required coordinated installation of fire-detection, notification, cabling and related control-system hardware within a major building project.',
    scope: ['Fire alarm system equipment installation', 'Smoke and heat detector installation', 'Fire switch, strobe and fire telephone installation', 'Armoured cable laying', 'Relay and controller module installation', 'Mimic panel and access-control related installation'],
    technologies: ['Fire alarm system infrastructure', 'Fire detection field devices', 'Notification devices', 'Control and relay modules', 'Armoured cabling'],
    result: 'The archived evidence confirms the listed installation scope. No final commissioning or measured performance claim is made publicly.'
  },
  {
    archiveCode: 'P04',
    slug: 'cardinal-mixing-machine-automation',
    sourceId: 'nippon-paint-cardinal-mixing-machine-2021',
    title: 'Cardinal Mixing Machine Automation',
    category: 'INDUSTRIAL AUTOMATION',
    group: 'automation',
    period: '2021–2022 approx.',
    status: 'Completed',
    icon: 'automation',
    preEvo: true,
    summary: 'Custom industrial automation and control-panel work for a Cardinal mixing machine, combining purpose-built electrical control with machine-control integration.',
    challenge: 'The machine required a purpose-built control-panel solution and integrated electrical control for the mixing process.',
    scope: ['Custom industrial control-panel work', 'Machine-control integration for a Cardinal mixing machine', 'Electrical control and motor/drive-related integration'],
    technologies: ['Industrial electrical control', 'Motor/drive control', 'PLC/logic-based machine control'],
    result: 'The archived record confirms the custom control-panel and machine-control integration scope. No public performance figures are claimed.'
  },
  {
    archiveCode: 'P05',
    slug: 'automatic-tin-capping-machines',
    sourceId: 'automatic-tin-capping-machines-undated',
    title: 'Automatic Tin Capping Machines ×2',
    category: 'PACKAGING AUTOMATION',
    group: 'automation',
    period: 'Date not recorded',
    status: 'Completed',
    icon: 'packaging',
    summary: 'A custom machinery project involving two similar automatic tin capping machines for automated packaging operations.',
    challenge: 'The archive currently confirms the completion of two similar automatic tin capping machines; detailed process requirements and client context have not yet been documented.',
    scope: ['Custom machine work for two automatic tin capping machines'],
    technologies: ['Industrial automation', 'Packaging machinery'],
    result: 'Two similar automatic tin capping machines are confirmed as completed. Capacity, cycle time and detailed performance figures are not currently recorded.'
  },
  {
    archiveCode: 'P06',
    slug: 'twin-screw-conveyor-system',
    sourceId: 'bio-innovative-twin-screw-conveyors-undated',
    title: 'Twin Screw Conveyor System',
    category: 'MATERIAL HANDLING',
    group: 'automation',
    period: 'Date not recorded',
    status: 'Completed',
    icon: 'conveyor',
    summary: 'Custom fabrication and machinery work for a twin screw conveyor system used in industrial material handling.',
    challenge: 'The project required two screw conveyors to be fabricated as a custom material-handling solution. Detailed capacity and drive specifications are not yet recorded.',
    scope: ['Fabrication of two screw conveyors', 'Custom machinery work for the conveyor system'],
    technologies: ['Mechanical fabrication', 'Material-handling machinery'],
    result: 'The archive confirms fabrication of two screw conveyors. No unverified capacity, dimensions or performance figures are claimed.'
  },
  {
    archiveCode: 'P07',
    slug: 'pvc-pipe-automatic-sealing-machine',
    sourceId: 'pvc-pipe-automatic-sealing-machine-undated',
    title: 'PVC Pipe Automatic Sealing Machine',
    category: 'CUSTOM MACHINERY',
    group: 'automation',
    period: 'Date not recorded',
    status: 'Completed',
    icon: 'automation',
    summary: 'A custom automatic sealing machine developed for PVC pipe-related production or packaging operations.',
    challenge: 'The archive confirms an automatic sealing machine for PVC pipe-related work, while the exact process sequence and detailed engineering scope still require documentation.',
    scope: ['Custom automatic sealing machine project for PVC pipe-related operations'],
    technologies: ['Industrial automation', 'Custom machinery'],
    result: 'The completed machine is recorded in the archive without unverified claims about capacity, cycle time or performance.'
  },
  {
    archiveCode: 'P08',
    slug: 'jam-bottle-automatic-capping-machine',
    sourceId: 'jam-bottle-automatic-capping-machine-undated',
    title: 'Jam Bottle Automatic Capping Machine',
    category: 'FOOD PACKAGING AUTOMATION',
    group: 'automation',
    period: 'Date not recorded',
    status: 'Completed',
    icon: 'packaging',
    summary: 'A custom automatic capping machine developed for jam bottle packaging operations.',
    challenge: 'The project required automated bottle capping for a jam-packaging application. Detailed bottle, cap and production-rate data are not yet recorded.',
    scope: ['Custom automatic capping machine project for jam bottles'],
    technologies: ['Industrial automation', 'Packaging machinery'],
    result: 'The archive confirms completion of the automatic jam bottle capping machine. No unverified speed or capacity figures are claimed.'
  },
  {
    archiveCode: 'P09',
    slug: 'shampoo-bottle-sticker-labeling-machine',
    sourceId: 'shampoo-bottle-sticker-labeling-machine-undated',
    title: 'Shampoo Bottle Automatic Sticker Labeling Machine',
    category: 'LABELING AUTOMATION',
    group: 'automation',
    period: 'Date not recorded',
    status: 'Completed',
    icon: 'packaging',
    summary: 'A custom automatic sticker labeling machine developed for shampoo bottle packaging operations.',
    challenge: 'The machine addressed automatic sticker-label application for shampoo bottles; detailed label dimensions, bottle sizes and throughput are not yet recorded.',
    scope: ['Custom automatic sticker labeling machine project for shampoo bottles'],
    technologies: ['Industrial automation', 'Packaging machinery', 'Automatic labeling'],
    result: 'The archive confirms completion of the automatic sticker labeling machine without claiming unverified speed or accuracy figures.'
  },
  {
    archiveCode: 'P10',
    slug: 'wet-glue-labeling-machine',
    sourceId: 'wet-glue-labeling-machine-undated',
    title: 'Wet Glue Labeling Machine',
    category: 'LABELING AUTOMATION',
    group: 'automation',
    period: 'Date not recorded',
    status: 'Completed',
    icon: 'packaging',
    summary: 'A custom wet-glue labeling machine developed for automated product labeling operations.',
    challenge: 'The archive confirms a custom wet-glue labeling machine, while exact product format, label dimensions and production-rate requirements are not yet documented.',
    scope: ['Custom wet-glue labeling machine project'],
    technologies: ['Industrial automation', 'Packaging machinery', 'Wet-glue labeling'],
    result: 'The machine is recorded as completed. No unverified container, label, speed or accuracy figures are claimed.'
  },
  {
    archiveCode: 'P11',
    slug: 'flood-damaged-industrial-machinery-recovery',
    sourceId: 'asian-group-flood-machinery-recovery-2025',
    title: 'Flood-Damaged Industrial Machinery Recovery',
    category: 'MACHINERY RECOVERY',
    group: 'machinery',
    period: '2025–2026',
    status: 'Completed',
    icon: 'recovery',
    summary: 'Large-scale recovery, troubleshooting and recommissioning work across multiple flood-affected woodworking and production machines.',
    challenge: 'Multiple industrial machines and their electrical/electronic control systems were affected by flood water and moisture, requiring inspection, fault finding, repair, servicing and selective component replacement.',
    scope: ['Flood-damaged machinery inspection and recovery', 'Electrical and electronic troubleshooting', 'VFD, contactor, servo and induction-motor service work', 'Panel-board and machine-control system repair', 'Repair work across CNC, edge-banding, table-saw and other production machinery', 'Recommissioning work where completed'],
    technologies: ['Industrial motor control', 'Variable-frequency drives', 'Servo systems', 'CNC machine controls', 'Industrial control panels'],
    result: 'A broad recovery and repair program was carried out across multiple affected machines. Final operational status remains tracked machine-by-machine rather than generalized across the whole site.'
  },
  {
    archiveCode: 'P12',
    slug: 'three-spindle-cnc-router-modernization',
    sourceId: 'asian-group-xk45mt-3b-cnc-modernization-2026',
    title: 'Three-Spindle CNC Router Modernization',
    category: 'CNC MODERNIZATION',
    group: 'machinery',
    period: '2025–2026',
    status: 'Completed',
    icon: 'cnc',
    summary: 'Modernization of an approximately 25-year-old three-spindle CNC router, replacing the legacy NCStudio control approach with Mach3 and rebuilding the surrounding control integration.',
    challenge: 'An aging CNC router required control-system modernization and restoration, including a maintainable replacement for the legacy control platform and repair of related spindle, drive, electrical and pneumatic systems.',
    scope: ['NCStudio to Mach3 control-system conversion', 'Control-panel redesign and rewiring', 'Motion-control and interface integration', 'Three VFD and spindle-system setup, service or repair as required', 'Electrical and pneumatic repair', 'Machine calibration, testing and recommissioning'],
    technologies: ['Mach3 CNC control', 'CNC motion control', 'Variable-frequency drives', 'Industrial control-panel wiring', 'Machine calibration'],
    result: 'The machine was converted to Mach3, calibrated, tested and handed over in working condition.'
  },
  {
    archiveCode: 'P13',
    slug: 'cncbuild-1530-fault-diagnosis-repair',
    sourceId: 'asian-group-cncbuild-1530-cnc-diagnosis-2026',
    title: 'CNCBUILD 1530 CNC Fault Diagnosis & Repair',
    category: 'CNC TROUBLESHOOTING',
    group: 'machinery',
    period: '2026',
    status: 'Ongoing',
    icon: 'cnc',
    summary: 'Ongoing diagnosis of an unresolved X/Y-axis stopping or sticking fault on a CNCBUILD 1530 CNC router using a SYNTEC 6MD control system.',
    challenge: 'The CNC router can become stuck or stop on the X and Y axes. Previous repair attempts did not resolve the issue, and detailed root-cause diagnosis remains in progress.',
    scope: ['CNC machine fault diagnosis', 'X-axis fault investigation', 'Y-axis fault investigation', 'Electrical, control and motion-system troubleshooting as required', 'Repair and recommissioning scope to be defined after diagnosis'],
    technologies: ['SYNTEC 6MD CNC control', 'CNC motion-control systems', 'Industrial servo/motion systems', 'Industrial machine electrical systems'],
    result: 'Project ongoing. No root cause, repair method or final operational outcome is claimed before diagnosis is completed.',
    currentStatus: ['Fault condition recorded', 'Root-cause diagnosis pending', 'Repair scope pending', 'Final recommissioning pending']
  },
  {
    archiveCode: 'P14',
    slug: 'server-room-rack-cable-management',
    sourceId: 'british-school-colombo-server-room-rack-cable-management-2026',
    title: 'Server Room Rack & Cable Management',
    category: 'NETWORK INFRASTRUCTURE',
    group: 'network-building',
    period: '2026',
    status: 'Completed',
    icon: 'rack',
    summary: 'Server-room rack reorganization focused on cleaner patch-cord routing, cable management and a more orderly, serviceable layout without redesigning the existing network.',
    challenge: 'The existing server-room rack had congested and disorganized cabling that needed physical cleanup and improved routing while keeping the existing network design intact.',
    scope: ['Existing rack neatening', 'Patch-cord reorganization', 'Cable routing and cable management', 'Rack equipment arrangement cleanup', 'Reorganization of existing connections without network redesign'],
    technologies: ['Network rack organization', 'Structured cabling', 'Patch-cord management', 'Server-room cable management'],
    result: 'The rack and patching were reorganized into a substantially cleaner and more orderly physical layout, improving serviceability and cable organization.'
  },
  {
    archiveCode: 'P15',
    slug: 'legacy-myhome-smart-home-recovery',
    sourceId: 'kollupitiya-residence-myhome-recovery-modernization-2026',
    title: 'Legacy MyHOME Smart Home Recovery & Modernization',
    category: 'SMART LIVING + BUILDING AUTOMATION',
    group: 'smart-living',
    period: '2026',
    status: 'Ongoing',
    icon: 'smart-home',
    summary: 'Ongoing multi-floor recovery and modernization of a legacy Legrand / BTicino MyHOME automation system, including reverse engineering, device mapping, fault diagnosis, panel restoration and staged recommissioning.',
    challenge: 'An aging multi-floor MyHOME installation had incomplete legacy documentation and no usable original project file, requiring device discovery, physical verification, mapping, fault tracing and staged recovery before modernization.',
    scope: ['Existing MyHOME SCS BUS system reverse engineering and recovery', 'Bus scanning, device identification and address recovery', 'Room-by-room switch, relay and light-point mapping', 'Presence-sensor and dimmer/relay verification', 'Panel-board cleaning, identification and fault tracing', 'Floor-by-floor recommissioning and modernization planning'],
    technologies: ['Legrand / BTicino MyHOME SCS BUS', 'MH202', 'F411/4 relay actuators', 'F420 dimming', 'F422 BUS interfaces', 'Presence sensors'],
    result: 'Ground Floor and 3rd Floor main recovery stages are completed. 1st Floor, 2nd Floor and planned new-device integration remain pending, so the overall project is still ongoing.',
    currentStatus: ['Ground Floor main recovery — Completed', '3rd Floor main recovery — Completed', '1st Floor recovery — Pending', '2nd Floor recovery — Pending', 'New-device integration — Pending']
  }
];

const featuredSourceIds = [
  'asian-group-xk45mt-3b-cnc-modernization-2026',
  'asian-group-flood-machinery-recovery-2025',
  'dscsc-network-cctv-2018',
  'british-school-colombo-server-room-rack-cable-management-2026'
];

export const homepageProjects = featuredSourceIds
  .map((sourceId) => portfolioProjects.find((project) => project.sourceId === sourceId))
  .filter((project): project is PortfolioProject => Boolean(project));
