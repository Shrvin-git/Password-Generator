const generateBtn = document.querySelector(".generate-button");
const passwordPropInputs = document.querySelectorAll(".password-prop");
const passwordNumberSelect = document.querySelector("#count-range");
const passwordCharacterCount = document.querySelector(".characters-count");
const passwordOutput = document.querySelector(".generated-password");
const strengthStatus = document.querySelector('.strength-status')


const charSets = {
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  numbers: "0123456789",
  symbols: "!@#$%^&*()_-+=<>?/{}[]~"
};


function setPasswordProps() {
  let datasetInputs = [];

  passwordPropInputs.forEach((items) => {
    if (items.checked) {
      datasetInputs.push(items.dataset.value);
    }
  });

  let passwordLength = parseInt(passwordNumberSelect.value);
  setPassword(datasetInputs, passwordLength);
}
function setValueInput(event) {
  passwordNumberSelect.value = event.target.value;
  passwordCharacterCount.innerHTML = passwordNumberSelect.value;
}
function setPassword(prop, length) {

  let availableChars = "";
  let generatedPassword = "";
  let randomPassword;


  if (prop.length == 0) {
    console.log('هیچ ویژگی انتخاب نشده است');
  }
  else {


    prop.forEach((type) => {
      availableChars += charSets[type];
    });


    switch (prop.length) {
      case 1:
        strengthStatus.className = 'strength-status very-bad'
        break;

      case 2:
        strengthStatus.className = 'strength-status bad'
        break;

      case 3:
        strengthStatus.className = 'strength-status good'
        break;

      case 4:
        strengthStatus.className = 'strength-status strong'
        break;

      default:
        break;
    }

    for (let i = 0; i < length; i++) {
      randomPassword = Math.floor(Math.random() * availableChars.length)
      generatedPassword += availableChars[randomPassword]
    }

    passwordOutput.innerHTML = generatedPassword;
  }
}


generateBtn.addEventListener("click", setPasswordProps);
passwordNumberSelect.addEventListener("input", setValueInput);