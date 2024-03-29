import Image from "next/image"
import styled from "styled-components"
import { COLORS } from "../variables"

const SharedVariables = {
  Height: "48px",
  BorderRadius: "8px",
  Padding: "12px 48px",
  Flex: "flex",
  AlignItems: "center",
  JustifyContent: "center",
  ImgMargin: "8px",
  HoverBorderColor: "#4B348B",
  Color: "#00080B"
}

export const LoginBtnsStyled = styled.button`
  height: ${SharedVariables.Height};
  border: none;
  outline: 2px solid ${SharedVariables.Color};;
  border-radius: ${SharedVariables.BorderRadius};
  padding: ${SharedVariables.Padding};
  display: ${SharedVariables.Flex};
  align-items: ${SharedVariables.AlignItems};
  justify-content: ${SharedVariables.JustifyContent};
  background-color: transparent;
  color:${SharedVariables.Color};
  cursor: pointer;
  position: relative;
  
  p{
    font-size: 16px;
    font-weight: 600;
    /* outline:5px red solid; */
    margin-left: ${SharedVariables.ImgMargin};
  }
  

  &:hover {
    outline: 4px solid ${SharedVariables.HoverBorderColor};
    border:none;
  }

  &:active {
    border: none;
    outline: 6px solid ${SharedVariables.HoverBorderColor};
  }
  
  &:focus-visible{
    outline: 4px solid ${COLORS.FocusOutline};
  }
  
  .facebookIcon{
    outline:5px red solid;
  }

  & img {
    /* margin-right: ${SharedVariables.ImgMargin}; */
    outline:5px red solid;
    
  }
`

export const Img = styled(Image)`
 width:24px;
 height:24px;

`
