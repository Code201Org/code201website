import {
  BottomCta,
  Faq,
  FeatureSections,
  Hero,
  HowItWorks,
  Pricing,
  ProvenAtScale,
  Security,
  Testimonials,
  ThreeProblems,
} from "@/components/sections";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProvenAtScale />
      <ThreeProblems />
      <FeatureSections />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <Security />
      <Faq />
      <BottomCta />
    </>
  );
}
