
import { Box, Flex, HStack, Image, Img, Spacer, Text } from "@chakra-ui/react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";



const Navbar = () => {

  const items = [
    // <Box key="1" w={'100%'}
    //  h={{ base: '220px', md: '300px', lg: '400px' }} 
    //  backgroundSize={'100%'} 
    //   bgImage={{base:'url("/0001.png")',md:'url("/001.png")'}} 
    //   backgroundRepeat={'no-repeat'}>
    // </Box>,
    // <Box key="2" h={{ base: '220px', md: '300px', lg: '400px' }} 
    //  backgroundSize={'100%'}  
    //  bgImage={{base:'url("/0002.png")',md:'url("/002.png")'}} 
    //  backgroundRepeat={'no-repeat'}>
    // </Box>,
    // <Box key="3" h={{ base: '220px', md: '300px', lg: '400px' }}
    //   backgroundSize={'100%'} 
    //    bgImage={{base:'url("/0003.png")',md:'url("/003.png")'}}
    //     backgroundRepeat={'no-repeat'}>
    // </Box>,
    // <Box key="4" h={{ base: '220px', md: '300px', lg: '400px' }}
    //   backgroundSize={'100%'}
    //    bgImage={{base:'url("/0004.png")',md:'url("/004.png")'}} 
    //    backgroundRepeat={'no-repeat'}>
    // </Box>,
    // <Box key="5" h={{ base: '220px', md: '300px', lg: '400px' }} backgroundSize={{base:'400px 220px ',md:'100vw 100%'}} bgImage={{base:'url("/0005.png")',md:'url("/005.png")'}} backgroundRepeat={'no-repeat'}>
    //    {/* <Image objectFit={'cover'} position={'absolute'} maxH={'400px'} minH={'220px'} w={'100%'} zIndex={-1} className="item" data-value="1" src='/main002.png' alt="" role="presentation" />  */}
    // </Box>,
    // <Image w={'100%'} maxH={'600px'} objectFit='cover' minH={'180px'} zIndex={-1} className="item" data-value="2" src={{base:'./0001.png', md:'./001.png',lg:'./001.png'}} key="2" alt="" role="presentation" />,
    <Image w={'100%'} mt={'10px'} maxH={'380px'}  objectFit={{base:'contain',md:'cover',lg:'cover'}}  zIndex={-1}   src='./001.png' key="1" alt=""  />,
    <Image w={'100%'} mt={'10px'} maxH={'380px'}  objectFit={{base:'contain',md:'cover',lg:'cover'}}  zIndex={-1}   src='./002.png' key="2" alt=""  />,
    <Image w={'100%'} mt={'10px'} maxH={'380px'}  objectFit={{base:'contain',md:'cover',lg:'cover'}}  zIndex={-1}   src='./003.png' key="3" alt=""  />,
    <Image w={'100%'} mt={'10px'} maxH={'380px'}  objectFit={{base:'contain',md:'cover',lg:'cover'}}  zIndex={-1}   src='./004.png' key="4" alt=""  />,
    <Image w={'100%'} mt={'10px'} maxH={'380px'}  objectFit={{base:'contain',md:'cover',lg:'cover'}}  zIndex={-1}   src='./005.png' key="5" alt=""  />,
   
  ];

  return (
    <Box >
      <Box>
        <AliceCarousel keyboardNavigation disableButtonsControls autoPlay infinite     
           autoPlayInterval={3000} 
           animationDuration={1000} 
           mouseTracking items={items} />
      </Box>
      {/* <Box w={'100%'} h={'20px'}>
        <Img  objectFit={'cover'} src='./dmlogo.jpg'></Img>
      </Box> */}
      <Box align='center' bgColor={'White'}
        borderTop={'5px solid #FFFF00'}
        borderBottom={'0px solid yellow '}
        // bgImage='url("./dmlogo.jpg")'
        // backgroundSize={'contain'}
        opacity={.91}

      // borderLeft={{base:'10px solid #FFFF00',lg:'40px solid #FFFF00'}}
      // borderRight={{base:'10px solid #FFFF00',lg:'40px solid #FFFF00'}}
      >

        <Img alt=""
          objectFit={'cover'}
          src="schoollogo.png"
          w={{ base: '190px', md: '280', lg: '300px' }}
        >
        </Img>

        <Text fontSize={{ base: '18px', md: '24', lg: '30px' }}
          style={{ letterSpacing: '1px', wordSpacing: '1px', }}
          color={'blabk'} fontFamily={"['Montserrat, sans-serif']"}>
          Want To Grow Your School Online?
        </Text>
        <Text pb={'15px'} fontSize={{ base: '18px', md: '24', lg: '30px' }}
          style={{ letterSpacing: '0px', wordSpacing: '0px' }}
          fontFamily={""}>
          <strong> We Provide Complete Digital Marketing Solutions</strong>
        </Text>
      </Box>
    </Box>
  )
}
export default Navbar;


/* <Flex mx={10} minWidth='max-content' alignItems='center' justifyContent={"space-between"}>           
           
<Image src='/school.jpg' width={128} height={77} />        
<Flex gap='4'>
    <Link href='/'>Home</Link>
    <Link href='/about'>About</Link>
    <Link href='/DigitalMarket'>DigitalMarket</Link>
</Flex>
</Flex> */
