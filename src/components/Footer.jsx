import { Avatar, Box ,Stack,Text, VStack} from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <Box minH={'48'}
    bg={'blackAlpha.900'}
    color={'white'}
    p={'6'}
    
    >
        <Stack direction={['column','row']} alignItems={'center'} h={'full'}> 
            <VStack  w={'full'} alignItems={['center','flex-start']} >
              <Text fontWeight={'bold'}>About Us</Text>
              <Text>We are best crypto trading app in india</Text>

            </VStack>
            <VStack  >
                <Avatar boxSize={'28'} mt={['4','0']}/>
                <Text >Our Founder</Text>
            </VStack>

        </Stack>
        

    </Box>
  )
}

export default Footer
