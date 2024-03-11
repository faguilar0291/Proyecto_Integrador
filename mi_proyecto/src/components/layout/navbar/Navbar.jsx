import { NavLink } from "react-router-dom";
import { Box, Button } from "@mui/material";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import "./navbar.scss";

const Navbar = () => {

    const links = [
        { id: 1, text: "Inicio", url: "/", icon:"" },
        { id: 2, text: "Nosotros", url: "/about", icon:"" },
        { id: 3, text: "Contacto", url: "/contact", icon:"" },
    ];

    return (
        <Box className="navbar">

            <Box className="navbar__drawer-icon">
                <MenuOutlinedIcon/>
            </Box>
            <Box className="navbar__items">
                {links.map( (link) => {
                    return <Button
                        key={link.id}
                        component={NavLink}
                        to={link.url}>
                        {link.text}
                    </Button>;
                })}

            </Box>
            <Box className="navbar__shopping-cart">
                <Badge
                    className="navbar__shopping-cart__icon-badge"
                    badgeContent={6}
                    color="primary">
                    <ShoppingCartOutlinedIcon/>
                </Badge>
            </Box>
        </Box>
    );
};

export default Navbar;