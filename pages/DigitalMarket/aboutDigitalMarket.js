import { Box, Heading,Text } from "@chakra-ui/react";

const AboutDM = () => {
    return ( 
        <Box mx={'100px'} mt={10}>
            <Heading>About</Heading>
              <Text>
                In development, expressing stylesheets this way allows your styles to be hot reloaded as you edit them—meaning you can keep application state.In production, all CSS files will be automatically concatenated into a single minified .css file.
             </Text>
             <Text>
                In development, expressing stylesheets this way allows your styles to be hot reloaded as you edit them—meaning you can keep application state.In production, all CSS files will be automatically concatenated into a single minified .css file.
             </Text>
        </Box>
       
     );
}
 
export default AboutDM;