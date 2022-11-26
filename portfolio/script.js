const card = document.querySelector('.fawadcard')
fetch('projects/card.html').then(res => res.text()).then(data => {
    card.innerHTML = data
})
console.log(card)