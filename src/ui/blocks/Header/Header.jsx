import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { HashLink } from "react-router-hash-link"
import { routesPath } from "../../../conts/routes"
import { Container } from "../../base/Container"
import { LogoIcon } from "../../icons"
import {
  Anchor,
  DownloadButtonContainer,
  HeaderContent,
  HeaderWrapper,
  Logo,
  Navigation,
} from "./HeaderStyled"
import { QrDownloadButton } from "../../base/QrDownloadButton"
import { qrCodeButtonsData } from "../../../conts/QrCodeButtonData"

const Header = ({ solid, color }) => {
  const [isAppMode, setIsAppMode] = useState(true)

  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const mode = params.get("mode")

    if (mode !== "app") {
      setIsAppMode(false)
    }
  }, [location.pathname])

  if (isAppMode) return null

  return (
    <HeaderWrapper solid={solid} className="main-header">
      <Container>
        <HeaderContent>
          <Logo>
            <Link to={routesPath.main}>
              <LogoIcon color={color !== "white" ? "blue" : "white"} />
            </Link>
          </Logo>
          <Navigation>
            <Link to={routesPath.faq}>
              <Anchor color={color}>FAQ</Anchor>
            </Link>
            <Link  to={routesPath.instructor} >
              <Anchor color={color}>Instructor</Anchor>
            </Link>
            <HashLink to={`${routesPath.main}#download`}>
              <Anchor color={color}>
                Download
              <DownloadButtonContainer>
                <div>
                {qrCodeButtonsData?.map((item)=>(
                 <QrDownloadButton 
                  key={item.text}
                  qrcode={item.qrcode} 
                  href={item.href} 
                  icon={item.icon}
                  bg={item.bg}>
                  {item.text}
                  </QrDownloadButton>
                ))}
                </div>
              </DownloadButtonContainer>
              </Anchor>
            </HashLink>
          </Navigation>
        </HeaderContent>
      </Container>
    </HeaderWrapper>
  )
}

export default Header
