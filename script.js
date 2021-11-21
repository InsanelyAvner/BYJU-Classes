async function getJSON() {
  return fetch('data.json')
    .then((response) => response.json())
    .then((responseJson) => {return responseJson});
}

async function loadLinks() {
  const classes = await this.getJSON()
  console.log(classes)
  content = document.getElementById('links')

  for (className in classes) {
    content.innerHTML += `
    <h3>Lesson ${className}: <span style="font-style: italic">${classes[className]["title"]}</span></h3>
    <p>${classes[className]["description"]}</p>
    <div class="language-plaintext highlighter-rouge">
      <div class="highlight">
        <pre class="highlight"><code><a href="${classes[className]["link"]}" target="_blank">${classes[className]["link"]}</a></code></pre>
      </div>
    </div>
    `
  }
}
loadLinks()
