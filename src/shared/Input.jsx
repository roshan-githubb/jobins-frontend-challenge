import PropTypes from "prop-types";
import { forwardRef } from "react";

const Input = forwardRef(({ inputClassName, ...rest }, ref) => {
    return <input ref={ref} className={`form-input ${inputClassName}`} {...rest} />;
});

Input.propTypes = {
    inputClassName: PropTypes.string,
};

Input.displayName = 'Input';

export default Input;
