const loading = document.querySelector(".loading");
const posts = [
  {
    title: "One",
  },
  {
    title: "Two",
  },
];

function getPosts() {
  setTimeout(() => {
    console.log("posts", posts);
    let output = "";
    posts.forEach((item, i) => {
      output += `<li>${item.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(title) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push({ title });

      const error = false;
      if (error) reject("Error:");
      else resolve("success");
    }, 2000);
  });
}

// createPost("Three")
//   .then((response) => getPosts())
//   .catch((err) => console.log(err));

// const getData = async () => {
//   try {
//     loading.textContent = "Loading ...";
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const data = await res.json();
//     console.log("data", data);
//     let output = "";
//     data.forEach((item, i) => {
//       output += `<li>${item.body}</li>`;
//     });
//     document.body.innerHTML = output;
//     loading.textContent = "";
//   } catch (error) {
//     console.log("error", error.message);
//     loading.textContent = error.message;
//   }
// };

// const getData = () => {
//   loading.textContent = "Loading ...";
//   fetch("https://jsonplaceholder.typicode.com/po")
//     .then((response) => response.json())
//     .then((data) => {
//       let output = "";
//       if (data && data.length > 0) {
//         data.forEach((item, i) => {
//           output += `<li>${item.title}</li>`;
//         });
//         document.body.innerHTML = output;
//         loading.textContent = "";
//       } else {
//         loading.textContent = "No data";
//       }
//     })
//     .catch((error) => {
//       loading.textContent = error.message;
//     });
// };
