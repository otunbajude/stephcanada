import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"white", fontSize:"18px" }}>
          <DiCssdeck size="3rem" /> <span>Stephanie Canada</span>
        </a>
      </Link>
    </Div1>
    <Div2>
    <li>
        <Link href="#about">
          <NavLink>Bio</NavLink>
        </Link>
      </li> 
      <li>
        <Link href="#projects">
          <NavLink>Teaching</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>L & D</NavLink>
        </Link>
      </li>               
    </Div2>
      <Div3>
        <SocialIcons href="https://www.linkedin.com/in/stephanie-canada-22437892/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
      </Div3>
    </Container>
);

export default Header;
