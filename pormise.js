console.log('working');


const btn = document.querySelector("#btn");
const box = document.querySelector(".box");

let data;

btn.addEventListener('click', (e) => {
    e.preventDefault();
    box.classList.remove('hide');
    data = "loading....",
        box.innerHTML = `
    <h5 class='col'>
    ${data}
    </h5>
    `
    fetch('https://dummyjson.com/post')
        .then((response) => {
            box.innerHTML = "";
            return response.json()
        }
        )
        .then(response => {
            const result = response.posts;
            data = result[0]
            console.log(data)
            box.innerHTML = `
            <div class='col'>
                <h4 class='head'>
                    ${data.title}
                </h4>
                <p class='para'>${data.body}</p>
            </div>
            `
        })
        .catch(err => {

            box.innerHTML = `
            <h5 class='col'>
            ${err}
            </h5>`
            console.log(err)
        })
})