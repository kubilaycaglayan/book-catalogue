const grabAfter = (miliseconds, element, callback) => {
  let timeOut;
  element.addEventListener('input', event => {
    clearTimeout(timeOut);
    timeOut = setTimeout(() => {
      callback(event.target.value);
    }, miliseconds);
  });
};

export default grabAfter;
