const title = document.getElementById("title");
const image = document.getElementById("card2Img");
const text = document.getElementById("text");

const test = () => {
  title.innerHTML = "This is a test";
  image.setAttribute("alt", "test image");
  text.innerHTML = "this is a test II";
};

test();
