import {
  BottomCta,
  Faq,
  FeatureGrid,
  FeatureSections,
  Hero,
  HowItWorks,
  Integrations,
  Pricing,
  ProvenAtScale,
  RoiCalculator,
  Security,
  Solutions,
  SpecialtyPresets,
  Testimonials,
} from "@/components/sections";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProvenAtScale />
      <FeatureSections />
      <HowItWorks />
      <SpecialtyPresets />
      <Solutions />
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
