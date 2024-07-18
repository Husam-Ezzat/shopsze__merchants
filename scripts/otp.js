document.querySelectorAll('.otp-input').forEach((element, index, array) => {
    element.addEventListener('input', function (event) {
      let inputValue = event.target.value;
      inputValue = inputValue.replace(/[^0-9]/g, '');
      inputValue = inputValue.slice(0, 1);
      event.target.value = inputValue;

      if (inputValue !== '') {
        if (index < array.length - 1) {
          array[index + 1].focus();
        }
      } else {
        if (index > 0) {
          array[index - 1].focus();
        }
      }
    });

    element.addEventListener('blur', function () {
      if (element.value === '' && index > 0) {
        array[index - 1].focus();
      }
    });
  });