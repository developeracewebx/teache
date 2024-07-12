import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import "./styles/fonts.css"
import "./styles/globals.css"

import TagManager from "react-gtm-module"

const tagManagerArgs = {
  gtmId: "G-KDM5HW3Y5R",
}

TagManager.initialize(tagManagerArgs)

ReactDOM.render(<App />, document.getElementById("root"))
