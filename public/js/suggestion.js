const title = document.getElementById("title");
const image = document.getElementById("card2Img");
const text = document.getElementById("text");
const id = Math.floor(Math.random() * 3) + 1;

const test = () => {
  title.innerHTML = "This is a test";
  image.setAttribute("alt", "test image");
  text.innerHTML = "this is a test II";
};
// eslint-disable-next-line no-unused-vars
let posts;

// Function to grab posts from the database
const getDaily = () => {
  console.log(`id: ${id}`);
  fetch(`/api/daily/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
    .then(data => {
      console.log("Success in getting daily", data);
      posts = data;
      console.log(data);
      displayDaily(data);
    })
    .catch(error => console.error("Error:", error));
};
const displayDaily = data => {
  console.log(`data ${data}`);
  title.innerHTML = `${data.exercise}`;
  image.setAttribute("src", `${data.photoURL}`);
  text.innerHTML = `${data.description}`;
};
getDaily();
test();
