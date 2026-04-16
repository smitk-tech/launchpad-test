import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

type MobileFrameProps = {
  children: ReactNode
  className?: string
}

/** 393×852 mobile canvas per Figma */
export function MobileFrame({ children, className }: MobileFrameProps) {
  return (
    <div
      className={cn(
        'mx-auto flex min-h-[852px] w-full max-w-[393px] flex-col bg-background',
        className,
      )}
    >
      {children}
    </div>
  )
}
