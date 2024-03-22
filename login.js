const toggleButton = document.getElementById('toggle-button');
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');

toggleButton.addEventListener('click', () => {
  loginForm.classList.toggle('hidden');
  signupForm.classList.toggle('hidden');
});

const forms = document.querySelectorAll('form');

forms.forEach(form => {
  form.addEventListener('submit', (event) => {
    // Add validation logic here (e.g., check if username, password and email are filled)
    event.preventDefault(); // Prevent default form submission if validation fails
    // Simulate form submission (replace with actual logic to send data to server)
    alert('Submitted! (placeholder for actual submission)');
  });
});