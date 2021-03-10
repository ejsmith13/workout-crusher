// Wait for the DOM to completely load before we run our JS
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM loaded! 🚀");

  // Check for query string and set flag, "updating", to false initially
  // const url = window.location.search;
  let postId;
  // let updating = false;
  // let should be used when introducing the update flow
  const updating = false;

  // Get elements from the page
  const descriptionInput = document.getElementById("description");
  const nameInput = document.getElementById("exercise_name");
  const cmsForm = document.getElementById("cms");
  const postCategorySelect = document.getElementById("category");

  // Set default value for the category
  postCategorySelect.value = "Personal";

  const handleFormSubmit = e => {
    e.preventDefault();
    if (!nameInput.value || !descriptionInput.value) {
      alert("Your post is missing some content");
    }

    // Create a newPost object to send off to the backend
    const newPost = {
      exercise_name: nameInput.value.trim(),
      description: descriptionInput.value.trim(),
      category: postCategorySelect.value
    };
    console.log("handleFormSubmit -> newPost", newPost);

    // Check if the user is updating or creating and preform said function
    if (updating) {
      newPost.id = postId;
      updatePost(newPost);
    } else {
      submitPost(newPost);
    }
  };

  // Event listener for when the blog is submitted
  cmsForm.addEventListener("submit", handleFormSubmit);
  // Event handler for when a user submits a post
  const submitPost = post => {
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
});
