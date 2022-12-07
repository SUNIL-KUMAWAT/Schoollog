import { Box } from "@chakra-ui/react";
import DrawerMenu from "./DrawerMenu";
import Icons from "./Icons";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
    return (
        <Box
        >
            <DrawerMenu />
            <Icons />
            {children}
            {/* <Footer/> */}
        </Box>
    );
}

export default Layout;