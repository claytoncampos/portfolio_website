import React from 'react';
import { AiTwotoneMail, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { FaWhatsapp } from 'react-icons/fa';

import { SocialIcons } from '../Header/HeaderStyles';
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      {/*
      <LinkList>
        <LinkColumn>
          <LinkTitle>Whatsapp</LinkTitle>
          <LinkItem href="https://api.whatsapp.com/send?phone=5511947049253">
            <FaWhatsapp size="3rem" />
          </LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>E-mail</LinkTitle>
          <LinkItem href="mailto:clayton.almeida.campos@gmail.com">
            <AiTwotoneMail size="3rem" />
          </LinkItem>
        </LinkColumn>
         <LinkColumn>
          <LinkTitle>Linkedin</LinkTitle>
          <LinkItem href="https://www.linkedin.com/in/clayton-almeida-campos-198732176/">
            <AiFillLinkedin size="3rem" />
          </LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>GitHub</LinkTitle>
          <LinkItem href="https://github.com/claytoncampos">
            <AiFillGithub size="3rem" />
          </LinkItem>
        </LinkColumn> 
      </LinkList>*/}
      <LinkList />
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Nunca pare de Estudar</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="mailto:clayton.almeida.campos@gmail.com">
            <AiTwotoneMail size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://api.whatsapp.com/send?phone=5511947049253">
            <FaWhatsapp size="3rem" />
          </SocialIcons>

          <SocialIcons href="https://github.com/claytoncampos">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/clayton-almeida-campos-198732176/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
