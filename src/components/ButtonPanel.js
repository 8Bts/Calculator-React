import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = (props) => {
  const handleCLick = (btnName) => { props.clickHandler(btnName); };

  return (
    <div>
      <div className="btn-group btn-group-1">
        <Button clickHandler={handleCLick} name="AC" />
        <Button clickHandler={handleCLick} name="+/-" />
        <Button clickHandler={handleCLick} name="%" />
        <Button clickHandler={handleCLick} name="/" />
      </div>
      <div className="btn-group btn-group-2">
        <Button clickHandler={handleCLick} name="7" />
        <Button clickHandler={handleCLick} name="8" />
        <Button clickHandler={handleCLick} name="9" />
        <Button clickHandler={handleCLick} name="X" />
      </div>
      <div className="btn-group btn-group-3">
        <Button clickHandler={handleCLick} name="4" />
        <Button clickHandler={handleCLick} name="5" />
        <Button clickHandler={handleCLick} name="6" />
        <Button clickHandler={handleCLick} name="-" />
      </div>
      <div className="btn-group btn-group-4">
        <Button clickHandler={handleCLick} name="1" />
        <Button clickHandler={handleCLick} name="2" />
        <Button clickHandler={handleCLick} name="3" />
        <Button clickHandler={handleCLick} name="+" />
      </div>
      <div className="btn-group btn-group-5">
        <Button clickHandler={handleCLick} name="0" />
        <Button clickHandler={handleCLick} name="." />
        <Button clickHandler={handleCLick} name="=" />
      </div>
    </div>
  );
};

ButtonPanel.propTypes = { clickHandler: PropTypes.func.isRequired };

export default ButtonPanel;
