import { useState } from 'react'

import ConfigPanel from './components/ConfigPanel'
import { DEFAULTS } from '@/lib/calculations'

export default function App() {
  const [inputs, setInputs] = useState(DEFAULTS)

  function handleChange(key, value) {
    setInputs((prev) => ({ ...prev, [key]: value }))
  }

  return (
    <div className="min-h-screen bg-bg-page font-sans">
      <div className="max-w-3xl mx-auto p-2xl">
        <h1 className="text-2xl font-semibold text-text-strong mb-2xl">
          Freight ROI Calculator
        </h1>

        <ConfigPanel inputs={inputs} onChange={handleChange} />

        <pre className="mt-2xl bg-bg-primary border border-stroke-weak rounded-lg p-xl text-xs text-text-strong overflow-x-auto">
          {JSON.stringify(inputs, null, 2)}
        </pre>
      </div>
    </div>
  )
}
