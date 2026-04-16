export const CORPORATION_DIRECTORY_COPY = {
  pageTitle: 'Corporations',
  pageSubtitle: 'View and manage all corporations across the platform',
  addButton: 'Add New Corporation',
  breadcrumb: 'Corporation Directory',
  searchPlaceholder: 'Search here...',
  filterStatus: 'All status',
  filterPeriod: 'Last 30 days',
  showingResults: (shown: number, total: number) =>
    `Showing ${shown} of ${total} results`,
} as const

export const SIDEBAR_GROUPS = [
  {
    label: 'Main',
    items: [
      { id: 'dashboard', label: 'Dashboard', icon: 'layoutDashboard' as const },
      {
        id: 'corporations',
        label: 'Corporation Directory',
        icon: 'building2' as const,
      },
      { id: 'companies', label: 'Company Directory', icon: 'building' as const },
      { id: 'locations', label: 'Location Directory', icon: 'mapPin' as const },
    ],
  },
  {
    label: 'Administration',
    items: [
      { id: 'users', label: 'User Management', icon: 'users' as const },
      { id: 'roles', label: 'Role Management', icon: 'shield' as const },
      {
        id: 'notifications',
        label: 'Notifications',
        icon: 'bell' as const,
        badge: '1',
      },
      { id: 'audit', label: 'Audit Log', icon: 'clipboardList' as const },
    ],
  },
  {
    label: 'Users & Access',
    items: [
      { id: 'access', label: 'Access Control', icon: 'keyRound' as const },
    ],
  },
  {
    label: 'Finance',
    items: [{ id: 'finance', label: 'Billing', icon: 'dollarSign' as const }],
  },
  {
    label: 'Assessments',
    items: [
      { id: 'assessments', label: 'Assessments', icon: 'clipboardList' as const },
    ],
  },
  {
    label: 'Insights',
    items: [{ id: 'insights', label: 'Reports', icon: 'barChart3' as const }],
  },
  {
    label: 'Configuration',
    items: [
      { id: 'settings', label: 'Settings', icon: 'settings' as const },
    ],
  },
] as const

export type CorporationRow = {
  id: string
  name: string
  region: string
  status:
    | { kind: 'active' }
    | { kind: 'incomplete'; percent: number }
    | { kind: 'suspended' }
    | { kind: 'closed' }
  adminName: string
  adminEmail: string
  companyCount: number
  createdOn: string
}

export const CORPORATION_TABLE_ROWS: CorporationRow[] = [
  {
    id: 'CORP-001',
    name: 'Acme Corporation',
    region: 'North America',
    status: { kind: 'active' },
    adminName: 'Alice Johnson',
    adminEmail: 'alice_j@acme.com',
    companyCount: 5,
    createdOn: '01-15-2025',
  },
  {
    id: 'CORP-002',
    name: 'Globex Industries',
    region: 'Europe',
    status: { kind: 'incomplete', percent: 25 },
    adminName: 'Bob Smith',
    adminEmail: 'bob@globex.com',
    companyCount: 10,
    createdOn: '02-01-2025',
  },
  {
    id: 'CORP-003',
    name: 'Initech LLC',
    region: 'Asia Pacific',
    status: { kind: 'suspended' },
    adminName: 'Carol White',
    adminEmail: 'carol@initech.com',
    companyCount: 15,
    createdOn: '12-10-2024',
  },
  {
    id: 'CORP-004',
    name: 'Umbrella Corp',
    region: 'Latin America',
    status: { kind: 'closed' },
    adminName: 'Dan Lee',
    adminEmail: 'dan@umbrella.com',
    companyCount: 8,
    createdOn: '11-05-2024',
  },
  {
    id: 'CORP-005',
    name: 'Stark Holdings',
    region: 'North America',
    status: { kind: 'active' },
    adminName: 'Eve Park',
    adminEmail: 'eve@stark.com',
    companyCount: 12,
    createdOn: '03-20-2025',
  },
  {
    id: 'CORP-006',
    name: 'Wayne Enterprises',
    region: 'Europe',
    status: { kind: 'active' },
    adminName: 'Frank Miller',
    adminEmail: 'frank@wayne.com',
    companyCount: 20,
    createdOn: '01-30-2025',
  },
  {
    id: 'CORP-007',
    name: 'Hooli',
    region: 'North America',
    status: { kind: 'incomplete', percent: 25 },
    adminName: 'Gina Torres',
    adminEmail: 'gina@hooli.com',
    companyCount: 3,
    createdOn: '04-01-2025',
  },
  {
    id: 'CORP-008',
    name: 'Pied Piper',
    region: 'North America',
    status: { kind: 'suspended' },
    adminName: 'Hank Green',
    adminEmail: 'hank@piedpiper.com',
    companyCount: 7,
    createdOn: '02-28-2025',
  },
]
