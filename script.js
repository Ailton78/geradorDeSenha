(function () {
  let sliderElement = document.querySelector("#slider");
  let buttonElement = document.querySelector("#button");

  let sizePassword = document.querySelector("#valor");
  let password = document.querySelector("#password");

  let containerPassword = document.querySelector("#container-password");

  let charset =
    "abcdefghikjlmnopqrstuvywxzABCDEFGHIKJLMNOPQRSTUVYWXZ123456789@!#$%&*";
  let novaSenha = "";
  sizePassword.innerHTML = sliderElement.value;
  slider.oninput = function () {
    sizePassword.innerHTML = this.value;
  };
})();