import React from 'react';
import {
  DiReact,
  DiHtml5,
  DiJavascript1,
  DiCss3,
  DiNodejsSmall,
  DiFirebase,
  DiSass,
} from 'react-icons/di';
import { SiNextDotJs, SiMicrosoftazure } from 'react-icons/si';
import { AiOutlineApi, AiFillGithub, AiFillGitlab } from 'react-icons/ai';
import { FiFigma } from 'react-icons/fi';
import { FaGitAlt, FaDocker, FaLinux } from 'react-icons/fa';
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from './TechnologiesStyles';

const Technologies = () => (
  <Section id="techs">
    <SectionTitle>Tecnologias</SectionTitle>
    <br />
    <SectionDivider />
    <SectionText>
      Já trabalhei com diversas tecnologias para desenvolvimento web. Tanto para
      o Front End quanto para o Back End.
    </SectionText>
    <List>
      <ListItem>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experiência com <br />
            <br />
            <DiHtml5 size="3rem" />
            HTML
            <br />
            <DiCss3 size="3rem" />
            CSS
            <br />
            <DiSass size="3rem" />
            Sass
            <br />
            <DiJavascript1 size="32px" />
            Java Script
            <br />
            <DiReact size="3rem" />
            React.js
            <br />
            <SiNextDotJs size="3rem" /> Next.js
            <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experiência com <br />
            <br />
            <DiNodejsSmall size="3rem" />
            Node.js
            <br />
            <DiFirebase size="3rem" />
            Databases
            <br />
            <AiOutlineApi size="3rem" />
            API
            <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experiência com a ferramenta
            <br />
            <br />
            <FiFigma size="3rem" />
            Figma
            <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>Outras Ferramentas</ListTitle>
          <ListParagraph>
            Versionamento de código, metodologias Agéis e Clound Computing.
            <br />
            <br />
            <FaGitAlt size="3rem" />
            Git <br />
            <AiFillGitlab size="3rem" />
            GitLab <br />
            <AiFillGithub size="3rem" />
            GitHub <br />
            <FaDocker size="3rem" />
            Docker <br />
            <FaLinux size="3rem" />
            Linux <br />
            <SiMicrosoftazure size="3rem" />
            Azure
            <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
