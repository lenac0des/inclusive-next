import styled from 'styled-components'
 

export const FooterStyled = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 22px 0px 6px;
gap: 16px;
position: absolute;
width: 1440px;
height: 490px;
left: 0px;
top: 2804px;
background: #F4F4F4;
` 
export const Logo = styled.h2`
margin-left: -50px;
margin-top: -25px;
margin-right: 850px;
font-size: 34px;
line-height: -55px;
font-famliy: 'Poppins';
font-weight: 800;
color: rgba(164, 97, 187, 1)
`

export const IconText = styled.h4`
border: 2px solid red;
font-size: 20px;
letter-spacing: 0.05em;
font-style: normal;
line-height: 32px;
font-family: 'Poppins';
font-weight: 600;
color: #00080B;
`
// export const Icon = styled.i`
// width: 36px;
// height: 36px;
// `


export const Row = styled.div`
border: 2px solid green;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-gap: 60px;
justify-content: center;


@media (max-width: 1000px) {
   grid-template-columns: repeat()(auto-fill, minmax()(200px,1fr));
   grid-gapL 20px;
}
`

export const Column = styled.div`
border: 3px solid orange;
text-align: center;
display: flex;
flex-direction: column;
max-width: 200px;
margin: 0 auto;
`
export const Caption = styled.h6`
border: 3px dotted pink;
`