import { EmailIcon, HamburgerIcon, PhoneIcon } from "@chakra-ui/icons";
import { Box, Button, Flex } from "@chakra-ui/react";
import Link from "next/link";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

// cursor={'pointer'} style={{ padding: '8px', height: '32px', width: '32px', boxShadow: '0px 0px 8px blue', marginTop: '5px', backgroundColor: 'white' }}
const Icons = () => {
    const links = [
        {
            iconName: <AiOutlineWhatsApp />,
            path: 'https://api.whatsapp.com/send/?phone=917015179549&text=Hi+Schoollog%21+I+would+like+to+buy+your+erp&type=phone_number&app_absent=0'
        },
        {
            iconName: <FaLinkedinIn />,
            path: 'https://in.linkedin.com/school/schoollog/'
        },
        {
            iconName: <PhoneIcon />,
            path: "tel:8765444567"
        },
        {
            iconName: <EmailIcon />,
            path: "mailto:info@schoollog.in"
        },
    ]

    return (

        <Flex justify={'flex-end'} zIndex={1} position={'relative'} >
            <Flex direction={'column'} mt={{ base: '200px', md: '220px' }} position={'fixed'} >
                {links.map((d) => {
                    return (
                        <Button bg={'white'} size={'sm'} mt={'8px'} boxShadow='0px 0px 3px blue'
                         key={d.path} _hover={{ transform: 'scale(1.1)', }} p={0} variant={'flused'} >
                            <Link href={d.path} target="_blank">{d.iconName}</Link></Button>
                    )
                })}
            </Flex>
        </Flex>
    );
}

export default Icons;


{/* <Button _hover={{ transform: 'scale(1.1)', }} p={0} variant={'flused'}><AiOutlineWhatsApp cursor={'pointer'} style={{ padding: '8px', height: '32px', width: '32px', boxShadow: '0px 0px 8px blue', marginTop: '1px', backgroundColor: 'white', }} /></Button>
                <Button _hover={{ transform: 'scale(1.1)', }} p={0} variant={'flused'}>< AiOutlineMessage cursor={'pointer'} style={{ padding: '8px', height: '32px', width: '32px', boxShadow: '0px 0px 8px blue', marginTop: '5px', backgroundColor: 'white' }} /></Button>
                <Button _hover={{ transform: 'scale(1.1)', }} p={0} variant={'flused'}><PhoneIcon cursor={'pointer'} style={{ padding: '8px', height: '32px', width: '32px', boxShadow: '0px 0px 8px blue', marginTop: '5px', backgroundColor: 'white' }} /></Button> */}
