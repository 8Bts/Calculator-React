import PropTypes from 'prop-types';

const Button = (props) => {
  const {
    name, clickHandler, color, wide,
  } = props;
  const handleCLick = () => {
    clickHandler(name);
  };

  const style = {
    width: wide ? '50%' : '25%',
    backgroundColor: color === 'gray' ? '#dfdfdf' : color,
  };

  return (
    <button style={style} className={`btn ${color === 'gray' ? 'gray-hover' : 'orange-hover'}`} type="button" onClick={handleCLick}>{name}</button>
  );
};

Button.defaultProps = { color: '#fb8f30' };

Button.propTypes = {
  name: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool.isRequired,
};

export default Button;
