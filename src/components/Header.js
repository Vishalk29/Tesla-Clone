// USing the USstate for menu bar open and close modulation
// so inside import react add usestate
import React, {useState} from 'react'
import styled from 'styled-components'
import logoImg from '../images/logo.svg'
// import carSlices
import {selectCars} from '../features/car/carSlice'
import {useSelector} from 'react-redux'
// importing the material ui and install matarial ui in console
import MenuIcon from '@material-ui/icons/Menu'
// material ui for close button
import CloseIcon from '@material-ui/icons/Close'
function Header() {
  const cars = useSelector(selectCars)
  // console.log(cars)

  // create
  const [burgerStatus, setburgerStatus] = useState(false)
  return (
    <Container>
      <a>
        <img src={logoImg} alt='Tesla logo' />
      </a>

      <Menu>
        {cars &&
          cars.map((car, index) => (
            <a key={index} href='#'>
              {car}
            </a>
          ))}
      </Menu>

      <RightMenu>
        <a href='#'> Shop</a>
        <a href='#'>Tesla Account</a>
        <CustomMenu onClick={() => setburgerStatus(true)} />
      </RightMenu>

      <BurgerNav show={burgerStatus}>
        <CloseWrap>
          <CustomCloseMenu onClick={() => setburgerStatus(false)} />
        </CloseWrap>
        {cars &&
          cars.map((car, index) => (
            <li key={index}>
              <a href='#'>{car}</a>
            </li>
          ))}

        <li>
          {' '}
          <a href='#'>Existing Inventory</a>{' '}
        </li>
        <li>
          {' '}
          <a href='#'>Used Inventory</a>{' '}
        </li>
        <li>
          {' '}
          <a href='#'>Trade-in</a>{' '}
        </li>
        <li>
          {' '}
          <a href='#'>Cybertruck</a>{' '}
        </li>
        <li>
          {' '}
          <a href='#'>Roadster</a>{' '}
        </li>
        <li>
          {' '}
          <a href='#'>Semi</a>{' '}
        </li>
        <li>
          {' '}
          <a href='#'>Charging</a>{' '}
        </li>
        <li>
          {' '}
          <a href='#'>Power</a>{' '}
        </li>
        <li>
          {' '}
          <a href='#'>Components</a>{' '}
        </li>
        <li>
          {' '}
          <a href='#'>Utilities</a>{' '}
        </li>
        <li>
          {' '}
          <a href='#'>Test Drive</a>{' '}
        </li>
      </BurgerNav>
    </Container>
  )
}

export default Header

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
    cursor: pointer;
  }
  @media (max-width: 768px) {
    display: none;
  }
`
const RightMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
    flex-wrap: nowrap;
    cursor: pointer;
  }
`

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`
const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: #fff;
  width: 300px;
  z-index: 100;
  list-style: none;
  padding: 20px;
  tex-align: start;
  transform: ${(props) => (props.show ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.8s ease;

  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    a {
      font-weight: bold;
    }
  }
`
const CustomCloseMenu = styled(CloseIcon)`
  cursor: pointer;
`
const CloseWrap = styled.div`
  display: flex;
  justify-content: end;
`
