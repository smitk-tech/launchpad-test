import { DashboardEmptyCard } from '@/components/dashboard/DashboardEmptyCard'
import { DashboardHeader } from '@/components/dashboard/DashboardHeader'
import { MobileFrame } from '@/components/common/MobileFrame'
import { Button } from '@/components/ui/button'
import { DASHBOARD_COPY } from '@/const/dashboard/dashboard.const'
import exportIcon from '@/assets/Left icon wrapper.svg'

export function MobileDashboardPage() {
  return (
    <MobileFrame>
      <DashboardHeader />
      <div className="flex min-h-0 w-full flex-1 flex-col gap-6 px-4 py-4">
        <div className="flex w-full max-w-[361px] flex-row items-start justify-between gap-6">
          <div className="flex w-[198px] flex-col gap-1">
            <h1 className="text-base font-normal leading-6 text-foreground">
              {DASHBOARD_COPY.title}
            </h1>
            <p className="text-sm leading-[21px] text-[color:var(--brand-muted-text)]">
              {DASHBOARD_COPY.subtitle}
            </p>
          </div>
          <Button
            type="button"
            variant="default"
            className="relative h-8 w-[139px] shrink-0 gap-0 rounded-lg px-0 py-0 opacity-50"
            aria-label={DASHBOARD_COPY.exportReport}
          >
            <img
              src={exportIcon}
              alt=""
              width={13}
              height={13}
              className="absolute left-3 top-[9px] size-[13px]"
            />
            <span className="absolute left-[31px] top-[6px] block w-24 text-center text-sm font-normal leading-[21px] text-primary-foreground">
              {DASHBOARD_COPY.exportReport}
            </span>
          </Button>
        </div>
        <DashboardEmptyCard />
      </div>
    </MobileFrame>
  )
}
