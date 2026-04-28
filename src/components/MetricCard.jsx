import { motion } from 'motion/react'

import { cn } from '@/lib/utils'

export default function MetricCard({ label, value, caption, emphasized = false }) {
  return (
    <div
      className={cn(
        'min-w-0 rounded-xl p-xl shadow-xs flex flex-col gap-sm',
        emphasized
          ? 'border border-stroke-strong'
          : 'bg-bg-primary border border-stroke-weak',
      )}
      style={
        emphasized
          ? { background: 'linear-gradient(180deg, #FFFFFF, #F5F5F5)' }
          : undefined
      }
    >
      <span className="text-sm font-semibold text-text-weak">{label}</span>
      <motion.span
        key={String(value)}
        animate={{ scale: [1, 1.02, 1] }}
        transition={{ duration: 0.3, times: [0, 0.5, 1] }}
        className="origin-left inline-block text-xl font-semibold tabular-nums text-text-strong whitespace-nowrap"
      >
        {value}
      </motion.span>
      <span className="text-xs text-text-weaker">{caption || ' '}</span>
    </div>
  )
}
