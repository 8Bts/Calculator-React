import PropTypes from 'prop-types';

const Button = (props) => props.name;

Button.propTypes = { name: PropTypes.string.isRequired };

export default Button;
