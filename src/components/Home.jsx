import { Box,Image ,Text} from '@chakra-ui/react'
import React from 'react'
import img1 from '../assets/btc.jpg'
import {motion} from 'framer-motion'

const Home = () => {
  return (
  <Box h={'85vh'} w={'full'} bg={'blackAlpha.900'}>
    <motion.div 
    style={{height:'80vh',}}
    animate={{
      translateY:'20px'

    }}
    transition={{
      duration:2,
      repeat:Infinity,
      repeatType:'reverse'
    }}>

    <Image
     w={'full'}
    h={'full'}
    objectFit={'cover'}
    src={img1}
    />
    </motion.div>

<Text fontSize={['4xl','6xl']} 
textAlign={'center'}
marginTop='-90'
fontWeight={'bold'}
>CryptoMarket</Text>


   
  </Box>
   
    
  )
}

export default Home

