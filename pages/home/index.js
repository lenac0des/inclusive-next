import { useEffect } from "react"
import HeroImage from "./HeroImage.js"
import Main from './Main.js'

import styled from "styled-components"

const MaincontentProvisional = styled.h2`
  height: 100vh;
  border: 3px crimson solid;
  display:grid;
  place-items: center;
`

export default function HomeIndex() {
  useEffect(() => {
    // console.log("Render ones");
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <HeroImage />

      <Main />
    </>
  )
}
