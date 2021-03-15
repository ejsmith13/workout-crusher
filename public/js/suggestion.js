const title = document.getElementById("title");
const image = document.getElementById("card2Img");
const text = document.getElementById("text");
const category = document.getElementById("category");
const crushBtn = document.getElementById("crushBtn");
const id = Math.floor(Math.random() * 10) + 1;

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
      console.log(`post: ${posts}`);
      console.log(`data: ${data}`);
      displayDaily(data);
    })
    .catch(error => console.error("Error:", error));
};
const displayDaily = data => {
  console.log(`data ${data}`);
  title.innerHTML = `${data.exercise}`;
  image.setAttribute("src", `${data.photoURL}`);
  text.innerHTML = `${data.description}`;
  category.innerHTML = `Category: ${data.category}`;
};

const crushIt = () => {
  const post = {
    exercise_name: title.innerHTML,
    description: text.innerHTML,
    category: category.innerHTML
  };
  // console.log(" button working");
  // console.log(title.innerHTML);
  // console.log(post);
  fetch("/api/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(post)
  })
    .then(response => response.json())
    .then(data => {
      console.log("Success in submitting post:", data);
      window.location.href = "/logWorkout";
    })
    .catch(error => {
      console.error("Error:", error);
    });
};
getDaily();

crushBtn.addEventListener("click", crushIt);
