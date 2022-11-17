import { Box, Container } from '@chakra-ui/react'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Loader from './Loader';
import { server } from '../index';

const CoinDetails = () => {
    const [coins , setCoins] = useState([]);
    const [loading , setLoading] = useState(true);
    const [error , setError] = useState(false);
    const [page , setPage] = useState(1);

    const params = useParams();

    useEffect(() => {
      
        const fetchCoins = async () => 
        {
            try {
                const {data} = await axios.get(`${server}/coins/${params.id}`);
                setCoins(data);
                        console.log(data);
                        setLoading(false) 
            } catch (error) {
                setError(true)
                setLoading(false) 
            }
    
        };
        fetchCoins();
        }, [ page])

  return (
   <Container>
    {
        loading? <Loader/>:
        <>
        <Box width={"full"} borderWidth={""}></Box>
        </>
    }
   </Container>
  )
}

export default CoinDetails