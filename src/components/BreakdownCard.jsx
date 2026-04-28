import { cn } from '@/lib/utils'

const TAGS = {
  margin:   'bg-tag-margin-bg text-tag-margin-fg',
  labor:    'bg-tag-labor-bg text-tag-labor-fg',
  disputes: 'bg-tag-disputes-bg text-tag-disputes-fg',
  cashflow: 'bg-tag-cashflow-bg text-tag-cashflow-fg',
}

export default function BreakdownCard({ tag, label, value, footnote }) {
  return (
    <div className="bg-bg-primary border border-stroke-weak rounded-lg p-lg shadow-xs flex flex-col gap-xs">
      <span
        className={cn(
          'w-fit rounded-sm py-0.5 px-1.5 text-[10px] font-semibold uppercase tracking-wider',
          TAGS[tag],
        )}
      >
        {tag}
      </span>
      <span className="text-xs text-text-weak">{label}</span>
      <span className="text-base font-semibold font-mono tabular-nums text-text-strong">
        {value}
      </span>
      {footnote && (
        <span className="text-[10px] text-text-weaker">{footnote}</span>
      )}
    </div>
  )
}
