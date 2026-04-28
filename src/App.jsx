function Section({ title, children }) {
  return (
    <section className="mb-2xl">
      <h2 className="font-sans text-sm font-semibold text-text-weaker uppercase tracking-widest mb-lg">
        {title}
      </h2>
      {children}
    </section>
  )
}

function Swatch({ label, bgClass, textClass = 'text-text-strong', hex }) {
  return (
    <div className="flex flex-col gap-xs">
      <div className={`w-16 h-16 rounded-md border border-stroke-weak ${bgClass}`} />
      <span className={`font-mono text-xs ${textClass}`}>{label}</span>
      {hex && <span className="font-mono text-xs text-text-weaker">{hex}</span>}
    </div>
  )
}

function ShadowBox({ label, shadowClass }) {
  return (
    <div className="flex flex-col gap-xs items-center">
      <div className={`w-20 h-20 bg-bg-primary rounded-md ${shadowClass}`} />
      <span className="font-mono text-xs text-text-weak">{label}</span>
    </div>
  )
}

function RadiusBox({ label, roundedClass }) {
  return (
    <div className="flex flex-col gap-xs items-center">
      <div className={`w-20 h-20 bg-bg-subtle border border-stroke-weak ${roundedClass}`} />
      <span className="font-mono text-xs text-text-weak">{label}</span>
    </div>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-bg-page font-sans p-2xl">
      <h1 className="text-2xl font-semibold text-text-strong mb-2xl">
        Design System Tokens
      </h1>

      {/* ── Background Colors ── */}
      <Section title="Background">
        <div className="flex gap-xl flex-wrap">
          <Swatch label="bg-page"    bgClass="bg-bg-page"    hex="#F5F5F5" />
          <Swatch label="bg-primary" bgClass="bg-bg-primary" hex="#FFFFFF" />
          <Swatch label="bg-subtle"  bgClass="bg-bg-subtle"  hex="#E8E8E8" />
        </div>
      </Section>

      {/* ── Text Colors ── */}
      <Section title="Text">
        <div className="flex gap-xl flex-wrap items-center">
          <div className="flex flex-col gap-xs">
            <span className="text-text-strong font-sans text-base font-medium">text-strong #3F3F3F</span>
            <span className="text-text-weak   font-sans text-base font-medium">text-weak   #6F6F6F</span>
            <span className="text-text-weaker font-sans text-base font-medium">text-weaker #A3A3A3</span>
          </div>
        </div>
      </Section>

      {/* ── Stroke Colors ── */}
      <Section title="Stroke">
        <div className="flex gap-xl flex-wrap">
          <Swatch label="stroke-weak"   bgClass="bg-stroke-weak"   hex="#DAD7D7" />
          <Swatch label="stroke-strong" bgClass="bg-stroke-strong" hex="#7C737E" />
        </div>
      </Section>

      {/* ── Tag Colors ── */}
      <Section title="Tags">
        <div className="flex gap-lg flex-wrap">
          {[
            { name: 'margin',   bgClass: 'bg-tag-margin-bg',   fgClass: 'text-tag-margin-fg' },
            { name: 'labor',    bgClass: 'bg-tag-labor-bg',    fgClass: 'text-tag-labor-fg' },
            { name: 'disputes', bgClass: 'bg-tag-disputes-bg', fgClass: 'text-tag-disputes-fg' },
            { name: 'cashflow', bgClass: 'bg-tag-cashflow-bg', fgClass: 'text-tag-cashflow-fg' },
          ].map(({ name, bgClass, fgClass }) => (
            <span
              key={name}
              className={`inline-flex items-center px-md py-xs rounded-md text-sm font-medium ${bgClass} ${fgClass}`}
            >
              {name}
            </span>
          ))}
        </div>
      </Section>

      {/* ── Shadows ── */}
      <Section title="Shadows">
        <div className="flex gap-2xl flex-wrap">
          <ShadowBox label="shadow-xs" shadowClass="shadow-xs" />
          <ShadowBox label="shadow-sm" shadowClass="shadow-sm" />
          <ShadowBox label="shadow-md" shadowClass="shadow-md" />
          <ShadowBox label="shadow-lg" shadowClass="shadow-lg" />
        </div>
      </Section>

      {/* ── Border Radius ── */}
      <Section title="Border Radius">
        <div className="flex gap-2xl flex-wrap">
          <RadiusBox label="rounded-sm  4px"  roundedClass="rounded-sm" />
          <RadiusBox label="rounded-md  6px"  roundedClass="rounded-md" />
          <RadiusBox label="rounded-lg  8px"  roundedClass="rounded-lg" />
          <RadiusBox label="rounded-xl  10px" roundedClass="rounded-xl" />
          <RadiusBox label="rounded-2xl 12px" roundedClass="rounded-2xl" />
        </div>
      </Section>

      {/* ── Spacing ── */}
      <Section title="Spacing">
        <div className="flex gap-xl flex-wrap items-end">
          {[
            { label: '2xs 2px', h: 'h-2xs', w: 'w-2xs' },
            { label: 'xs 4px',  h: 'h-xs',  w: 'w-xs' },
            { label: 'sm 6px',  h: 'h-sm',  w: 'w-sm' },
            { label: 'md 8px',  h: 'h-md',  w: 'w-md' },
            { label: 'lg 12px', h: 'h-lg',  w: 'w-lg' },
            { label: 'xl 16px', h: 'h-xl',  w: 'w-xl' },
            { label: '2xl 24px',h: 'h-2xl', w: 'w-2xl' },
          ].map(({ label, h, w }) => (
            <div key={label} className="flex flex-col gap-xs items-center">
              <div className={`bg-stroke-strong ${h} ${w} min-w-[8px]`} />
              <span className="font-mono text-xs text-text-weaker whitespace-nowrap">{label}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Typography ── */}
      <Section title="Typography">
        <div className="flex flex-col gap-md">
          <p className="font-sans text-text-strong">font-sans — Inter, system-ui, sans-serif</p>
          <p className="font-mono text-text-strong">font-mono — JetBrains Mono, monospace</p>
          <p className="font-sans font-normal  text-text-strong">weight 400 — The quick brown fox</p>
          <p className="font-sans font-medium  text-text-strong">weight 500 — The quick brown fox</p>
          <p className="font-sans font-semibold text-text-strong">weight 600 — The quick brown fox</p>
        </div>
      </Section>

      {/* ── Gradient Buttons ── */}
      <Section title="Gradient Buttons">
        <div className="flex gap-lg">
          <button className="bg-primary-btn text-white px-xl py-md rounded-md font-sans font-medium text-sm">
            bg-primary-btn
          </button>
          <button className="bg-primary-btn-hover text-white px-xl py-md rounded-md font-sans font-medium text-sm">
            bg-primary-btn-hover
          </button>
        </div>
      </Section>
    </div>
  )
}
