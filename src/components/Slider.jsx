import { useId } from 'react'

export default function Slider({
  label,
  helper,
  value,
  min,
  max,
  step,
  onChange,
  formatValue = (v) => v.toString(),
}) {
  const id = useId()

  function handleKeyDown(e) {
    if (e.key === 'PageUp') {
      e.preventDefault()
      onChange(Math.min(max, value + step * 10))
    } else if (e.key === 'PageDown') {
      e.preventDefault()
      onChange(Math.max(min, value - step * 10))
    }
  }

  return (
    <div className="flex flex-col gap-sm">
      <div className="flex items-center justify-between">
        <label htmlFor={id} className="text-sm text-text-weak">
          {label}
        </label>
        <span className="font-mono text-xs tabular-nums text-text-strong bg-bg-primary border border-stroke-weak rounded-md px-md py-2xs">
          {formatValue(value)}
        </span>
      </div>

      <input
        id={id}
        type="range"
        role="slider"
        className="roi-slider"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        onKeyDown={handleKeyDown}
        aria-label={label}
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={value}
      />

      {helper && <span className="text-xs text-text-weaker">{helper}</span>}
    </div>
  )
}
