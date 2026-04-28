import Slider from './Slider'
import TabGroup from './TabGroup'
import { formatCurrency } from '@/lib/calculations'

function Section({ title, children }) {
  return (
    <div className="bg-bg-primary border border-stroke-weak rounded-lg p-2xl shadow-xs">
      <div className="flex flex-col gap-xl">
        <h3 className="text-xs font-semibold text-text-weaker uppercase tracking-wider">
          {title}
        </h3>
        {children}
      </div>
    </div>
  )
}

export default function ConfigPanel({ inputs, onChange }) {
  const set = (key) => (value) => onChange(key, value)

  return (
    <div className="flex flex-col gap-xl">
      <Section title="Your operation">
        <Slider
          label="Monthly load volume"
          helper="Number of shipments booked each month"
          value={inputs.loads}
          min={0}
          max={5000}
          step={25}
          onChange={set('loads')}
          formatValue={(v) => v.toLocaleString()}
        />
        <Slider
          label="Average shipper invoice"
          helper="What you typically bill your shipper per load"
          value={inputs.invoiceValue}
          min={0}
          max={10000}
          step={100}
          onChange={set('invoiceValue')}
          formatValue={(v) => `$${v.toLocaleString()}`}
        />
        <Slider
          label="Monthly billing volume"
          helper="Total dollars you invoice shippers each month"
          value={inputs.billingVolume}
          min={0}
          max={5000000}
          step={50000}
          onChange={set('billingVolume')}
          formatValue={formatCurrency}
        />
      </Section>

      <Section title="Carrier overbilling">
        <TabGroup
          label="How often carriers overbill"
          helper="Industry studies show 5–15% of carrier invoices contain errors"
          value={inputs.overbillRate}
          onChange={set('overbillRate')}
          options={[
            { value: 0.05, label: '5%' },
            { value: 0.10, label: '10%' },
            { value: 0.15, label: '15%' },
            { value: 0.20, label: '20%' },
          ]}
        />
        <Slider
          label="Average overcharge per error"
          helper="Accessorials, weight discrepancies, fuel surcharge mistakes"
          value={inputs.overchargeAmount}
          min={0}
          max={500}
          step={10}
          onChange={set('overchargeAmount')}
          formatValue={(v) => `$${v.toLocaleString()}`}
        />
        <TabGroup
          label="What you currently catch manually"
          helper="Most teams catch under 20% without automation"
          value={inputs.manuallyCaughtRate}
          onChange={set('manuallyCaughtRate')}
          options={[
            { value: 0,    label: '0%' },
            { value: 0.10, label: '10%' },
            { value: 0.20, label: '20%' },
            { value: 0.30, label: '30%' },
            { value: 0.50, label: '50%' },
          ]}
        />
      </Section>

      <Section title="Document handling & disputes">
        <Slider
          label="Time spent on docs per load"
          helper="Manual matching of rate con, BOL, POD, and carrier invoice"
          value={inputs.docTimeMinutes}
          min={0}
          max={60}
          step={1}
          onChange={set('docTimeMinutes')}
          formatValue={(v) => `${v} min`}
        />
        <Slider
          label="Fully-loaded hourly cost"
          helper="Salary + benefits + overhead, per ops team hour"
          value={inputs.hourlyRate}
          min={0}
          max={65}
          step={1}
          onChange={set('hourlyRate')}
          formatValue={(v) => `$${v}`}
        />
        <TabGroup
          label="Dispute rate"
          helper="Loads that end in a billing dispute"
          value={inputs.disputeRate}
          onChange={set('disputeRate')}
          options={[
            { value: 0.05, label: '5%' },
            { value: 0.10, label: '10%' },
            { value: 0.15, label: '15%' },
            { value: 0.20, label: '20%' },
          ]}
        />
        <Slider
          label="Hours to resolve one dispute"
          helper="Back-and-forth with carrier, TMS updates, documentation"
          value={inputs.disputeHours}
          min={0}
          max={12}
          step={0.5}
          onChange={set('disputeHours')}
        />
        <TabGroup
          label="POD collection lag"
          helper="Days between delivery and confirmed POD receipt"
          value={inputs.podLagDays}
          onChange={set('podLagDays')}
          options={[
            { value: 1, label: '1 day' },
            { value: 2, label: '2 days' },
            { value: 3, label: '3 days' },
            { value: 5, label: '5 days' },
            { value: 7, label: '7 days' },
          ]}
        />
      </Section>

      <Section title="Docxster cost">
        <Slider
          label="Monthly subscription"
          value={inputs.subscriptionCost}
          min={0}
          max={10000}
          step={250}
          onChange={set('subscriptionCost')}
          formatValue={(v) => `$${v.toLocaleString()}`}
        />
      </Section>
    </div>
  )
}
