import logoBar from '@/assets/Logo Wrapper.svg'

export function DashboardHeader() {
  return (
    <header className="flex h-[60px] w-full shrink-0 items-center justify-center border-b border-border bg-card">
      <img
        src={logoBar}
        alt=""
        width={393}
        height={60}
        className="h-[60px] w-full max-w-[393px] object-cover object-center"
      />
    </header>
  )
}
