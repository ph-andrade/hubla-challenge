import React from 'react'

import HublaLogo from '../assets/HublaLogo.svg'

import { Container } from '../styles/components/Header'
import Image from 'next/image'

const Header: React.FC = () => {
  return (
    <Container>
      <Image src={HublaLogo} alt="" />		  
    </Container>
  )
}

export default Header