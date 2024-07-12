import React, { useEffect, useState } from "react"
import { BadgeMobile } from "../ui/base/badge/Badge"
import { ScrollToTop } from "../ui/base/ScrollToTop"
import { Download } from "../ui/blocks/Download"
import { Footer } from "../ui/blocks/Footer"
import { Gallery } from "../ui/blocks/Gallery"
import { Header } from "../ui/blocks/Header"
import { Info } from "../ui/blocks/Info"
import { Neighborhood } from "../ui/blocks/Neighborhood"
import ScrollMotion from "../ui/blocks/ScrollMotion/ScrollMotion"
import AutoPlayVideo from "../ui/blocks/video"
const HomePage = () => {
  const [headColor, setHeadColor] = useState("white")
  const [headSolid, setHeadSolid] = useState(false)
  const [bottomShow, setBottomShow] = useState(false)

  useEffect(() => {
    if (window.innerWidth > 768) {
      window.scrollTo(0, 0)
    } else {
      setBottomShow(true)
    }
  }, [bottomShow])
  return (
    <ScrollToTop>
      <Header color={headColor} solid={headSolid} />
      <ScrollMotion
        setHeadColor={setHeadColor}
        setHeadSolid={setHeadSolid}
        setBottomShow={setBottomShow}
      />
      {bottomShow ? (
        <>
          <Info />
          <BadgeMobile />
          <Download />
          <Neighborhood />
          <AutoPlayVideo />
          <Gallery />
          <Footer />
        </>
      ) : (
        ""
      )}
    </ScrollToTop>
  )
}

export default HomePage
