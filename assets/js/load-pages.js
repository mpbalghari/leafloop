// Load page

const loadHTML = (id, file) => {
    fetch(file)
      .then(response => {
        if (!response.ok) throw new Error(`Could not load ${file}`);
        return response.text();
      })
      .then(data => {
        document.getElementById(id).innerHTML = data;
      })
      .catch(error => {
        console.error(error);
        document.getElementById(id).innerHTML = `<p>Error loading ${file}</p>`;
      });
  };

  loadHTML("about", "about.html");
  loadHTML("reviews", "reviews.html");
  