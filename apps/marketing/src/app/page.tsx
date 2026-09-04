import {
  BottomCta,
  Faq,
  FeatureGrid,
  FeatureSections,
  Hero,
  Integrations,
  Pricing,
  ProvenAtScale,
  Security,
  Specialties,
  StatsBand,
  Testimonials,
  Workflow,
} from "@/components/sections";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProvenAtScale />
      <FeatureSections />
      <Specialties />
      <StatsBand />
      <Workflow />
      <FeatureGrid />
      <Integrations />
      <Testimonials />
      <Security />
      <Pricing />
      <Faq />
      <BottomCta />
    </>
  );
}
