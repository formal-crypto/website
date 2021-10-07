(function () {
  const form = document.querySelector('.form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Set form button disabled
    const button = form.querySelector('.button');
    button.setAttribute('disabled', 'disabled');
    button.textContent = 'Sending…';

    const payload = new FormData(form);

    // Get message element
    const formset = button.parentElement;

    // Create AJAX request
    let request = new XMLHttpRequest();
    request.open('POST', '/send/');
    request.responseType = 'json';

    const message = {
      success: 'Your message has been sent successfully.',
      error: 'An error occurred. Try later.',
    };

    request.onerror = () => {
      formset.textContent = message.error;
    }

    request.onload = () => {
      if (request.status === 200) {
        formset.textContent = message.success;
        return form.reset();
      }

      if (request.response.message) {
        return formset.textContent = request.response.message;
      }

      formset.textContent = message.error;
    }

    request.send(payload);
  });
})();
