import { Button } from '@/components/ui/button'
import {
  CORPORATION_DIRECTORY_COPY,
  TIME_RANGE_OPTIONS,
  type TimeRangeOptionId,
} from '@/const/corporation/corporationDirectory.const'
import { cn } from '@/lib/utils'
import { ChevronDown } from 'lucide-react'
import { useEffect, useId, useRef, useState } from 'react'

type TimeRangeSelectMenuProps = {
  className?: string
}

export function TimeRangeSelectMenu({ className }: TimeRangeSelectMenuProps) {
  const copy = CORPORATION_DIRECTORY_COPY.timeRangeMenu
  const [open, setOpen] = useState(false)
  const [selectedId, setSelectedId] = useState<TimeRangeOptionId>('allTime')
  const rootRef = useRef<HTMLDivElement>(null)
  const menuId = useId()

  const selectedLabel =
    TIME_RANGE_OPTIONS.find((o) => o.id === selectedId)?.label ??
    TIME_RANGE_OPTIONS[0].label

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

  const handleSelect = (id: TimeRangeOptionId) => {
    setSelectedId(id)
    setOpen(false)
  }

  return (
    <div ref={rootRef} className={cn('relative inline-flex', className)}>
      <Button
        type="button"
        variant="ghost"
        className="h-10 min-w-[160px] justify-between gap-2 rounded-md border border-border bg-card px-3 py-2 text-sm font-normal text-foreground shadow-sm hover:bg-card"
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-controls={open ? menuId : undefined}
        aria-label={copy.openMenu}
        onClick={handleToggle}
      >
        <span className="min-w-0 truncate text-left">{selectedLabel}</span>
        <ChevronDown
          className="size-4 shrink-0 text-[color:var(--brand-icon-teal)]"
          aria-hidden
        />
      </Button>

      {open ? (
        <div
          id={menuId}
          role="listbox"
          aria-label={copy.openMenu}
          className="absolute top-full right-0 z-50 mt-1 box-border flex h-[264px] w-[250px] flex-row items-start justify-start gap-1.5 rounded-lg border border-border bg-card p-0.5 shadow-md"
        >
          <div className="box-border flex h-[260px] w-[246px] shrink-0 flex-col items-start justify-start gap-0 p-0.5">
            {TIME_RANGE_OPTIONS.map((opt) => {
              const isSelected = selectedId === opt.id
              return (
                <button
                  key={opt.id}
                  type="button"
                  role="option"
                  aria-selected={isSelected}
                  className={cn(
                    'box-border flex h-8 w-[242px] shrink-0 flex-row items-center rounded-md py-[5.5px] pr-2 pl-2 text-left text-sm leading-[21px] text-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring',
                    isSelected ? 'bg-secondary' : 'bg-transparent hover:bg-muted/80',
                  )}
                  onClick={() => handleSelect(opt.id)}
                >
                  <span className="h-[21px] min-w-0 leading-[21px]">{opt.label}</span>
                </button>
              )
            })}
          </div>
        </div>
      ) : null}
    </div>
  )
}
