import logoSrc from '@/assets/Logo Wrapper.svg'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  CORPORATION_DIRECTORY_COPY,
  CORPORATION_TABLE_ROWS,
  SIDEBAR_GROUPS,
  type CorporationRow,
} from '@/const/corporations/corporations.const'
import { cn } from '@/lib/utils'
import {
  ArrowUpDown,
  BarChart3,
  Bell,
  Building,
  Building2,
  ChevronDown,
  ClipboardList,
  DollarSign,
  KeyRound,
  LayoutDashboard,
  MapPin,
  MoreHorizontal,
  Plus,
  Search,
  Settings,
  Shield,
  User,
  Users,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const SIDEBAR_ICONS: Record<(typeof SIDEBAR_GROUPS)[number]['items'][number]['icon'], LucideIcon> =
  {
    layoutDashboard: LayoutDashboard,
    building2: Building2,
    building: Building,
    mapPin: MapPin,
    users: Users,
    shield: Shield,
    bell: Bell,
    clipboardList: ClipboardList,
    keyRound: KeyRound,
    dollarSign: DollarSign,
    barChart3: BarChart3,
    settings: Settings,
  }

function StatusBadge({ status }: { status: CorporationRow['status'] }) {
  if (status.kind === 'active') {
    return (
      <span className="inline-flex rounded-md bg-[color:var(--status-success)] px-2 py-0.5 text-xs font-medium leading-[18px] text-[color:var(--status-success-foreground)]">
        Active
      </span>
    )
  }
  if (status.kind === 'incomplete') {
    return (
      <div className="inline-flex min-w-0 flex-col gap-1">
        <span className="inline-flex w-fit rounded-md bg-[color:var(--status-incomplete)] px-2 py-0.5 text-xs font-medium leading-[18px] text-[color:var(--status-incomplete-foreground)]">
          Incomplete ({status.percent}%)
        </span>
        <div className="h-1 w-full max-w-24 overflow-hidden rounded-full bg-border">
          <div
            className="h-full rounded-full bg-destructive"
            style={{ width: `${status.percent}%` }}
          />
        </div>
      </div>
    )
  }
  if (status.kind === 'suspended') {
    return (
      <span className="inline-flex rounded-md bg-[color:var(--status-warning)] px-2 py-0.5 text-xs font-medium leading-[18px] text-[color:var(--status-warning-foreground)]">
        Suspended
      </span>
    )
  }
  return (
    <span className="inline-flex rounded-md bg-destructive px-2 py-0.5 text-xs font-medium leading-[18px] text-destructive-foreground">
      Closed
    </span>
  )
}

function SortableHeader({ children }: { children: string }) {
  return (
    <div className="flex h-10 min-w-0 items-center gap-1 border-b border-border bg-muted px-3">
      <span className="truncate text-xs font-medium leading-[18px] text-foreground">
        {children}
      </span>
      <ArrowUpDown className="size-3 shrink-0 text-muted-foreground" aria-hidden />
    </div>
  )
}

export function CorporationDirectoryPage() {
  const totalResults = 80
  const shown = CORPORATION_TABLE_ROWS.length

  return (
    <div className="flex min-h-dvh w-full bg-background">
      <aside
        className="flex w-sidebar shrink-0 flex-col border-r border-border bg-card"
        aria-label="Main navigation"
      >
        <div className="flex h-[60px] shrink-0 items-center border-b border-border px-0">
          <img
            src={logoSrc}
            alt=""
            className="h-[60px] w-full max-w-none object-left object-contain pl-0"
            width={393}
            height={60}
          />
        </div>
        <nav className="flex min-h-0 flex-1 flex-col gap-6 overflow-y-auto px-3 py-6">
          {SIDEBAR_GROUPS.map((group) => (
            <div key={group.label} className="flex flex-col gap-2">
              <p className="px-3 text-xs font-medium leading-[18px] text-[color:var(--brand-teal)]">
                {group.label}
              </p>
              <ul className="flex flex-col gap-1">
                {group.items.map((item) => {
                  const Icon = SIDEBAR_ICONS[item.icon]
                  const isActive = item.id === 'corporations'
                  return (
                    <li key={item.id}>
                      <button
                        type="button"
                        className={cn(
                          'flex w-full items-center gap-3 rounded-md px-3 py-2 text-left text-sm font-normal leading-[21px] transition-colors',
                          isActive
                            ? 'bg-[color:var(--sidebar-active-bg)] text-[color:var(--sidebar-active-foreground)]'
                            : 'text-foreground hover:bg-muted',
                        )}
                      >
                        <Icon
                          className={cn(
                            'size-4 shrink-0',
                            isActive
                              ? 'text-[color:var(--sidebar-active-foreground)]'
                              : 'text-[color:var(--sidebar-icon)]',
                          )}
                          aria-hidden
                        />
                        <span className="min-w-0 flex-1 truncate">{item.label}</span>
                        {'badge' in item && item.badge ? (
                          <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1.5 text-xs font-medium leading-none text-primary-foreground">
                            {item.badge}
                          </span>
                        ) : null}
                      </button>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </nav>
      </aside>

      <div className="flex min-h-0 min-w-0 flex-1 flex-col">
        <header className="flex h-header shrink-0 items-center justify-between border-b border-border bg-card px-6">
          <span className="text-sm font-medium leading-[21px] text-foreground">
            {CORPORATION_DIRECTORY_COPY.breadcrumb}
          </span>
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="flex size-10 items-center justify-center rounded-md text-[color:var(--sidebar-icon)] hover:bg-muted"
              aria-label="Notifications"
            >
              <Bell className="size-5" />
            </button>
            <div className="h-6 w-px bg-border" aria-hidden />
            <div className="flex size-9 items-center justify-center overflow-hidden rounded-full bg-muted">
              <User className="size-5 text-muted-foreground" aria-hidden />
            </div>
          </div>
        </header>

        <main className="min-h-0 flex-1 overflow-auto px-6 py-6">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex max-w-xl flex-col gap-1">
                <h1 className="text-2xl font-semibold leading-8 text-foreground">
                  {CORPORATION_DIRECTORY_COPY.pageTitle}
                </h1>
                <p className="text-sm leading-[21px] text-[color:var(--brand-muted-text)]">
                  {CORPORATION_DIRECTORY_COPY.pageSubtitle}
                </p>
              </div>
              <Button
                type="button"
                variant="default"
                className="h-10 shrink-0 gap-2 rounded-lg px-4"
              >
                <Plus className="size-4" aria-hidden />
                {CORPORATION_DIRECTORY_COPY.addButton}
              </Button>
            </div>

            <div className="rounded-lg border border-border bg-card shadow-sm">
              <div className="flex flex-col gap-4 border-b border-border p-4 sm:flex-row sm:flex-wrap sm:items-center">
                <div className="relative min-w-0 flex-1 sm:max-w-md">
                  <Search
                    className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
                    aria-hidden
                  />
                  <Input
                    type="search"
                    placeholder={CORPORATION_DIRECTORY_COPY.searchPlaceholder}
                    className="h-10 rounded-md border-input bg-card pl-9"
                    aria-label="Search corporations"
                  />
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <button
                    type="button"
                    className="flex h-10 min-w-40 items-center justify-between gap-2 rounded-md border border-input bg-card px-3 text-left text-sm text-foreground shadow-sm hover:bg-muted/50"
                  >
                    <span className="truncate">{CORPORATION_DIRECTORY_COPY.filterStatus}</span>
                    <ChevronDown className="size-4 shrink-0 text-muted-foreground" aria-hidden />
                  </button>
                  <button
                    type="button"
                    className="flex h-10 min-w-40 items-center justify-between gap-2 rounded-md border border-input bg-card px-3 text-left text-sm text-foreground shadow-sm hover:bg-muted/50"
                  >
                    <span className="truncate">{CORPORATION_DIRECTORY_COPY.filterPeriod}</span>
                    <ChevronDown className="size-4 shrink-0 text-muted-foreground" aria-hidden />
                  </button>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full min-w-[960px] border-collapse text-left text-sm">
                  <thead>
                    <tr>
                      <th className="p-0 align-top font-normal">
                        <SortableHeader>Corporation ID</SortableHeader>
                      </th>
                      <th className="p-0 align-top font-normal">
                        <SortableHeader>Corporation Name</SortableHeader>
                      </th>
                      <th className="p-0 align-top font-normal">
                        <SortableHeader>Status</SortableHeader>
                      </th>
                      <th className="p-0 align-top font-normal">
                        <SortableHeader>Corp. Admin</SortableHeader>
                      </th>
                      <th className="p-0 align-top font-normal">
                        <SortableHeader>No. of Companies</SortableHeader>
                      </th>
                      <th className="p-0 align-top font-normal">
                        <SortableHeader>Created On</SortableHeader>
                      </th>
                      <th className="p-0 align-top font-normal">
                        <SortableHeader>Actions</SortableHeader>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {CORPORATION_TABLE_ROWS.map((row) => (
                      <tr key={row.id} className="border-b border-border last:border-b-0">
                        <td className="px-3 py-3 align-middle text-sm leading-[21px] text-foreground">
                          {row.id}
                        </td>
                        <td className="px-3 py-3 align-middle">
                          <div className="flex min-w-0 flex-col gap-0.5">
                            <span className="truncate text-sm font-medium leading-[21px] text-foreground">
                              {row.name}
                            </span>
                            <span className="truncate text-xs leading-[18px] text-muted-foreground">
                              {row.region}
                            </span>
                          </div>
                        </td>
                        <td className="px-3 py-3 align-middle">
                          <StatusBadge status={row.status} />
                        </td>
                        <td className="px-3 py-3 align-middle">
                          <div className="flex min-w-0 flex-col gap-0.5">
                            <span className="truncate text-sm font-medium leading-[21px] text-foreground">
                              {row.adminName}
                            </span>
                            <span className="truncate text-xs leading-[18px] text-muted-foreground">
                              {row.adminEmail}
                            </span>
                          </div>
                        </td>
                        <td className="px-3 py-3 align-middle text-sm leading-[21px] text-foreground">
                          {row.companyCount}
                        </td>
                        <td className="px-3 py-3 align-middle text-sm leading-[21px] text-foreground">
                          {row.createdOn}
                        </td>
                        <td className="px-3 py-3 align-middle">
                          <button
                            type="button"
                            className="inline-flex size-9 items-center justify-center rounded-md text-muted-foreground hover:bg-muted hover:text-foreground"
                            aria-label="More options"
                          >
                            <MoreHorizontal className="size-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="flex flex-col gap-4 border-t border-border p-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm leading-[21px] text-muted-foreground">
                  {CORPORATION_DIRECTORY_COPY.showingResults(shown, totalResults)}
                </p>
                <nav
                  className="flex flex-wrap items-center gap-1"
                  aria-label="Pagination"
                >
                  <Button type="button" variant="secondary" size="sm" className="h-9 px-3">
                    Previous
                  </Button>
                  <Button type="button" variant="default" size="sm" className="h-9 min-w-9 px-0">
                    1
                  </Button>
                  <Button type="button" variant="ghost" size="sm" className="h-9 min-w-9 px-0">
                    2
                  </Button>
                  <Button type="button" variant="ghost" size="sm" className="h-9 min-w-9 px-0">
                    3
                  </Button>
                  <Button type="button" variant="ghost" size="sm" className="h-9 min-w-9 px-0">
                    4
                  </Button>
                  <span className="px-2 text-sm text-muted-foreground" aria-hidden>
                    …
                  </span>
                  <Button type="button" variant="ghost" size="sm" className="h-9 min-w-9 px-0">
                    10
                  </Button>
                  <Button type="button" variant="secondary" size="sm" className="h-9 px-3">
                    Next
                  </Button>
                </nav>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
