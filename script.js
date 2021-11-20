links = {}
fetch("data.json")
  .then(response => response.json())
  .then(json => links = json);

function loadLinks(mylinks) {
  console.log('check1')
  content = document.getElementById('links')
  for (link in mylinks) {
    content.innerHTML += `
    <p>Class #${link}:</p>
    <div class="language-plaintext highlighter-rouge">
      <div class="highlight">
        <pre class="highlight"><code>${mylinks[link]}</code></pre>
      </div>
    </div>
    `
  }
}

setTimeout(() => {
  loadLinks(links)
}, 30);
