import {
  BottomCta,
  CaseStudies,
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
  Testimonials,
} from "@/components/sections";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProvenAtScale />
      <FeatureSections />
      <Specialties />
      <SpecialtySwitcher />
      <CaseStudies />
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
