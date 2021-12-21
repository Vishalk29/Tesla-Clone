import React from 'react'
import styled from 'styled-components'
// using the react revel library for nimation on itemtext and button
import Fade from 'react-reveal/Fade'
// image of model s
// import MyImage from '../images/model-s.jpg'

// image of downarrow
import DownArrows from '../images/down-arrow.svg'
function Section({
  title,
  description,
  leftBtnText,
  rightBtnText,
  backgroundImg,
}) {
  return (
    <Wrap bgImg={backgroundImg}>
      <Fade bottom>
        <Itemtext>
          <h1>{title}</h1>
          <p>{description}</p>
        </Itemtext>
      </Fade>
      <Button>
        <Fade bottom>
          <ButtonGroup>
            <LeftButton>{leftBtnText}</LeftButton>
            {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
          </ButtonGroup>
        </Fade>
        <DownArrow src={DownArrows} />
      </Button>
    </Wrap>
  )
}

export default Section
// wrap class with flex diection
// background-image: url(${MyImage});

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between; // vertical alignment
  align-items: center; //Horizontal alignment
  background-image: ${(props) => `url("${props.bgImg}")`};
`

const Itemtext = styled.div`
  text-align: center;
  padding-top: 15vh;
`

// to get button to bottom we do wrap class as flex
const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 260px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`
const RightButton = styled(LeftButton)`
  background-color: #fff;
  opacity: 0.6;
  color: #333;
`

const DownArrow = styled.img`
  margin-top: 20px;
  height: 40px;
  position: relative;
  bottom: 0;
  left: 45%;

  // adding the animation to arrow
  animation: animationDown infinite 1.5s;
`

// button wraping
const Button = styled.div``
