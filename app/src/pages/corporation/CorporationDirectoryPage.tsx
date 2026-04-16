import logoMark from '@/assets/Logo Wrapper.svg'
import addIcon from '@/assets/Left icon wrapper.svg'
import { CorporationRowActionsMenu } from '@/components/corporation/CorporationRowActionsMenu'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  CORPORATION_DIRECTORY_COPY,
  MOCK_CORPORATIONS,
  type CorporationRow,
} from '@/const/corporation/corporationDirectory.const'
import { cn } from '@/lib/utils'
import {
  ArrowUpDown,
  BarChart3,
  Bell,
  BookOpen,
  Briefcase,
  Building2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CreditCard,
  FileText,
  GraduationCap,
  HelpCircle,
  LayoutDashboard,
  Mail,
  MoreHorizontal,
  Search,
  Settings,
  Shield,
  Ticket,
  Users,
} from 'lucide-react'

const SIDEBAR_NAV = [
  { label: 'Dashboard', icon: LayoutDashboard },
  { label: 'Corporation Directory', icon: Building2, active: true },
  { label: 'Company Directory', icon: Briefcase },
  { label: 'User Directory', icon: Users },
  { label: 'Roles & Permissions', icon: Shield },
  { label: 'Coaches', icon: GraduationCap },
  { label: 'Plans & Pricing', icon: CreditCard },
  { label: 'Billing Management', icon: CreditCard },
  { label: 'Invoice Management', icon: FileText },
  { label: 'Promo Code Management', icon: Ticket },
  { label: 'Invite Management', icon: Mail },
  { label: 'Introduction & Instructions', icon: BookOpen },
  { label: 'Question Bank', icon: HelpCircle },
  { label: 'Assessment Results', icon: BarChart3 },
  { label: 'Reports', icon: BarChart3 },
] as const

function StatusPill({ status }: { status: CorporationRow['status'] }) {
  const styles: Record<CorporationRow['status'], string> = {
    Active: 'bg-secondary text-secondary-foreground',
    Trial: 'bg-muted text-[color:var(--brand-muted-text)]',
    Suspended: 'bg-destructive/10 text-destructive',
  }
  return (
    <span
      className={cn(
        'inline-flex rounded-md px-2 py-0.5 text-xs font-medium leading-5',
        styles[status],
      )}
    >
      {status}
    </span>
  )
}

function UsageBar({ value }: { value: number }) {
  return (
    <div
      className="h-2 w-full max-w-[120px] overflow-hidden rounded-full bg-muted"
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className="h-full rounded-full bg-primary transition-[width]"
        style={{ width: `${value}%` }}
      />
    </div>
  )
}

