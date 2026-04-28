import { useState } from 'react'
import Slider from './components/Slider'
import TabGroup from './components/TabGroup'

export default function App() {
  const [loads, setLoads] = useState(500)
  const [overbillRate, setOverbillRate] = useState(0.10)

  return (
    <div className="min-h-screen bg-bg-page font-sans">
      <div className="max-w-3xl mx-auto p-2xl">
        <h1 className="text-2xl font-semibold text-text-strong mb-2xl">
          Component Test
        </h1>

        <div className="flex flex-col gap-2xl bg-bg-primary p-2xl rounded-lg border border-stroke-weak shadow-xs">
          <Slider
            label="Monthly load volume"
            helper="Number of loads your team handles per month"
            value={loads}
            min={0}
            max={5000}
            step={25}
            onChange={setLoads}
            formatValue={(v) => v.toLocaleString()}
          />

          <TabGroup
            label="How often carriers overbill"
            helper="Industry average is around 10%"
            options={[
              { value: 0.05, label: '5%' },
              { value: 0.10, label: '10%' },
              { value: 0.15, label: '15%' },
              { value: 0.20, label: '20%' },
            ]}
            value={overbillRate}
            onChange={setOverbillRate}
          />

          <div className="pt-lg border-t border-stroke-weak">
            <p className="font-mono text-xs text-text-weak">
              loads = {loads.toLocaleString()} · overbillRate = {(overbillRate * 100).toFixed(0)}%
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
