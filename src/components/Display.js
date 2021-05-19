import PropTypes from 'prop-types';

const Dipslay = (props) => props.result;

Dipslay.propTypes = { result: PropTypes.string.isRequired };
Dipslay.defaultProps = { result: '0' };

export default Dipslay;
