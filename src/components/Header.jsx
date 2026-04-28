export default function Header({ onReset }) {
  return (
    <header className="sticky top-0 z-10 bg-bg-page border-b border-stroke-weak">
      <div className="max-w-[1200px] mx-auto py-lg px-2xl flex items-center justify-between gap-xl">
        <span className="text-base font-semibold text-text-strong">Docxster</span>
        <span className="text-sm text-text-weak">
          ROI Calculator for Freight Brokers
        </span>
        <button
          type="button"
          onClick={onReset}
          className="text-xs text-text-weak px-lg py-sm rounded-md border border-stroke-weak bg-transparent transition-colors hover:bg-bg-subtle hover:text-text-strong focus-visible:outline-2 focus-visible:outline-stroke-strong focus-visible:outline-offset-2"
        >
          Reset to defaults
        </button>
      </div>
    </header>
  )
}
