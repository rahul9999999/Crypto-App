import { Container, Heading, HStack, Image, VStack, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { server } from '../index'
import Loader from './Loader'
import ErrorComponent from './ErrorComponent'


const Exchange = () => {
    const [exchange, setExchange] = useState([])
    const [loading, setLoading] = useState(true)
    const [error,setError]=useState(false)
    useEffect(() => {
        const fetchExchange = async () => {
            try {
                const { data } = await axios.get(`${server}/exchanges`)
                setExchange(data)
                console.log(data)
                setLoading(false)
                
            } catch (error) {
                setError(true)
                setLoading(false)

            }
            
            
        }
        fetchExchange();
        
        
    }, [])
    if(error) return<ErrorComponent msg="Error while fetching Exchanges"/>
    // const ExchangeCard = ({ name, img, rank, url }) => {
        //     <a href={url} target="blank">
    //                             <VStack w={'50'} p={'8'} borderRadius={'lg'} shadow={'lg'} m={'4'}>
    //                                 <Image
    //                                     src={img}
    //                                     w={'10'}
    //                                     h={'10'}
    //                                     objectFit={'contain'}
    //                                     alt={'Exchange'}

    //                                 />

    //                             </VStack>



    //                         </a>
    // }
    return (
        <Container maxW={'container.xl'}>{loading ? <Loader /> :
            <>
                <HStack wrap={'wrap'} justifyContent={'space-evenly'}>
                    {exchange.map((i) => (
                        // <ExchangeCard name={i.name} img={i.img} url={i.url}
                        //     rank={i.trust_score_rank} />
                        <a href={i.url} target={"blank"} key={i.id}>
                            <VStack w={'52'} p={'8'} borderRadius={'lg'} shadow={'lg'}
                                m={'4'} transition={"all 0.5s"} css={{
                                    "&:hover": {
                                        transform: "scale(1.1)"
                                    }
                                }}>
                                <Image
                                    src={i.image}
                                    w={'10'}
                                    h={'10'}
                                    objectFit={'contain'}
                                    alt={'Exchange'}

                                />
                                <Heading size={'md'} noOfLines={1}>{i.trust_score_rank}</Heading>
                                <Text noOfLines={1}>{i.name}</Text>

                            </VStack>



                        </a>
                        


                    ))}
                </HStack>

            </>}
        </Container>

    )
}


export default Exchange
