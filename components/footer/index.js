import React from 'react'
import { FooterStyled, Logo, IconText, Icon } from './styles/Footer.js'
import { TwitterSVG, FacebookSvg, InstagramSvg, YoutubeSvg } from '../../assets/Icons/index.js'

export default function Footer() {
  return (
      <FooterStyled>
      
      <Logo>
      <h2>Inclusive</h2>
      </Logo>
      <IconText>
     <h4>Connect with us!</h4>
      </IconText>
      <Icon>
        <TwitterSVG />
        <InstagramSvg />
        <FacebookSvg />
        <YoutubeSvg />
      </Icon>
      
      </FooterStyled>
    
  );
}