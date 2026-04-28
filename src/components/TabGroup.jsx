import { useId, useRef } from 'react'

export default function TabGroup({ label, helper, options, value, onChange }) {
  const labelId = useId()
  const tabRefs = useRef([])

  function focusTab(index) {
    tabRefs.current[index]?.focus()
  }

  function handleKeyDown(e, index) {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault()
      focusTab((index + 1) % options.length)
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault()
      focusTab((index - 1 + options.length) % options.length)
    } else if (e.key === 'Home') {
      e.preventDefault()
      focusTab(0)
    } else if (e.key === 'End') {
      e.preventDefault()
      focusTab(options.length - 1)
    } else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      onChange(options[index].value)
    }
  }

  return (
    <div className="flex flex-col gap-sm">
      <span id={labelId} className="text-sm text-text-weak">
        {label}
      </span>

      <div
        role="tablist"
        aria-labelledby={labelId}
        className="flex gap-xs p-xs bg-bg-page rounded-md"
      >
        {options.map((opt, i) => {
          const isActive = opt.value === value
          return (
            <button
              key={opt.value}
              ref={(el) => (tabRefs.current[i] = el)}
              type="button"
              role="tab"
              aria-selected={isActive}
              tabIndex={isActive ? 0 : -1}
              onClick={() => onChange(opt.value)}
              onKeyDown={(e) => handleKeyDown(e, i)}
              className={`flex-1 px-lg py-sm text-xs font-semibold rounded transition-all duration-150 ease-out-expo border ${
                isActive
                  ? 'bg-bg-primary text-text-strong border-stroke-weak shadow-xs'
                  : 'bg-transparent text-text-weak border-transparent hover:text-text-strong hover:bg-white/50'
              }`}
            >
              {opt.label}
            </button>
          )
        })}
      </div>

      {helper && <span className="text-xs text-text-weaker">{helper}</span>}
    </div>
  )
}
