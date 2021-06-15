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
        Olá, me chamo Clayton, tenho 34 anos, Formado em Comércio Exterior.{' '}
        <br /> Tenho 10 anos de experiência na área fiscal, sou apaixonado e
        entusiasta pelo mundo da tecnologia! <br />
        Estou em transição de carreira, buscando uma oportunidade para ingressar
        na área de TI profissionalmente. Por ser uma pessoa muito dedicada e
        curiosa, me apaixonei pelo mundo de TI, em especial a tudo que diz
        respeito ao desenvolvimento e inovação.
      </SectionText>
      <Button
        onClick={() =>
          (window.location =
            'https://www.linkedin.com/in/clayton-almeida-campos-198732176/')
        }
      >
        Mais Informação{' '}
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
