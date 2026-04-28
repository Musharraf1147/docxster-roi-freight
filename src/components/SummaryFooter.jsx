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
        <span className="text-sm tracking-[-0.4px] text-text-weak">Payback period</span>
        <span className="text-base tracking-[-0.4px] font-semibold text-text-strong">
          {paybackText}
        </span>
      </div>

      <div className="flex flex-col gap-sm">
        <div className="flex items-center gap-md">
          <span className="text-sm tracking-[-0.4px] text-text-weak whitespace-nowrap">
            ROI multiplier
          </span>
          <div className="relative flex-1 h-4 overflow-hidden rounded-sm bg-bg-page">
            <div
              className="absolute inset-y-0 left-0 bg-icon-weak transition-all duration-300 ease-out-expo"
              style={{ width: `${fillPercent}%` }}
            />
          </div>
          <span className="text-sm tracking-[-0.4px] tabular-nums text-text-strong whitespace-nowrap">
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
