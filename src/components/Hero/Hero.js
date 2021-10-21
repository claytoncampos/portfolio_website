import React from 'react';

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Bem vindo ao
        <br />
        Meu Portfólio Pessoal
      </SectionTitle>
      <SectionText>
        Olá, me chamo Clayton, tenho 35 anos. <br />
        Por ser uma pessoa muito dedicada e curiosa, me apaixonei pelo mundo de
        TI, em especial a tudo que diz respeito ao desenvolvimento e inovação.
        <br />
        Aqui você poderá conhecer um pouco mais sobre mim.
      </SectionText>
      <Button
        onClick={() =>
          (window.location =
            'https://www.linkedin.com/in/claytoncampos')
        }
      >
        Mais Informação{' '}
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
