// const workout_entry = `
// <tr>
// <th scope="row">12/24/2020</th>
// <td>Cookie Eating</td>
// <td>25 reps of lifting cookies to my mouth</td>
// <td>Resistance</td>
// </tr>
// `;
// const element = document.getElementById("entry");
// element.innerHTML = workout_entry;

// Get all the books

fetch("/api/exercise", {
  method: "GET",
  headers: {
    "Content-Type": "application/json"
  }
})
  .then(response => response.json())
  .then(data => {
    // data = [
    //   {
    //     date: "12/2/2020",
    //     workout: "pushups",
    //     description: "12 pushups",
    //     category: "resistance"
    //   },
    //   {
    //     date: "12/2/2020",
    //     workout: "pushups",
    //     description: "12 pushups",
    //     category: "resistance"
    //   }
    // ];
    console.log("Success in getting all exercises:", data);
    data.forEach(({ createdAt, exercise_name, description, category }, i) => {
      console.log(createdAt);
      const entryContainer = document.getElementById("entry");
      const sectionBreak = document.createElement("hr");

      const entrySection = document.createElement("tr");
      //   entrySection.classList.add("entry");
      entrySection.setAttribute("id", `workout-${i}`);
      entryContainer.appendChild(entrySection);

      //   // Create the elements to show book data
      const dateEl = document.createElement("th");
      const workoutEl = document.createElement("td");
      const descriptionEl = document.createElement("td");
      const categoryEl = document.createElement("td");

      const formattedDate = new Date(`${createdAt}`).toLocaleDateString();
      // newPostDate.textContent = formattedDate;

      //   // Add text to the elements we just created
      dateEl.textContent = formattedDate;
      workoutEl.textContent = `${exercise_name}`;
      descriptionEl.textContent = `${description}`;
      categoryEl.textContent = `${category}`;

      //   // Append the elements with textContent to the well
      entrySection.appendChild(dateEl);
      entrySection.appendChild(workoutEl);
      entrySection.appendChild(descriptionEl);
      entrySection.appendChild(categoryEl);
      entrySection.appendChild(sectionBreak);
    });
  })
  .catch(error => {
    console.error("Error:", error);
  });
