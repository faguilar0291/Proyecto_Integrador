import { Box } from "@mui/material";
import Navbar from "../navbar/Navbar";
import Logo from "../../logo/Logo";
import "./header.scss";

const Header = () => {
    return (
        <Box
            component="header"
            className="header">

            <Navbar/>
            <Box className="header__group">
                <Logo/>
                <h1 className="header__group__title">
                    Pizza
                    <span className="header__group__title header__group__title--subcolor">Store</span>
                </h1>
                <Logo/>
            </Box>

        </Box>
    );
};

export default Header;