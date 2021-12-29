import React from 'react';

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';

const Hero = () => (
  <Section>
    <SectionTitle main center>
      Welcome to <br />
      My Personal Portfolio
    </SectionTitle>
    <SectionText>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
      similique labore, minus necessitatibus iure veniam. Similique dolores
      optio nobis amet.
    </SectionText>
    <Button onClick={() => (window.location = 'https://google.com')}>
      Learn More
    </Button>
  </Section>
);

export default Hero;
