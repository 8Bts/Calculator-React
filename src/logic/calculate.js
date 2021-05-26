import operate from './operate';

const calculate = (data, btnName) => {
  let {
    total, next, operation, content, priorNext, priorOp,
  } = data;

  switch (btnName) {
    case '0':
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
    case '.':
      if (content && content.charAt(content.length - 1) === '%') break;
      next = next ? next + btnName : btnName;
      content = content ? content + btnName : btnName;
      break;
    case '+':
    case '-':
      if (!next) break;
      if (priorNext) {
        next = operate(priorNext, next, priorOp);
        priorNext = null;
      }
      total = operate((!total ? 0 : total), next, (!operation ? '+' : operation));
      operation = btnName;
      next = null;
      content = `${content} ${btnName} `;
      break;
    case 'X':
    case '/':
      if (!next) break;
      if (priorNext) {
        next = operate(priorNext, next, priorOp);
        priorNext = null;
      }
      priorNext = next;
      priorOp = btnName;
      next = null;
      content = `${content} ${btnName} `;
      break;
    case '+/-':
      if (!content) {
        content = '-';
        priorNext = -1;
        priorOp = 'X';
      }
      break;
    case '%':
      if (next) {
        next /= 100;
        content += '%';
      }
      break;
    case 'AC':
      content = null;
      next = null;
      priorNext = null;
      operation = null;
      priorOp = null;
      break;
    case '=':
      if (priorNext) next = operate(priorNext, next, priorOp);
      if (next) total = operate((!total ? 0 : total), next, (!operation ? '+' : operation));
      content = total ? `${total}` : null;
      operation = null;
      priorOp = null;
      next = total;
      total = null;
      priorNext = null;
      break;
    default:

      break;
  }

  return {
    total, next, operation, content, priorNext, priorOp,
  };
};

export default calculate;
