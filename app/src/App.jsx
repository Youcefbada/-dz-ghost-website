import React, { useState } from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import UsVsThem from './components/UsVsThem';
import DashboardShowcase from './components/DashboardShowcase';
import SecuritySection from './components/detailed/SecuritySection';
import ConversionSection from './components/detailed/ConversionSection';
import AnalyticsSection from './components/detailed/AnalyticsSection';
import LogisticsSection from './components/detailed/LogisticsSection';
import ToolsSection from './components/detailed/ToolsSection';
import WhyUsSection from './components/WhyUsSection';
import StatsSection from './components/StatsSection';
import TestimonialsSection from './components/TestimonialsSection';
import TechFlow from './components/TechFlow';
import PricingSection from './components/PricingSection';
import FAQSection from './components/FAQSection';
import CTABanner from './components/CTABanner';
import SocialProof from './components/SocialProof';

function App() {
  const [lang, setLang] = useState('fr');

  return (
    <Layout lang={lang} setLang={setLang}>
      {/* Hero */}
      <Hero lang={lang} />

      {/* Intro Sections */}
      <UsVsThem lang={lang} />
      <DashboardShowcase lang={lang} />

      {/* Core Features (Detailed) */}
      <div id="features" className="space-y-0 bg-bg-deep relative z-10">
        <SecuritySection lang={lang} />
        <ConversionSection lang={lang} />
        <AnalyticsSection lang={lang} />
        <LogisticsSection lang={lang} />
        <ToolsSection lang={lang} />
      </div>

      {/* Why Us & Social Proof */}
      <WhyUsSection lang={lang} />
      <StatsSection lang={lang} />
      <TestimonialsSection lang={lang} />

      {/* Tech Flow */}
      <TechFlow lang={lang} />

      {/* Pricing */}
      <div id="pricing">
        <PricingSection lang={lang} />
      </div>

      {/* FAQ */}
      <FAQSection lang={lang} />

      {/* Final CTA */}
      <CTABanner lang={lang} />

      {/* Social Proof Graph */}
      <SocialProof lang={lang} />
    </Layout>
  );
}

export default App;
