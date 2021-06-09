const loginFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const username = document.querySelector('#username').value.trim();
    const password = document.querySelector('#password').value.trim();
  
    if (username && password) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  const signupFormHandler = async (event) => {
    event.preventDefault();
    console.log('signup form');
    const name = document.querySelector('#new-name').value.trim();
    const username = document.querySelector('#new-username').value.trim();
    const password = document.querySelector('#new-password').value.trim();
  
    if (name && username && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ name, username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // document.location.replace('/home');
        console.log(response.json());
      } else {
        alert(response.statusText);
      }
    }
  };
  
  document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);
  
  document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);
  
 document
    .querySelector('#signup-section').style.visibility = 'hidden';

 document
    .addEventListener('click', showSignup = (event) => {
        if (event.target.matches('#signup-link')) {
            document.querySelector('#signup-section').style.visibility = 'visible';}
        
    });