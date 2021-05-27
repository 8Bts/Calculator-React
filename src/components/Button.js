import PropTypes from 'prop-types';

const Button = ({ name, clickHandler }) => {
  const handleCLick = () => {
    clickHandler(name);
  };

  return (
    <button type="button" onClick={handleCLick}>{name}</button>
  );
};

Button.propTypes = { name: PropTypes.string.isRequired, clickHandler: PropTypes.func.isRequired };

export default Button;
