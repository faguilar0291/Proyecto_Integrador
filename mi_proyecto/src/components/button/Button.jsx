import PropTypes from "prop-types";
import { Button as ButtonUI } from "@mui/material";
import "./button.scss";

const Button = (props) => {

    const { type, children, className } = props;
    return (
        <ButtonUI
            className={className}
            type={type}
            variant="contained">
            {children}
        </ButtonUI>
    );
};

Button.propTypes = {
    type: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.string.isRequired,
};

Button.defaultProps = {
    type: "button",
    className: "button",
};

export default Button;