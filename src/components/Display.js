import PropTypes from 'prop-types';

const Dipslay = (props) => {
  const { result } = props;
  return (
    <div className="display">
      { result }
    </div>
  );
};

Dipslay.propTypes = { result: PropTypes.string };
Dipslay.defaultProps = { result: '0' };

export default Dipslay;