export function CorporationDirectoryPage() {
  const copy = CORPORATION_DIRECTORY_COPY

  return (
    <div className="flex min-h-dvh w-full bg-background text-foreground">
      <aside className="flex w-[260px] shrink-0 flex-col border-r border-border bg-card">
        <div className="flex h-14 items-center border-b border-border px-4">
          <img
            src={logoMark}
            alt=""
            className="h-[30px] w-auto max-w-[180px] object-contain object-left"
          />
        </div>
        <nav
          className="flex min-h-0 flex-1 flex-col gap-1 overflow-y-auto p-3"
          aria-label="Main"
        >
          {SIDEBAR_NAV.map((item) => {
            const { label, icon: Icon } = item
            const isActive = 'active' in item && item.active === true
            return (
            <button
              key={label}
              type="button"
              className={cn(
                'flex w-full items-center gap-3 rounded-md px-3 py-2 text-left text-sm leading-5 transition-colors',
                isActive
                  ? 'bg-secondary font-medium text-foreground'
                  : 'text-[color:var(--brand-muted-text)] hover:bg-muted/80 hover:text-foreground',
              )}
            >
              <Icon
                className="size-[18px] shrink-0 text-[color:var(--sidebar-icon)]"
                strokeWidth={1.75}
                aria-hidden
              />
              <span className="min-w-0 truncate">{label}</span>
            </button>
            )
          })}
        </nav>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-14 shrink-0 items-center justify-between border-b border-border bg-card px-6">
          <div className="flex min-w-0 items-center gap-3">
            <div
              className="hidden h-8 w-8 shrink-0 rounded-md border border-border bg-muted sm:block"
              aria-hidden
            />
            <div className="h-px w-px shrink-0 bg-border sm:hidden" />
            <span className="truncate text-sm font-medium leading-5 text-[color:var(--brand-muted-text)]">
              Admin
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="text-[color:var(--brand-icon-teal)]"
              aria-label="Notifications"
            >
              <Bell className="size-5" strokeWidth={1.75} />
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="text-[color:var(--brand-icon-teal)]"
              aria-label="Settings"
            >
              <Settings className="size-5" strokeWidth={1.75} />
            </Button>
            <div
              className="ml-1 size-9 shrink-0 rounded-full border border-border bg-muted"
              role="img"
              aria-label="Profile"
            />
          </div>
        </header>

        <main className="flex min-h-0 flex-1 flex-col gap-6 p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="min-w-0">
              <h1 className="text-lg font-semibold leading-7 text-foreground">
                {copy.pageTitle}
              </h1>
              <p className="mt-1 text-sm leading-5 text-[color:var(--brand-muted-text)]">
                Manage corporations, seats, and billing periods.
              </p>
            </div>
            <Button
              type="button"
              variant="default"
              className="relative h-10 shrink-0 gap-0 rounded-lg px-0 pr-4 pl-11"
            >
              <img
                src={addIcon}
                alt=""
                width={13}
                height={13}
                className="pointer-events-none absolute left-3 top-1/2 size-[13px] -translate-y-1/2"
              />
              <span className="text-sm font-medium leading-5 text-primary-foreground">
                {copy.addCorporation}
              </span>
            </Button>
          </div>

          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div className="relative w-full max-w-md">
              <Search
                className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[color:var(--brand-icon-teal)]"
                strokeWidth={1.75}
                aria-hidden
              />
              <Input
                placeholder={copy.searchPlaceholder}
                className="h-10 border-border bg-card pl-9 shadow-none"
                aria-label={copy.searchPlaceholder}
              />
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <label className="relative">
                <span className="sr-only">{copy.statusFilter}</span>
                <select
                  className={cn(
                    'h-10 min-w-[140px] appearance-none rounded-md border border-border bg-card py-2 pr-9 pl-3 text-sm text-foreground shadow-sm',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
                  )}
                  defaultValue="all"
                >
                  <option value="all">All statuses</option>
                  <option value="active">Active</option>
                  <option value="trial">Trial</option>
                  <option value="suspended">Suspended</option>
                </select>
                <ChevronDown
                  className="pointer-events-none absolute right-2.5 top-1/2 size-4 -translate-y-1/2 text-[color:var(--brand-icon-teal)]"
                  aria-hidden
                />
              </label>
              <label className="relative">
                <span className="sr-only">{copy.timePeriod}</span>
                <select
                  className={cn(
                    'h-10 min-w-[160px] appearance-none rounded-md border border-border bg-card py-2 pr-9 pl-3 text-sm text-foreground shadow-sm',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
                  )}
                  defaultValue="year"
                >
                  <option value="year">Last 12 months</option>
                  <option value="quarter">Last quarter</option>
                  <option value="month">Last month</option>
                </select>
                <ChevronDown
                  className="pointer-events-none absolute right-2.5 top-1/2 size-4 -translate-y-1/2 text-[color:var(--brand-icon-teal)]"
                  aria-hidden
                />
              </label>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg border border-border bg-card">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[720px] border-collapse text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/50">
                    <th className="px-4 py-3 text-left font-medium text-[color:var(--brand-muted-text)]">
                      <button
                        type="button"
                        className="inline-flex items-center gap-1.5 rounded-sm text-left hover:text-foreground"
                      >
                        {copy.table.corporation}
                        <ArrowUpDown className="size-3.5 opacity-70" />
                      </button>
                    </th>
                    <th className="px-4 py-3 text-left font-medium text-[color:var(--brand-muted-text)]">
                      <button
                        type="button"
                        className="inline-flex items-center gap-1.5 rounded-sm text-left hover:text-foreground"
                      >
                        {copy.table.status}
                        <ArrowUpDown className="size-3.5 opacity-70" />
                      </button>
                    </th>
                    <th className="px-4 py-3 text-left font-medium text-[color:var(--brand-muted-text)]">
                      <button
                        type="button"
                        className="inline-flex items-center gap-1.5 rounded-sm text-left hover:text-foreground"
                      >
                        {copy.table.seats}
                        <ArrowUpDown className="size-3.5 opacity-70" />
                      </button>
                    </th>
                    <th className="px-4 py-3 text-left font-medium text-[color:var(--brand-muted-text)]">
                      {copy.table.usage}
                    </th>
                    <th className="px-4 py-3 text-left font-medium text-[color:var(--brand-muted-text)]">
                      <button
                        type="button"
                        className="inline-flex items-center gap-1.5 rounded-sm text-left hover:text-foreground"
                      >
                        {copy.table.period}
                        <ArrowUpDown className="size-3.5 opacity-70" />
                      </button>
                    </th>
                    <th className="px-4 py-3 text-right font-medium text-[color:var(--brand-muted-text)]">
                      {copy.table.actions}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {MOCK_CORPORATIONS.map((row) => (
                    <tr
                      key={row.id}
                      className="border-b border-border last:border-b-0"
                    >
                      <td className="px-4 py-3 font-medium text-foreground">
                        {row.name}
                      </td>
                      <td className="px-4 py-3">
                        <StatusPill status={row.status} />
                      </td>
                      <td className="px-4 py-3 text-[color:var(--brand-muted-text)]">
                        {row.seats}
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-3">
                          <UsageBar value={row.usagePercent} />
                          <span className="tabular-nums text-[color:var(--brand-muted-text)]">
                            {row.usagePercent}%
                          </span>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-[color:var(--brand-muted-text)]">
                        {row.periodLabel}
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center justify-end">
                          <CorporationRowActionsMenu rowName={row.name} />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-[color:var(--brand-muted-text)]">
              {copy.pagination.showing}{' '}
              <span className="font-medium text-foreground">1–4</span>{' '}
              {copy.pagination.of}{' '}
              <span className="font-medium text-foreground">4</span>{' '}
              {copy.pagination.rows}
            </p>
            <div className="flex items-center gap-1">
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="size-9"
                aria-label={copy.pagination.previous}
              >
                <ChevronLeft className="size-4" />
              </Button>
              <Button
                type="button"
                variant="secondary"
                size="sm"
                className="min-w-9 px-2"
              >
                1
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="min-w-9 px-2"
              >
                2
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="size-9"
                aria-label="More pages"
              >
                <MoreHorizontal className="size-4" />
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="size-9"
                aria-label={copy.pagination.next}
              >
                <ChevronRight className="size-4" />
              </Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
