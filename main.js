const getResidentsBtn = document.querySelector(".get-residents")

// test button link
// const buttonClicked = () => console.log("button clicked")

// create baseURL for flexibility
const baseURL = "https://swapi.dev/api/"

// function to get and display names of residents of Alderaan
const getAld = () => axios.get(`${baseURL}planets/2/`).then((res) => {
    // loop over residents of Alderaan
    for (let i = 0; i < res.data.residents.length; i++) {
        axios.get(res.data.residents[i]).then((res) => {
            // create h2 element and insert it in HTML
            const h2 = document.createElement("h2")
            // console.log(res.data.name)
            h2.innerHTML = `<h2>${res.data.name}</h2>`
            document.body.appendChild(h2)
        })
    }
})

getResidentsBtn.addEventListener("click", getAld)