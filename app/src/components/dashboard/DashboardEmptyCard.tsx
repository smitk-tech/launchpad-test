import { DASHBOARD_COPY } from '@/const/dashboard/dashboard.const'
import emptyIcon from '@/assets/Empty Decorative Icon.svg'

export function DashboardEmptyCard() {
  return (
    <div className="relative h-[666px] w-full max-w-[361px] overflow-hidden rounded-xl border border-border bg-card">
      <div className="absolute left-[141px] top-[243px] size-20 overflow-hidden rounded-2xl bg-secondary">
        <img
          src={emptyIcon}
          alt=""
          width={80}
          height={80}
          className="size-20"
        />
      </div>
      <div className="absolute left-6 top-[347px] flex w-[313px] flex-col gap-2.5">
        <p className="text-center text-xl font-normal leading-6 text-foreground">
          {DASHBOARD_COPY.emptyTitle}
        </p>
        <p className="text-center text-sm leading-[21px] text-[color:var(--brand-teal)]">
          {DASHBOARD_COPY.emptyDescription}
        </p>
      </div>
    </div>
  )
}
