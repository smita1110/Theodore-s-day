document.addEventListener('DOMContentLoaded', () => {
  // Fade-in animation for the main heading on load
  const heading = document.getElementById('main-heading');
  heading.style.opacity = 0;
  heading.style.transform = 'translateY(-20px)';
  setTimeout(() => {
    heading.style.opacity = 1;
    heading.style.transform = 'translateY(0)';
  }, 500);

  // Button click to reveal the surprise message
  const button = document.getElementById('reveal-message');
  const surpriseMessage = document.getElementById('surprise-message');

  button.addEventListener('click', () => {
    // Display the message
    surpriseMessage.style.display = 'block';

    // Button effect
    button.style.backgroundColor = '#FFA500';
    setTimeout(() => {
      button.style.backgroundColor = '#FFD700';
    }, 200);
  });
});
