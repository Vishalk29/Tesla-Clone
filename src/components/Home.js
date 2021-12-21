import React from 'react'
import styled from 'styled-components'
import Section from './Section'
import Image from '../images/model-s.jpg'
import Images from '../images/model-y.jpg'
import Img from '../images/model-3.jpg'
import Imge from '../images/model-x.jpg'
import solar from '../images/solar-panel.jpg'
import solarpanel from '../images/solar-roof.jpg'
import acces from '../images/accessories.jpg'

function Home() {
  return (
    <Container>
      <Section
        title='Model S'
        description='Order Online for touchless Delivery'
        backgroundImg={Image}
        leftBtnText='  Custom Order'
        rightBtnText=' Existing Inventory'
      />

      <Section
        title='Model Y'
        description='Order Online for touchless Delivery'
        backgroundImg={Images}
        leftBtnText='  Custom Order'
        rightBtnText=' Existing Inventory'
      />

      <Section
        title='Model 3'
        description='Order Online for touchless Delivery'
        backgroundImg={Img}
        leftBtnText='  Custom Order'
        rightBtnText=' Existing Inventory'
      />

      <Section
        title='Model X'
        description='Order Online for touchless Delivery'
        backgroundImg={Imge}
        leftBtnText='  Custom Order'
        rightBtnText=' Existing Inventory'
      />

      <Section
        title='Lowerst Cost Solar Panels in America'
        description='Money-back guarantee'
        backgroundImg={solar}
        leftBtnText='Oder now'
        rightBtnText='Learn more'
      ></Section>
      <Section
        title='Solar for New Roofs'
        description='Solar Roof Costs Less Than a New'
        backgroundImg={solarpanel}
        leftBtnText='Oder now'
        rightBtnText='Learn more'
      ></Section>
      <Section
        title='Accessories'
        description=''
        backgroundImg={acces}
        leftBtnText='Shop now'
      ></Section>
    </Container>
  )
}

export default Home

const Container = styled.div`
  height: 100vh;
`
