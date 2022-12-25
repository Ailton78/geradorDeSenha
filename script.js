(function () {
  let sliderElement = document.querySelector("#slider");
  let buttonElement = document.querySelector("#button");

  let sizePassword = document.querySelector("#valor");
  let password = document.querySelector("#password");

  let containerPassword = document.querySelector("#container-password");

  let charset =
    "abcdefghikjlmnopqrstuvywxzABCDEFGHIKJLMNOPQRSTUVYWXZ123456789@!#$%&*?.;:";
  let novaSenha = "";
  sizePassword.innerHTML = sliderElement.value;
  slider.oninput = function () {
    sizePassword.innerHTML = this.value;
  };
  buttonElement.addEventListener("click", (e) => {
    generetePassword();
  });
  containerPassword.addEventListener("click", (e) => {
    copyPassword();
  });
  function generetePassword() {
    let pass = "";
    let n = charset.length;
    for (let i = 0; i < sliderElement.value; i++) {
      pass += charset.charAt(Math.floor(Math.random() * n));
    }
    password.innerText += pass;
    containerPassword.classList.remove("hide");
    novaSenha = pass;
  }
  function copyPassword() {
    alert("Senha copiada com sucesso!");
    return navigator.clipboard.writeText(novaSenha);
  }
})();
