import { Box } from '@chakra-ui/react'
import Head from 'next/head'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import CarouselSlide from '../components/CarouselSlide'
import SocialMediaMarketing from '../components/SocialMediaMarketing'
import BreakDesign from '../components/BreakDesign'
import GraphicDesign from '../components/GraphicDesign'
import Seo from '../components/Seo'
import ContactUs from '../components/ContactUs'
import Experience from '../components/Experience'
import WhoAre from '../components/WhoAre'
import Ads from '../components/Ads'

export default function Home() {
  return (
    <Box className={styles.container}>
      <Head>
        <title>Digital marketing</title>
        <meta name="Digital marketing" content="Generated by schoollog" />
      </Head>
       <Navbar /> 
       <WhoAre/>
       <BreakDesign/>
       {/* <WhatWeDo/> */}
       <SocialMediaMarketing/>
       <BreakDesign/>
       <GraphicDesign/>
       <BreakDesign/>
       <Ads/>
       <BreakDesign/>
       <Seo/>
       {/* <ContactUs/> */}
       <BreakDesign/>
       <Experience/>
       <CarouselSlide/>
       <Footer/>
    </Box>
  )
}

