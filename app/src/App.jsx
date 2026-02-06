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
import TechFlow from './components/TechFlow';
import PricingSection from './components/PricingSection';
import SocialProof from './components/SocialProof';

function App() {
  const [lang, setLang] = useState('fr'); // Default to French

  return (
    <Layout lang={lang} setLang={setLang}>
      <Hero lang={lang} />
      <div className="space-y-0">
        <UsVsThem lang={lang} />
        <DashboardShowcase lang={lang} />
      </div>

      {/* Maximalist Feature Sections */}
      <div id="features" className="space-y-0 bg-bg-deep relative z-10">
        <SecuritySection lang={lang} />
        <ConversionSection lang={lang} />
        <AnalyticsSection lang={lang} />
        <LogisticsSection lang={lang} />
        <ToolsSection lang={lang} />
      </div>

      <TechFlow lang={lang} />
      <PricingSection lang={lang} />
      <SocialProof lang={lang} />
    </Layout>
  );
}

export default App;
