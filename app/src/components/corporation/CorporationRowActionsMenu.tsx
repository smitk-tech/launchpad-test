import editIcon from '@/assets/I18-13571_2061-18533_65-5200.svg'
import suspendIcon from '@/assets/I18-13571_2061-18534_19-3055.svg'
import { Button } from '@/components/ui/button'
import { CORPORATION_DIRECTORY_COPY } from '@/const/corporation/corporationDirectory.const'
import { cn } from '@/lib/utils'
import { MoreHorizontal } from 'lucide-react'
import { useEffect, useId, useRef, useState } from 'react'

type CorporationRowActionsMenuProps = {
  rowName: string
  className?: string
}

export function CorporationRowActionsMenu({
  rowName,
  className,
}: CorporationRowActionsMenuProps) {
  const copy = CORPORATION_DIRECTORY_COPY.rowActionsMenu
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const menuId = useId()

  useEffect(() => {
    if (!open) return
    const handlePointerDown = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('pointerdown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [open])

  const handleToggle = () => setOpen((v) => !v)

  const handleEdit = () => {
    setOpen(false)
  }

  const handleSuspend = () => {
    setOpen(false)
  }

  return (
    <div ref={rootRef} className={cn('relative inline-flex', className)}>
      <Button
        type="button"
        variant="ghost"
        size="icon"
        className="size-8 text-[color:var(--brand-icon-teal)]"
        aria-label={`${copy.openMenu}: ${rowName}`}
        aria-expanded={open}
        aria-haspopup="menu"
        aria-controls={open ? menuId : undefined}
        onClick={handleToggle}
      >
        <MoreHorizontal className="size-4" />
      </Button>

      {open ? (
        <div
          id={menuId}
          role="menu"
          className="absolute top-full right-0 z-50 mt-1 box-border flex h-[72px] w-40 flex-row items-start justify-start gap-1.5 rounded-lg border border-border bg-card p-0.5 shadow-md"
        >
          <div className="box-border flex h-[68px] w-[156px] shrink-0 flex-col items-start justify-start p-0">
            <div className="box-border flex h-[68px] w-[156px] shrink-0 flex-col items-start justify-start gap-0 p-0.5">
              <button
                type="button"
                role="menuitem"
                className="box-border flex h-8 w-[152px] shrink-0 flex-row items-center gap-2 rounded-md bg-secondary py-[5.5px] pr-2 pl-2 text-left text-sm leading-[21px] text-foreground outline-none hover:bg-secondary focus-visible:ring-2 focus-visible:ring-ring"
                onClick={handleEdit}
              >
                <img
                  src={editIcon}
                  alt=""
                  width={20}
                  height={20}
                  className="size-5 shrink-0"
                />
                <span className="h-[21px] w-[26px] shrink-0 leading-[21px]">
                  {copy.edit}
                </span>
              </button>
              <button
                type="button"
                role="menuitem"
                className="box-border flex h-8 w-[152px] shrink-0 flex-row items-center gap-2 rounded-md bg-transparent py-[5.5px] pr-2 pl-2 text-left text-sm leading-[21px] text-destructive outline-none hover:bg-muted/80 focus-visible:ring-2 focus-visible:ring-ring"
                onClick={handleSuspend}
              >
                <img
                  src={suspendIcon}
                  alt=""
                  width={20}
                  height={20}
                  className="size-5 shrink-0"
                />
                <span className="h-[21px] w-[59px] shrink-0 leading-[21px]">
                  {copy.suspend}
                </span>
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}
