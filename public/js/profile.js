const postFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const title = document.querySelector('#post-title').value.trim();
    const contents = document.querySelector('#post-contents').value.trim();
  
    if (title && contents) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({ title, contents }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the home page
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  };


  document
  .querySelector('.create-post-form')
  .addEventListener('submit', postFormHandler);
