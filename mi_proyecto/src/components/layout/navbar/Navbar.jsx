import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Box, Button, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import Badge from "@mui/material/Badge";
import HomeIcon from "@mui/icons-material/Home";
import StoreIcon from "@mui/icons-material/Store";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import EmailIcon from "@mui/icons-material/Email";
import "./navbar.scss";

//clase 48 min 27

const Navbar = () => {

    const [ openDrawer, setOpenDrawer ] = useState(false);

    const links = [
        { id: 1, text: "Inicio", url: "/", icon: <HomeIcon/> },
        { id: 2, text: "Nosotros", url: "/about", icon: <StoreIcon/> },
        { id: 3, text: "Contacto", url: "/contact", icon: <EmailIcon/> },
    ];

    const handleOpenDrawer = () => {
        setOpenDrawer(true);
    };

    const handleCloseDrawer = () => {
        setOpenDrawer(false);
    };

    return (
        <Box className="navbar">

            <Box className="navbar__drawer-icon">
                <MenuOutlinedIcon onClick={handleOpenDrawer}/>
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
                onClose={handleCloseDrawer}>
                <List>
                    {links.map( (link) => (
                        <ListItem
                            key={link.id}
                            component={NavLink}
                            to={link.url}>
                            <ListItemButton
                                onClick={handleCloseDrawer}>
                                <ListItemIcon>
                                    {link.icon}
                                </ListItemIcon>
                                <ListItemText>{link.text}</ListItemText>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </Box>
    );
};

export default Navbar;