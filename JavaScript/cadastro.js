let $id = id => document.getElementById(id);
let [login, register, form] = ['login', 'register', 'form'].map(id => $id(id));

[login, register].forEach(element => {
  element.onclick = function () {
    [login, register].forEach($ele => {
      $ele.classList.remove("active");
    });
    this.classList.add("active");
    if (this.getAttribute("id") === "register") {
      form.classList.add("active");
    } else {
      form.classList.remove("active");
    }
  };
});
