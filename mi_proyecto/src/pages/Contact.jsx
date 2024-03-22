import { Box, Button, TextField } from "@mui/material";
import "./contact.scss";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

//Clase 49 , 1hr 30min

const Contact = () => {
    return (
        <Box className="contact">
            <Box
                component="section"
                className="contact__section">
                <h3>Hace tu consulta</h3>

                <Box >
                    <TextField
                        label="Nombre y Apellido"
                        name="fullname">
                    </TextField>
                    <TextField
                        label="Teléfono"
                        name="telephone">
                    </TextField>
                    <TextField
                        label="Email"
                        name="email">
                    </TextField>
                    <TextField
                        label="Consulta"
                        name="consult">
                    </TextField>
                    <Button>Enviar consulta</Button>
                </Box>
            </Box>
            <Box
                component="section"
                className="contact__section">
                <h3>Datos de contacto</h3>
                <Box className="contact__section--data">
                    <Box>
                        <FmdGoodIcon/><span>Domicilio: Avenida de los quesos 500</span>
                    </Box>
                    <Box>
                        <LocalPhoneIcon/><span>Tel: +549 - 0303456</span>
                    </Box>
                    <Box>
                        <MailOutlineIcon/><span>Correo : contacto@pizzastore.com</span>
                    </Box>
                    <Box>
                        <h2>Nuestro mapita</h2>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1640.4237451358956!2d-58.38663086032716!3d-34.6837984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcccc5ce2e9605%3A0x23fbbe423eb0a7da!2sB%26B%20Grouting%20S.r.l.!5e0!3m2!1ses-419!2sar!4v1711071226336!5m2!1ses-419!2sar"
                            width="400"
                            height="300"
                            loading="lazy"></iframe>
                    </Box>
                </Box>
            </Box>

        </Box>
    );
};

export default Contact;