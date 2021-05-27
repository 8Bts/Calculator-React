import Big from 'big.js';

const operate = (num1, num2, operation) => {
  let result;
  const a = Big(num1);
  const b = Big(num2);
  switch (operation) {
    case '+':
      result = a.plus(b);
      break;
    case '-':
      result = a.minus(b);
      break;
    case 'X':
      result = a.times(b);
      break;
    case '/':
      result = a.div(b);
      break;
    case '%':
      result = b.div(100);
      break;
    default:
      break;
  }
  return parseFloat(result);
};

export default operate;
