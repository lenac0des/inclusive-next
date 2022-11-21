import React from 'react'
import { FooterStyled, Logo, IconText, Row, Column, Caption, Caption2, Icon } from './styles/Footer.js'
import { TwitterSVG, FacebookSvg, InstagramSvg, YoutubeSvg } from '../../assets/Icons/index.js'

export default function Footer() {
  return (
    <FooterStyled>

      <Logo>
        Inclusive
      </Logo>
      <IconText>
        Connect with us!
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
        © 2022 The Inclusive Group, All rights reserved
      </Caption>
      <Caption2>Nonprofit helping NYC parents find the best services for their children.</Caption2>

    </FooterStyled>

  );
}