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
  rowActionsMenu: {
    edit: 'Edit',
    suspend: 'Suspend',
    openMenu: 'Open row actions',
  },
  timeRangeMenu: {
    openMenu: 'Time period',
  },
} as const

export const TIME_RANGE_OPTIONS = [
  { id: 'allTime', label: 'All Time' },
  { id: 'last24Hours', label: 'Last 24 hours' },
  { id: 'last7Days', label: 'Last 7 days' },
  { id: 'last30Days', label: 'Last 30 days' },
  { id: 'last3Months', label: 'Last 3 months' },
  { id: 'last6Months', label: 'Last 6 months' },
  { id: 'lastYear', label: 'Last Year' },
  { id: 'customRange', label: 'Custom Range' },
] as const

export type TimeRangeOptionId = (typeof TIME_RANGE_OPTIONS)[number]['id']

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
