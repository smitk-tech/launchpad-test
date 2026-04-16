export const CORPORATION_DIRECTORY_COPY = {
  pageTitle: 'Corporation Directory',
  addCorporation: 'Add New Corporation',
  searchPlaceholder: 'Search corporations…',
  statusFilter: 'Status',
  timePeriod: 'Time period',
  table: {
    corporation: 'Corporation',
    status: 'Status',
    seats: 'Seats',
    usage: 'Usage',
    period: 'Billing period',
    actions: 'Actions',
  },
  pagination: {
    showing: 'Showing',
    of: 'of',
    rows: 'rows',
    previous: 'Previous',
    next: 'Next',
  },
} as const

export type CorporationRow = {
  id: string
  name: string
  status: 'Active' | 'Trial' | 'Suspended'
  seats: string
  usagePercent: number
  periodLabel: string
}

export const MOCK_CORPORATIONS: CorporationRow[] = [
  {
    id: '1',
    name: 'Northwind Health',
    status: 'Active',
    seats: '120 / 150',
    usagePercent: 72,
    periodLabel: 'Jan 2026 – Dec 2026',
  },
  {
    id: '2',
    name: 'Aurora Clinics',
    status: 'Trial',
    seats: '45 / 50',
    usagePercent: 38,
    periodLabel: 'Feb 2026 – Jan 2027',
  },
  {
    id: '3',
    name: 'Summit Diagnostics',
    status: 'Active',
    seats: '200 / 200',
    usagePercent: 100,
    periodLabel: 'Jan 2026 – Dec 2026',
  },
  {
    id: '4',
    name: 'Harbor Wellness',
    status: 'Suspended',
    seats: '0 / 80',
    usagePercent: 0,
    periodLabel: '—',
  },
]
