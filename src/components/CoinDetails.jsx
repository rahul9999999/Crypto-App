import { Box, Container, HStack, Radio, RadioGroup, VStack, Text, Image, StatLabel, Stat, StatNumber, StatHelpText, StatArrow, Badge, Progress, Button } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState} from 'react'
import { server } from '../index';
import Loader from './Loader';
import { useParams } from 'react-router-dom';
import ErrorComponent from './ErrorComponent';
import  Chart  from './Chart';

const CoinDetails = () => {
  const [coin, setCoin] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currency, setCurrency] = useState("inr");
  const [days, setdays] = useState("24h");
  const [Chartarray, setChartArray] = useState([]);



  const currencySymbol =
    currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";

  const params = useParams()
  const btns=['24h','7d','14d','30d','60d','200d','1y','max']

  const switchChartsStats=(key)=>{
    switch (key){
      case "24h":
        setdays('24h');
        setLoading(true)
        break;
      case "7d":
        setdays('7d');
        setLoading(true)
        break;
      case "14d":
        setdays('14d');
        setLoading(true)
        break;
      case "30d":
        setdays('30d');
        setLoading(true)
        break;
      case "60d":
        setdays('60d');
        setLoading(true)
        break;
      case "300d":
        setdays('300d');
        setLoading(true)
        break;
      case "1y":
        setdays('365d');
        setLoading(true)
        break;
      case "max":
        setdays('max');
        setLoading(true)
        break;

      default:
        setdays('24h');
        setLoading(true)
        break;

    }

  }

  useEffect(() => {
    const fetchCoin = async () => {
      try {
        const { data } = await axios.get(
          `${server}/coins/${params.id}`
        );
        const { data: ChartData } = await axios.get(
          `${server}/coins/${params.id}/market_chart?vs_currency=${currency}&days=${days}`
        );
        
        setCoin(data);
        setChartArray(ChartData.prices)
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchCoin();
  }, [params.id,currency,days]);

  if (error) return <ErrorComponent message={"Error While Fetching Coin"} />;
  return (
    <Container maxW={'container.xl'} >{
      loading ? <Loader /> : (
        <>
          <Box w={'full'} borderWidth={1}>
            <Chart arr={Chartarray} currency={currencySymbol} days={days}/>
            </Box>
            <HStack p={'6'} overflow={'auto'}>
              {
                btns.map((i)=>(
                  <Button key={i} onClick={()=>switchChartsStats(i)}>{i}</Button>
                ))
              }
            </HStack>
          <RadioGroup value={currency} onChange={setCurrency} p={"8"}>
            <HStack spacing={"4"}>
              <Radio value={"inr"}>INR</Radio>
              <Radio value={"usd"}>USD</Radio>
              <Radio value={"eur"}>EUR</Radio>
            </HStack>
          </RadioGroup>

          <VStack alignItems={'flex-start'}>
            <Text alignSelf={'center'}>Last Updated on {Date(coin.market_data.last_updated).split("G")[0]}</Text>
            <Image
              src={coin.image.large}
              h={'16'}
              w={'16'}
              objectFit={'contain'} />

            <Stat>
              <StatLabel>{coin.name}</StatLabel>
              <StatNumber>{currencySymbol}{coin.market_data.current_price[currency]}</StatNumber>
              <StatHelpText>
                <StatArrow type={coin.market_data.price_change_percentage_24h > 0 ? 'increase' : 'decrease'} />
                {coin.market_data.price_change_percentage_24h}%


              </StatHelpText>
            </Stat>
            <Badge fontSize={'xl'}>{`#${coin.market_data.market_cap_rank}`}</Badge>
            <CustomBar
              high={`${currencySymbol}${coin.market_data.high_24h[currency]}`}
              low={`${currencySymbol}${coin.market_data.low_24h[currency]}`}
            />
            <Box w={'full'} p={'4'} >

            <Items
             title={'Max Supply'} 
             value={coin.market_data.max_supply}/>
            
            <Items
             title={'Circulating Supply'} 
             value={coin.market_data.circulating_supply}/>
            <Items
             title={'Market Cap'} 
             value={`${currencySymbol}${coin.market_data.market_cap[currency]}`}/>
            <Items
             title={'All time high'} 
             value={`${currencySymbol}${coin.market_data.ath[currency]}`}/>
            
            <Items
             title={'All time Low'} 
             value={`${currencySymbol}${coin.market_data.atl[currency]}`}/>
            
            </Box>
          </VStack>
          

        </>
        
      )}
      

    </Container>
  )
  
}


const CustomBar = ( {high, low }) => (
  <VStack w={"full"}>
    <Progress value={50} colorScheme={"teal"} w={"full"} />
    <HStack justifyContent={"space-between"} w={"full"}>
      <Badge children={low} colorScheme={"red"} />
      <Text fontSize={"sm"}>24H Range</Text>
      <Badge children={high} colorScheme={"green"} />
    </HStack>
  </VStack>
);
const Items=({title,value})=>(
  <HStack w={'full'} justifyContent={'space-between'} my={'10'} textTransform={'uppercase'}>
    <Text fontFamily={'Tilt Warp'} fontSize={'15'}>{title}</Text>
    <Text>{value}</Text>
  </HStack>

)


export default CoinDetails
