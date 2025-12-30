const boton = document.getElementById("boton1");

boton.addEventListener("click", () => {
  document.getElementById("sobremi")
    .scrollIntoView({ behavior: "smooth" });
});
