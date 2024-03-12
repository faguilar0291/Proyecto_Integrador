import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Box, Button, Drawer, IconButton } from "@mui/material";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import "./navbar.scss";

const Navbar = () => {

    const [ openDrawer, setOpenDrawer ] = useState(false);

    const links = [
        { id: 1, text: "Inicio", url: "/", icon:"" },
        { id: 2, text: "Nosotros", url: "/about", icon:"" },
        { id: 3, text: "Contacto", url: "/contact", icon:"" },
    ];

    const abrir = () => {
        setOpenDrawer(true);
    };

    const cerrar = () => {
        setOpenDrawer(false);
    };

    return (
        <Box className="navbar">

            <Box className="navbar__drawer-icon">
                <MenuOutlinedIcon onClick={abrir}/>
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
                <IconButton>
                    <Badge
                        className="navbar__shopping-cart__icon-badge"
                        badgeContent={6}
                        color="primary">
                        <ShoppingCartOutlinedIcon/>
                    </Badge>
                </IconButton>
            </Box>
            <Drawer
                open={openDrawer}
                anchor="left"
                onClose={cerrar}>
            </Drawer>
        </Box>
    );
};

export default Navbar;