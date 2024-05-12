function toggleMode() {
  const html = document.documentElement

  html.classList.toggle("light")

  // pegar a tag image e substituir a imagem
  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto de Carlos Alberto serio num fundo com natureza"
    )
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "Foto de Carlos Alberto sério numa serra")
  }
}
