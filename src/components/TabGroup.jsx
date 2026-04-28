import { useId } from 'react'

import {
  Tabs,
  TabsList,
  TabsTab,
} from '@/components/animate-ui/components/base/tabs'

export default function TabGroup({ label, helper, options, value, onChange }) {
  const labelId = useId()

  return (
    <div className="flex flex-col gap-sm">
      <span id={labelId} className="text-sm text-text-weak">
        {label}
      </span>

      <Tabs value={value} onValueChange={onChange}>
        <TabsList aria-labelledby={labelId} className="w-full">
          {options.map((opt) => (
            <TabsTab key={String(opt.value)} value={opt.value}>
              {opt.label}
            </TabsTab>
          ))}
        </TabsList>
      </Tabs>

      {helper && <span className="text-xs text-text-weaker">{helper}</span>}
    </div>
  )
}
