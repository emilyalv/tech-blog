const router = require("../../controllers");

// const commentFormHandler = async (event) => {
//     event.preventDefault();
  
//     // Collect values from the comment form
//     const contents = document.querySelector('#comment-body').value.trim();
  
//     if (contents) {
//       // Send a POST request to the API endpoint
//       const response = await fetch('/api/comments', {
//         method: 'POST',
//         body: JSON.stringify({ contents }),
//         headers: { 'Content-Type': 'application/json' },
//       });
  
//       if (response.ok) {
//         // If successful, redirect the browser to the home page
//         document.location.replace('/');
//       } else {
//         alert(response.statusText);
//       }
//     }
//   };


//   document
//   .querySelector('.comment-form')
//   .addEventListener('submit', commentFormHandler);
