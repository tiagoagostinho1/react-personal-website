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

        <FeatureCard 
          isShowTextOnLeft = {true}
          description = {'Build fully functional accessible web applications faster than ever – Mantine includes more than 120 customizable components and hooks to cover you in any situation'}
        />
        <FeatureCard isShowTextOnLeft={false}/>

        <FooterSocial/>
      </>
    }</MantineProvider>;
}

export default App
