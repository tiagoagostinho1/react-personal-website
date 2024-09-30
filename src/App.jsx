import { useState } from 'react'
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';

import { HeroContentLeft } from './components/hero-section/HeroContentLeft';
import { FooterSocial } from './components/footer/FooterSocial';
import { HeaderSimple } from './components/header/HeaderSimple';
import { FeatureCard } from './components/card/FeatureCard';

function App() {
  const [count, setCount] = useState(0)

  return <MantineProvider>{
      <>
        <HeaderSimple/>
        <HeroContentLeft/>
        <FeatureCard/>
        <FooterSocial/>
      </>
    }</MantineProvider>;
}

export default App
