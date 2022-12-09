import { Box, Heading, Image } from "@chakra-ui/react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

const CarouselSlide = () => {

  const items = [
    <Image w={'180px'} h={'120px'} p={'8px'} margin={'0px'} border={'0px solid gray'} className="item" data-value="1" src='https://images.moneycontrol.com/static-mcnews/2018/03/Amazon-1.jpg' key="1" alt="" role="presentation" />,
    <Image w={'180px'} h={'120px'} p={'8px'} margin={'0px'} border={'0px solid gray'} className="item" data-value="2" src='https://1000logos.net/wp-content/uploads/2021/05/Google-logo-500x281.png' key="2" alt="" role="presentation" />,
    <Image w={'180px'} h={'120px'} p={'8px'} margin={'0px'} border={'0px solid gray'} className="item" data-value="2" src='https://img.freepik.com/free-vector/branding-identity-corporate-vector-logo-design_460848-8717.jpg?w=2000' key="2" alt="" role="presentation" />,
    <Image w={'180px'} h={'120px'} p={'8px'} margin={'0px'} border={'0px solid gray'} className="item" data-value="3" src='https://1000logos.net/wp-content/uploads/2021/02/Flipkart-Logo-2007.png' key="3" alt="" role="presentation" />,
    <Image w={'180px'} h={'120px'} p={'8px'} margin={'0px'} border={'0px solid gray'} className="item" data-value="4" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb2atm6d4jSdXA9AXz2Ku1V8LHWSCLSEKlbw&usqp=CAU' key="4" alt="" role="presentation" />,
    <Image w={'180px'} h={'120px'} p={'8px'} margin={'0px'} border={'0px solid gray'} className="item" data-value="5" src='https://e7.pngegg.com/pngimages/586/937/png-clipart-the-coca-cola-company-soft-drink-logo-coca-cola-logo-food-text.png' key="5" alt="" role="presentation" />,
    <Image w={'180px'} h={'120px'} p={'8px'} margin={'0px'} border={'0px solid gray'} className="item" data-value="6" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYsct1fD6EoOTDTASVvXTsg4TJ_wcONAtE6A&usqp=CAU' key="6" alt="" role="presentation" />,
    <Image w={'180px'} h={'120px'} p={'8px'} margin={'0px'} border={'0px solid gray'} className="item" data-value="6" src='https://render.fineartamerica.com/images/rendered/search/print/8/6/break/images/artworkimages/medium/1/ferari-kesha-ursula.jpg' key="7" alt="" role="presentation" />,
  ];
  const responsive = {
    0: { items: 1 },
    146: { items: 2 },
    292: { items: 3 },
    348: { items: 4 },
    584: { items: 5 },
    730: { items: 6 },
    1024: { items: 7 }
  };

  return (
    <Box bgColor={'white'} py={'20px'} id={'ourclient'}>
      <Box w={'70%'} margin={'auto'}  >
        <AliceCarousel paddingLeft disableButtonsControls autoWidth autoPlay
          animationDuration={'2000'} disableDotsControls infinite
          // responsive={responsive}
          mouseTracking items={items} />
      </Box>
    </Box>
  );
}

export default CarouselSlide;

// const items = [
//     <div className="item" data-value="1">1</div>,
//     <div className="item" data-value="2">2</div>,
//     <div className="item" data-value="3">3</div>,
//     <div className="item" data-value="4">4</div>,
//     <div className="item" data-value="5">5</div>,
// ];


{/* <Carousel infiniteLoop
        autoPlay
        showArrows={false}
        showIndicators={false}
        centerMode={false}
         >
        {images.map((img, index) => (
          <Box key={index} h={'200px'} >
            <Image
              h="80%" objectFit={"contain"} src={img.url} alt="" />
          </Box>
        ))}
      </Carousel> */}