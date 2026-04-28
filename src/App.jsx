import { useMemo, useState } from 'react'

import ConfigPanel from './components/ConfigPanel'
import ResultsPanel from './components/ResultsPanel'
import { DEFAULTS, calculateROI } from '@/lib/calculations'

export default function App() {
  const [inputs, setInputs] = useState(DEFAULTS)
  const results = useMemo(() => calculateROI(inputs), [inputs])

  function handleChange(key, value) {
    setInputs((prev) => ({ ...prev, [key]: value }))
  }

  return (
    <div className="min-h-screen bg-bg-primary font-sans">
      <div className="max-w-[1200px] mx-auto p-2xl">
        <h1 className="text-2xl font-semibold text-text-strong mb-2xl">
          Freight ROI Calculator
        </h1>

        <div className="grid grid-cols-1 min-[960px]:grid-cols-[520px_1fr] gap-2xl items-start">
          <ConfigPanel inputs={inputs} onChange={handleChange} />
          <ResultsPanel results={results} inputs={inputs} />
        </div>
      </div>
    </div>
  )
}
