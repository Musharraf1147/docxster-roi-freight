export default function SummaryFooter({
  paybackWeeks,
  roiMultiplier,
  monthlyROI,
  subscriptionCost,
}) {
  const paybackText =
    paybackWeeks === null
      ? '—'
      : paybackWeeks <= 1
        ? 'Under 1 week'
        : `${paybackWeeks} weeks`

  const fillPercent =
    roiMultiplier === null ? 0 : Math.min(100, (roiMultiplier / 10) * 100)

  const perDollar =
    roiMultiplier === null ? '0.00' : roiMultiplier.toFixed(2)

  return (
    <div className="bg-bg-primary border border-stroke-weak rounded-lg p-xl shadow-xs flex flex-col gap-md">
      <div className="flex items-center justify-between">
        <span className="text-sm text-text-weak">Payback period</span>
        <span className="text-base font-semibold text-text-strong">
          {paybackText}
        </span>
      </div>

      <div className="flex flex-col gap-sm">
        <div className="flex items-center gap-md">
          <span className="text-sm text-text-weak whitespace-nowrap">
            ROI multiplier
          </span>
          <div className="flex-1 h-1.5 bg-bg-subtle rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-300 ease-out-expo"
              style={{
                width: `${fillPercent}%`,
                background: 'linear-gradient(0deg, #3F3F3F, #1E1E1E)',
              }}
            />
          </div>
          <span className="text-sm tabular-nums text-text-strong font-mono whitespace-nowrap">
            {roiMultiplier === null ? '—' : `${roiMultiplier.toFixed(1)}x`}
          </span>
        </div>
        <p className="text-xs text-text-weaker">
          Every $1 spent on Docxster returns ${perDollar} in monthly value.
        </p>
      </div>
    </div>
  )
}
