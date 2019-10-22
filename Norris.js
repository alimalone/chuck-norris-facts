// This function loads pokemon data from the Pokemon API
function fetchNorrisJSON() {
  // Feel free to download this HTML and edit it, to use another Pokemon ID

  const url = `https://api.chucknorris.io/jokes/random`;
  axios
    .get(url)
    .then(function(response) {
      return response.data; // SUBTLE difference with Fetch: response.data instead of response.json()
    })
    .then(function(norris) {
      console.log("data decoded from JSON:", norris);

      // Build a block of HTML

      const norrisHtml = `
        <img src="${norris.icon_url}" />
        <p><strong>${norris.value}</strong></p>

  `;
      document.querySelector("#chuck-norris").innerHTML = norrisHtml;
    });
}

fetchNorrisJSON();
