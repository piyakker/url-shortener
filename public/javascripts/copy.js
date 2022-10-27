const btn = document.querySelector('#copy-button')
console.log(btn)
//把值寫到clipboard上
btn.addEventListener('click', () => {
  const url = document.querySelector('#url')
  navigator.clipboard.writeText(url.textContent)
  alert("Copied the text: " + url.textContent)
})