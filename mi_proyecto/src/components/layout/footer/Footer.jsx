import { Box, Link, Tooltip } from "@mui/material";
import { NavLink } from "react-router-dom";
import "./footer.scss";

import Discord from "../../../styles/svg/Discord";
import Facebook from "../../../styles/svg/Facebook";
import Instagram from "../../../styles/svg/Instagram";
import Linkedin from "../../../styles/svg/Linkedin";
import Twitter from "../../../styles/svg/Twitter";
import Youtube from "../../../styles/svg/Youtube";

const Footer = () => {

    const links = [
        { id: 1, text: "Inicio", url: "/" },
        { id: 2, text: "Nosotros", url: "/about" },
        { id: 3, text: "Contacto", url: "/contact" },
    ];

    const socialMedias = [
        { id: 1, url: "https://discord.com/channels/859921242023133215/1084896600175956068", icon: <Discord/>, toolTip: "Discord" },
        { id: 2, url: "/", icon: <Facebook/>, toolTip: "Facebook" },
        { id: 3, url: "/", icon: <Instagram/>, toolTip: "Instagram" },
        { id: 4, url: "/", icon: <Linkedin/>, toolTip: "Linkedin" },
        { id: 5, url: "/", icon: <Twitter/>, toolTip: "Twitter" },
        { id: 6, url: "/", icon: <Youtube/>, toolTip: "Youtube" },
    ];

    return (
        <Box
            component="footer"
            className="footer">

            <Box className="footer__groups">
                <Box>
                    <h4 className="footer__groups__title">Explorar</h4>
                    <Box className="footer__groups__list footer__groups__list--explorer">
                        {links.map( (link) => (
                            <NavLink
                                key={link.id}
                                to={link.url}>
                                {link.text}
                            </NavLink>
                        ))}
                    </Box>
                </Box>
                <Box>
                    <h4 className="footer__groups__title">Legales</h4>
                    <Box className="footer__groups__list footer__groups__list--legal">
                        <Link href="https://drive.google.com/file/d/1KAFwT5k5s4sLRn8lD2IIbPpy0jAHj_m3/view?usp=sharing"> Términos y condiciones </Link>
                    </Box>
                </Box>
                <Box>
                    <h4 className="footer__groups__title">RRSS</h4>
                    <Box className="footer__groups__list footer__groups__list--social-media">
                        {socialMedias.map( (socialmedia) => (
                            <Tooltip
                                key={socialmedia.id}
                                title={socialmedia.toolTip}>
                                <Link href={socialmedia.url}>{socialmedia.icon}</Link>
                            </Tooltip>
                        ))}
                    </Box>
                </Box>
            </Box>

            <Box className="footer__copyrigth">
                <span>&copy;2023 Todos los derechos reservados</span>
            </Box>
        </Box>
    );
};

export default Footer;