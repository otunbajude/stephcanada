import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';



const openInNewTab = url => {
  window.open(url, '_blank', 'noopener,noreferrer');
};

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          SEN Educator <br/> &  Learning Developer
        </SectionTitle>
        <SectionText>
        A third generation international educator that has worked in China, Sudan, Vietnam & Tanzania
        </SectionText>
        <Button onClick={() => openInNewTab('https://drive.google.com/file/d/1VTpj3ulTJnso1nAB3Oxp-ISwPFOoI3Nc/view?usp=sharing')}>Download CV </Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;