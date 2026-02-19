import { PricingCard } from "../../components/PricingCard";
import { pricingTiers } from "../../lib/constant/site-data";

export default function PricingPage() {
  return (
    <section className="section stack">
      <div className="section-head centered">
        <p className="eyebrow">Pricing</p>
        <h1>Pricing for maintainer operations teams</h1>
        <p>Start free and upgrade when triage automation becomes mission-critical.</p>
      </div>
      <div className="pricing-grid">
        {pricingTiers.map((tier) => (
          <PricingCard key={tier.name} {...tier} />
        ))}
      </div>
    </section>
  );
}
