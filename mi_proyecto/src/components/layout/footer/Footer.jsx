import { Box, Link } from "@mui/material";
import { NavLink } from "react-router-dom";
import "./footer.scss";

const Footer = () => {

    const links = [
        { id: 1, text: "Inicio", url: "/"},
        { id: 2, text: "Nosotros", url: "/about"},
        { id: 3, text: "Contacto", url: "/contact" },
    ];

    return (
        <Box
            component="footer"
            className="footer">

            <Box className="footer__groups">
                <Box>
                    <h4>Explorar</h4>
                    <Box className="footer__groups__list">
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
                    <h4>Legales</h4>
                    <Box className="footer__groups__list">
                        <Link href="https://www.google.com/" > Términos y condiciones </Link>
                    </Box>
                </Box>
                <Box>
                    <h4>RRSS</h4>
                    <Box className="footer__groups__list">
                        <h4>x</h4>
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