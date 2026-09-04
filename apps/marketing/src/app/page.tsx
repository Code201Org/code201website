import {
  BottomCta,
  Faq,
  FeatureGrid,
  FeatureSections,
  Hero,
  Integrations,
  Pricing,
  ProvenAtScale,
  RoiCalculator,
  Security,
  Specialties,
  SpecialtySwitcher,
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
      <SpecialtySwitcher />
      <StatsBand />
      <Workflow />
      <RoiCalculator />
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
