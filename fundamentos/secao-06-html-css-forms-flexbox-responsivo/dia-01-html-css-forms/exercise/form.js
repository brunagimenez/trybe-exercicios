function preventDefault(event) {
    event.preventDefault();
}

window.onload = function () {
    const buttonSubmit = document.getElementById("button-submit")
    buttonSubmit .addEventListener('click', preventDefault);
};

function clear() {
  const formElements = document.querySelectorAll('input');
  const textArea = document.querySelector('textarea');
  for (let index = 0; index < formElements.length; index += 1) {
    const userInput = formElements[index];
    userInput.value = '';
    userInput.checked = false;
  }
  textArea.value = '';
}

window.onload = function () {
    const clearBtn = document.querySelector('#clear');
    clearBtn.addEventListener('click', clear);
    const buttonSubmit = document.getElementById("button-submit");
    buttonSubmit.addEventListener('click', preventDefault);
};

function enableSubmit() {
    const buttonSubmit = document.getElementById("button-submit");
    const agreement = document.querySelector('#agreement');
    submitBtn.disabled = !agreement.checked;
}