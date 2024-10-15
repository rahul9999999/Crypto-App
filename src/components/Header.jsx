import React from 'react'
import { Button, HStack } from '@chakra-ui/react'
import ColorModeSwitcher from '../ColorModeSwitcher'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <HStack p={'2'} bg={'blackAlpha.900'}>
        <ColorModeSwitcher/>
        <Button variant={'unstyled'}>
            <Link to='/home'>Home</Link>
        </Button>
        <Button variant={'unstyled'}>
            <Link to='/exchange'>Exchange</Link>
        </Button>
        <Button variant={'unstyled'}>
            <Link to='/coins'>Coins</Link>
        </Button>

    </HStack>

  )
}

export default Header
