import Image from "next/image.js"
import { Fragment, useState } from "react"
import { useORG_InputCtx } from "../../../context/ORG_Input"
import { P } from "../../ui/heading_body_text/DesktopMobileFonts"
import { LinkNoStyle } from "../../ui/hyperlink/HyperlinkNoStyles"
import { SingleDropdownWrapper } from "./styles/Singledropdown"
import ArrowUp from "../../../assets/Icons/ArrowUp.png"
import ArrowDown from "../../../assets/Icons/ArrowDown.png"

const Singledropdown = ({
  icon = "not found",
  title = "no title",
  suggestions = [],
  landingHere = false,
  actualRoute,
  toWhere
}) => {
  const { setKeywordsContext, keywordsContext } = useORG_InputCtx()
  // console.log('setKeywordsContext:', setKeywordsContext)
  // console.log('keywordsContext:', keywordsContext)

  const [showDropdown, setShowDropdown] = useState(false)

  const handleDropdownClick = () => {
    setShowDropdown((prevstate) => !prevstate)
  }

  const handleDropdownKey = (e) => {
    if (e.key === "Enter") {
      setShowDropdown((prevstate) => !prevstate)
    }
  }
  const suggestionsValidated =
    suggestions.length === 0 ? "Coming soon" : suggestions

  return (
    <>
      <SingleDropdownWrapper >
        {/* // ?TODO ICON should not be mandatory */}

        {icon !== "not found" && (
          <div>
            <Image src={icon} alt="" />
          </div>
        )}

        <span
          onClick={handleDropdownClick}
          onKeyDown={handleDropdownKey}
          tabIndex={0}
        >
          <P bold>{title}</P>
          <span>
            {showDropdown ? (
              <Image src={ArrowUp} alt="" />
            ) : (
              <Image src={ArrowDown} alt="" />
            )}
          </span>
        </span>
        <div className="ORGDropdownSuggestion">
          {showDropdown && suggestions.length !== 0 && (
            <>
              <div></div>
              {suggestionsValidated.map((x) => {
                const isSpeechTherapist = x.toLowerCase() === "speech therapist"
                const updateInput = (e) => {
                  // console.log('e:', e.target.textContent)
                  // setKeywordsContext(e.target.textContent)
                  // updateTry(e.target.textContent)
                }

                return (
                  <Fragment key={x}>
                    {isSpeechTherapist && landingHere ? (
                      <LinkNoStyle href={`${actualRoute.pathname}/${toWhere}`}>
                        <p
                          onClick={() => setKeywordsContext("Speech Therapist")}
                        >
                          {x}
                        </p>
                      </LinkNoStyle>
                    ) : (
                      landingHere && (
                        <LinkNoStyle href="/404">
                          <p>{x}</p>
                        </LinkNoStyle>
                      )
                    )}

                    {landingHere === false && (
                      <Fragment>
                        <p
                          onClick={(e) => {
                            // setKeywordsContext("hard coded")
                            // console.log("clicked!", e.target.textContent)
                            setKeywordsContext(e.target.textContent)
                          }}
                        >
                          {x}
                        </p>
                      </Fragment>
                    )}
                  </Fragment>
                )
              })}
              <div></div>
            </>
          )}
        </div>

        <div className="ORGDropdownComingSoon">
          {showDropdown && typeof suggestionsValidated === "string" && (
            <div onClick={handleDropdownClick}>
              <div></div>
              <p>Coming Soon!</p>
            </div>
          )}
        </div>
      </SingleDropdownWrapper>
    </>
  )
}

export default Singledropdown
