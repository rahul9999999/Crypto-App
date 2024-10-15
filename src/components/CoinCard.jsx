import React from 'react'
import {  Heading,  Image, VStack, Text} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const CoinCard = ({id,name,symbol,price,img,currencySymbol}) => {
  return (
    <Link to={`/coins/${id}`}  >
                            <VStack w={'52'} p={'8'} borderRadius={'lg'} shadow={'lg'}
                                m={'4'} transition={"all 0.5s"} css={{
                                    "&:hover": {
                                        transform: "scale(1.1)"
                                    }
                                }}>
                                <Image
                                    src={img}
                                    w={'10'}
                                    h={'10'}
                                    objectFit={'contain'}
                                    alt={'Exchange'}

                                />
                                <Heading size={'md'} noOfLines={1}>{name}</Heading>
                                <Text noOfLines={1}>{symbol}</Text>

                                <Text noOfLines={1}>{price ?`${currencySymbol}${price}` : "NA"}</Text>

                            </VStack>



                        </Link>
  )
}

export default CoinCard
