document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  const confirmationMessage = document.getElementById('confirmation-message');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Gather form data
    String name = document.getElementById('name').value;
    String email = document.getElementById('email').value;
    String message = document.getElementById('message').value;

    // Display a confirmation message
    confirmationMessage.textContent = parse(name);

    // Reset the form
    form.reset();
  });
});