import React from "react"
import { ScrollToTop } from "../ui/base/ScrollToTop"
import { AgreementsView } from "../ui/blocks/AgreementsView"
import { Header } from "../ui/blocks/Header"

const PolicyPage = () => {
  return (
    <ScrollToTop>
      <Header solid />
      <AgreementsView />
    </ScrollToTop>
  )
}

export default PolicyPage
