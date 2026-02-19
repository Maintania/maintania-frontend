import { FeatureCard } from "../components/FeatureCard";
import { Hero } from "../components/Hero";
import { MotionGroup, MotionReveal } from "../components/motion";
import { SectionWrapper } from "../components/SectionWrapper";
import {
  featureItems,
  howItWorks,
  productBreakdown,
  productMetrics,
  testimonials,
  useCases,
} from "../lib/constant/site-data";

export default function HomePage() {
  return (
    <div className="stack">
      <Hero />

      <SectionWrapper id="features" className="section">
        <div className="section-head">
          <p className="eyebrow">Features</p>
          <h2>Automate repetitive triage work with high confidence</h2>
        </div>
        <MotionGroup className="feature-grid">
          {featureItems.map((feature) => (
            <MotionReveal key={feature.title}>
              <FeatureCard title={feature.title} description={feature.description} />
            </MotionReveal>
          ))}
        </MotionGroup>
      </SectionWrapper>

      <SectionWrapper className="section">
        <div className="section-head">
          <p className="eyebrow">How it works</p>
          <h2>Three steps from noisy inbox to clear priorities</h2>
        </div>
        <MotionGroup className="step-grid">
          {howItWorks.map((step, index) => (
            <MotionReveal key={step.title}>
              <article className="step-card">
                <span>{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            </MotionReveal>
          ))}
        </MotionGroup>
      </SectionWrapper>

      <SectionWrapper className="section split">
        <div>
          <p className="eyebrow">Use cases</p>
          <h2>Designed for maintainers at every scale</h2>
        </div>
        <ul className="use-case-list">
          {useCases.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </SectionWrapper>

      <SectionWrapper className="section">
        <div className="section-head">
          <p className="eyebrow">Product deep dive</p>
          <h2>How Maintania AI actually reduces maintainer load</h2>
          <p>
            Maintania AI combines a policy-driven classifier, a docs-grounded response
            copilot, and priority scoring so maintainers spend less time sorting and more
            time shipping fixes.
          </p>
        </div>
        <MotionGroup className="feature-grid">
          {productBreakdown.map((item) => (
            <MotionReveal key={item.title}>
              <article className="feature-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            </MotionReveal>
          ))}
        </MotionGroup>
      </SectionWrapper>

      <SectionWrapper className="section metrics-grid">
        {productMetrics.map((item) => (
          <article key={item.label} className="metric-card">
            <p>{item.label}</p>
            <strong>{item.value}</strong>
          </article>
        ))}
      </SectionWrapper>

      <SectionWrapper className="section">
        <div className="section-head">
          <p className="eyebrow">Testimonials</p>
          <h2>Used by OSS and platform teams</h2>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((item) => (
            <blockquote key={item.byline}>
              <p>&quot;{item.quote}&quot;</p>
              <cite>{item.byline}</cite>
            </blockquote>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper className="section cta-band">
        <h2>Focus maintainers on high-priority engineering problems.</h2>
        <p>Get started with one repository and scale your triage operations over time.</p>
        <a href="/contact" className="btn btn-primary">
          Get Started
        </a>
      </SectionWrapper>
    </div>
  );
}
