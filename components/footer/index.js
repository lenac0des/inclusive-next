import React from 'react'
import { FooterStyled, Logo, IconText, Row, Column, Caption, Caption2, Icon } from './styles/Footer.js'
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


      <Row>
      <Column>
      <h4>Learn</h4>
      <h5>About us</h5>
      <h5>Blog</h5>
      <h5>Newsletter</h5>
      </Column>


      <Column>
      <h4>Inclusive Services</h4>
      <h5>Guide to services</h5>
      <h5>Resource directory</h5>
      </Column>

      <Column>
      <h4>Help</h4>
      <h5>Contact us</h5>
      <h5>FAQ</h5>
      </Column>

      </Row>

      <Caption>
        <h6>© 2022 The Inclusive Group, All rights reserved</h6>
      </Caption>
      <Caption2> <h6>Nonprofit helping NYC parents find the best services for their children.</h6></Caption2>
      
      </FooterStyled>
    
  );
}