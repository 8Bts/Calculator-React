import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = (props) => {
  const handleCLick = (btnName) => { props.clickHandler(btnName); };

  return (
    <div>
      <div className="btn-group btn-group-1">
        <Button clickHandler={handleCLick} name="AC" color="gray" wide={false} />
        <Button clickHandler={handleCLick} name="+/-" color="gray" wide={false} />
        <Button clickHandler={handleCLick} name="%" color="gray" wide={false} />
        <Button clickHandler={handleCLick} name="/" wide={false} />
      </div>
      <div className="btn-group btn-group-2">
        <Button clickHandler={handleCLick} name="7" color="gray" wide={false} />
        <Button clickHandler={handleCLick} name="8" color="gray" wide={false} />
        <Button clickHandler={handleCLick} name="9" color="gray" wide={false} />
        <Button clickHandler={handleCLick} name="X" wide={false} />
      </div>
      <div className="btn-group btn-group-3">
        <Button clickHandler={handleCLick} name="4" color="gray" wide={false} />
        <Button clickHandler={handleCLick} name="5" color="gray" wide={false} />
        <Button clickHandler={handleCLick} name="6" color="gray" wide={false} />
        <Button clickHandler={handleCLick} name="-" wide={false} />
      </div>
      <div className="btn-group btn-group-4">
        <Button clickHandler={handleCLick} name="1" color="gray" wide={false} />
        <Button clickHandler={handleCLick} name="2" color="gray" wide={false} />
        <Button clickHandler={handleCLick} name="3" color="gray" wide={false} />
        <Button clickHandler={handleCLick} name="+" wide={false} />
      </div>
      <div className="btn-group btn-group-5">
        <Button clickHandler={handleCLick} name="0" color="gray" wide />
        <Button clickHandler={handleCLick} name="." color="gray" wide={false} />
        <Button clickHandler={handleCLick} name="=" wide={false} />
      </div>
    </div>
  );
};

ButtonPanel.propTypes = { clickHandler: PropTypes.func.isRequired };

export default ButtonPanel;
