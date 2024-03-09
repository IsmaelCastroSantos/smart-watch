const previewImage = document.getElementById("preview-image");
const productTitle = document.getElementById("product-title");
const colorName = document.getElementById("selected-color-name");
const thumbnailImage0 = document.getElementById("0-thumbnail-image");
const thumbnailImage1 = document.getElementById("1-thumbnail-image");
const thumbnailImage2 = document.getElementById("2-thumbnail-image");

const CypressGreen = {
  name: "Verde-cipreste",
  folder: "cypress-green-images",
};

const winterBlue = {
  name: "Azul-inverno",
  folder: "blue-winter-images",
};

const Midnight = {
  name: "Meia-noite",
  folder: "midnight-images",
};

const Stellar = {
  name: "Estelar",
  folder: "stellar-images",
};

const LightPink = {
  name: "Rosa-claro",
  folder: "light-pink-images",
};

const optionsColors = [CypressGreen, winterBlue, Midnight, Stellar, LightPink];
const sizeOptions = ["41 mm", "45 mm"];

let imageSelected = 1;
let sizeSelected = 1;
let colorSelected = 1;

function changeImage() {
  const idOptionSelected = document.querySelector(
    '[name="option-image"]:checked'
  ).id;
  imageSelected = idOptionSelected.charAt(0);
  previewImage.src = `./images/color-options/${optionsColors[colorSelected].folder}/imagem-${imageSelected}.jpeg`;
}

function changeSize() {
  const idOptionSelected = document.querySelector(
    '[name="option-size"]:checked'
  ).id;
  sizeSelected = idOptionSelected.charAt(0);
  productTitle.innerText = `Pulseira loop esportiva ${optionsColors[colorSelected].name} para caixa de ${sizeOptions[sizeSelected]}`;
  if (sizeOptions[sizeSelected] === "41 mm") {
    previewImage.classList.add("little-box");
  } else {
    previewImage.classList.remove("little-box");
  }
}

function changeColor() {
  const idOptionSelected = document.querySelector(
    '[name="option-color"]:checked'
  ).id;
  colorSelected = idOptionSelected.charAt(0);
  productTitle.innerText = `Pulseira loop esportiva ${optionsColors[colorSelected].name} para caixa de ${sizeOptions[sizeSelected]}`;
  colorName.innerText = `cor - ${optionsColors[colorSelected].name}`;
  thumbnailImage0.src = `./images/color-options/${optionsColors[colorSelected].folder}/imagem-0.jpeg`;
  thumbnailImage1.src = `./images/color-options/${optionsColors[colorSelected].folder}/imagem-1.jpeg`;
  thumbnailImage2.src = `./images/color-options/${optionsColors[colorSelected].folder}/imagem-2.jpeg`;
  previewImage.src = `./images/color-options/${optionsColors[colorSelected].folder}/imagem-${imageSelected}.jpeg`;
}
