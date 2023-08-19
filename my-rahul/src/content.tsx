import cssText from "data-text:~style.css"
import type { PlasmoCSConfig } from "plasmo"

import Data from "~features/Data"

export const config: PlasmoCSConfig = {
  matches: ["https://www.plasmo.com/*"]
}

export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssText
  return style
}

const PlasmoOverlay = () => {
  return (
    <div className="plasmo-z-50 plasmo-flex plasmo-fixed plasmo-top-32 plasmo-right-8">
      <Data />
    </div>
  )
}

export default PlasmoOverlay
