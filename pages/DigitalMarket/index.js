import Head from 'next/head';
import { Box, Text } from '@chakra-ui/react'
import AboutDM from './aboutDigitalMarket';
import Link from 'next/link'
import Test from './test';
import AboutUsPage from '../../components/AboutUs';

// export const getStaticProps = async () =>{
//     const res  = await fetch('https://api.publicapis.org/entries');
//     const data = await res.json();
//     return {
//          props:{digital: data}
//     }
// }


const DigitalMarket = ({digital}) => {
    return ( 
        <>
     <AboutUsPage/>
        </>

     );
}
 
export default DigitalMarket;