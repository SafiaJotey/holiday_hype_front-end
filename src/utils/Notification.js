import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';
export const failNotification = (text) => {
  return Toastify({
    text: text,
    duration: 3000,
    destination: 'https://github.com/apvarun/toastify-js',
    newWindow: true,
    close: true,
    gravity: 'top', // `top` or `bottom`
    position: 'right', // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    offset: {
      x: 10, // horizontal axis - can be a number or a string indicating unity. eg: '2em'
      y: 70, // vertical axis - can be a number or a string indicating unity. eg: '2em'
    },
    style: {
      background: 'linear-gradient(to right, #ff0000,#9f0202)',
    },
    onClick: function () {}, // Callback after click
  }).showToast();
};
export const successNotification = (text) => {
  return Toastify({
    text: text,
    duration: 3000,
    destination: 'https://github.com/apvarun/toastify-js',
    newWindow: true,
    close: true,
    gravity: 'top', // `top` or `bottom`
    position: 'right', // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    offset: {
      x: 10, // horizontal axis - can be a number or a string indicating unity. eg: '2em'
      y: 70, // vertical axis - can be a number or a string indicating unity. eg: '2em'
    },
    style: {
      background: 'linear-gradient(to right,#02ff4a,#00850b)',
    },
    onClick: function () {}, // Callback after click
  }).showToast();
};
