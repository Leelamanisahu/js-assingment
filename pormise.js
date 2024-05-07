console.log('working');


const btn = document.querySelector("#btn");

btn.addEventListener('click', (e) => {
    e.preventDefault();
    fetch('https://dummyjson.com/products/1')
        .then((response) => response.json())
        .then(response => console.log(response))
        .catch(err => console.log(err))
})