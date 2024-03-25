import { Box } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import "./contact.scss";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import InputField from "../components/form/inputFields/InputField";
import Button from "../components/button/Button";

//sigue clase 50

const Contact = () => {

    const MESSAGE_REQUIRED = "Dato requerido";
    //const REGEX_TELEPHONE = /^[(][0-9]{3,4}[)][0-9]{3}[-][0-9]{4,8}$/;
    const REGEX_EMAIL = /^[a-z0-9.]+@[a-z0-9-]+.(com$|com.[a-z0-9]{2}$)/;

    const validationSchema = yup.object({
        fullname: yup
            .string("Ingrese su nombre y apellido con letras")
            .min(8, "El nombre y apellido debe tener como mínimo 8 caracteres")
            .required(MESSAGE_REQUIRED),
        telephone: yup
            .number("Ingrese solo números")
            .min(8, "El número debe tener como mínimo 8 caracteres")
            //.matches(REGEX_TELEPHONE, "Ingresa un teléfono válido") //--> me tira error al usarlo
            .required(MESSAGE_REQUIRED),
        email: yup
            .string("Ingresa tu email")
            .min(12, "El email debe tener como mínimo 12 caracteres")
            .matches(REGEX_EMAIL, "Ingresa un email válido") // -> pero este no
            .required(MESSAGE_REQUIRED),
        consult: yup
            .string("Ingresa tu consulta")
            .min(20, "Ingresa una consulta entre 20 y 150 caracteres")
            .required(MESSAGE_REQUIRED),
    });

    const formik = useFormik({
        initialValues: {
            fullname: "",
            telephone: "",
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(values);
        },
    });
    return (
        <Box className="contact">
            <Box
                component="section"
                className="contact__section">
                <h3>Hace tu consulta</h3>

                <Box
                    component="form"
                    noValidate
                    autoComplete="off"
                    onSubmit={formik.handleSubmit}>
                    <InputField
                        label="Nombre y Apellido"
                        name="fullname"
                        value={formik.values.fullname}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.fullname && Boolean(formik.errors.fullname)}
                        errorMessage={formik.touched.fullname && formik.errors.fullname}
                        inputProps={{ maxLength: 50 }}
                    >
                    </InputField>
                    <InputField
                        label="Teléfono"
                        name="telephone"
                        value={formik.values.telephone}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.telephone && Boolean(formik.errors.telephone)}
                        errorMessage={formik.touched.telephone && formik.errors.telephone}
                        inputProps={{ maxLength: 150 }}
                    >
                    </InputField>
                    <InputField
                        label="Email"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        errorMessage={formik.touched.email && formik.errors.email}
                    >
                    </InputField>
                    <InputField
                        label="Consulta"
                        name="consult"
                        multiline
                        rows={4}
                        value={formik.values.consult}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.consult && Boolean(formik.errors.consult)}
                        errorMessage={formik.touched.consult && formik.errors.consult}
                    >
                    </InputField>
                    <Button type="submit">Enviar consulta</Button>
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
                            width="100%"
                            height="300"
                            loading="lazy"></iframe>
                    </Box>
                </Box>
            </Box>

        </Box>
    );
};

export default Contact;