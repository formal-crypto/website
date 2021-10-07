(function () {
  // Form submit handler
  const form = document.querySelector('.form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Set form button disabled
    const button = form.querySelector('.button');
    button.setAttribute('disabled', 'disabled');
    button.textContent = 'Sending…';

    const payload = new FormData(form);

    // Get button parent element
    const parent = button.parentElement;

    // Create AJAX request
    let request = new XMLHttpRequest();
    request.open('POST', '/send/');
    request.setRequestHeader('Content-Type', 'application/json');

    request.onload = () => {
      if (request.status === 200) {
        return parent.textContent = 'Your message has been sent successfully.';
      }

      return parent.textContent = 'An error occurred. Try later.';
    }

    request.onerror = () => {
      return parent.textContent = 'An error occurred. Try later.';
    }

    request.send(payload);
  });
})();