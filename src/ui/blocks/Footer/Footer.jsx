import React from "react"
import { Link } from "react-router-dom"
import { routesPath } from "../../../conts/routes"
import { Container } from "../../base/Container"
import { QrCodeButton } from "../../base/QrCodeButton"
import { SocFacebookIcon, SocInstIcon, SocTwitterIcon } from "../../icons"
import {
  Buttons,
  Col,
  ColBtn,
  ColText,
  FooterWrapper,
  Links,
  Row,
  Social,
  SocialItem,
  Text,
} from "./FooterStyled"

import { qrCodeButtonsData } from "../../../conts/QrCodeButtonData"

const Footer = () => {
  return (
    <FooterWrapper>
      <Container wide>
        <Row>
          <Col>
            <Social>
              <SocialItem
                target='_blank'
                href='https://www.instagram.com/teache.app/'>
                <SocInstIcon />
              </SocialItem>
              <SocialItem
                target='_blank'
                href='https://www.facebook.com/Teacheapp/'>
                <SocFacebookIcon />
              </SocialItem>
              <SocialItem target='_blank' href='https://twitter.com/teache_app'>
                <SocTwitterIcon />
              </SocialItem>
            </Social>
            <Links>
              <Link to={routesPath.privacy}>Privacy</Link>
              <Link to={routesPath.terms}>Terms</Link>
            </Links>
          </Col>
          <ColText>
            <Text>Copyright © 2023 Teache. All rights reserved</Text>
          </ColText>
          <ColBtn>
            <Buttons>
              {qrCodeButtonsData?.map((item) => (
                <QrCodeButton
                  key={item.text}
                  qrcode={item.qrcode}
                  href={item.href}
                  target='_blank'
                  icon={item.icon}
                  bg={item.bg}>
                  {item.text}
                </QrCodeButton>
              ))}
            </Buttons>
          </ColBtn>
        </Row>
      </Container>
    </FooterWrapper>
  )
}

export default Footer
