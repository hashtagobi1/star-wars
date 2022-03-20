import React from 'react'
import {NavBar,Flex} from './styles'


const Nav = () => {
  return (
    <Flex>
    <NavBar>Todays date is {new Date().toDateString()}</NavBar>
    </Flex>

  )
}

export default Nav