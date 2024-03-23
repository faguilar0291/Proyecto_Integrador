import PropTypes from "prop-types";
import { TextField } from "@mui/material";
import "./inputField.scss";

const InputField = (props) => {

    const { multiline, label, type, rows, name} = props;
    return (
        <TextField 
            className="input-field"
            label={label}
            type={type}
            multiline={multiline}
            rows={rows}
            name={name}
            id={name}>

        </TextField>
    );
};

InputField.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string,
    multiline: PropTypes.bool,
    rows: PropTypes.number,
    name: PropTypes.string.isRequired,
    id: PropTypes.string,
};

InputField.defaultProps = {
    type: "text",
    multiline: false,
};

export default InputField;




//clase 49 1:51