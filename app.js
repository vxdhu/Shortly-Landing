const input = document.querySelector("#input");
const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar-desk")
const convert = document.querySelector('#convert')



//api
const baseUrl = "https://api.shrtco.de/v2/";

convert.addEventListener('click', convert_link)



//mobile menu
hamburger.addEventListener('click', () => {
    navbar.classList.toggle('active')
})


//convert_function
async function convert_link() {
    const url = await axios.get(`${baseUrl}shorten?url=${input.value}`);
    const short_link = url.data.result.short_link;
    console.log(short_link)
    input.value = short_link;

}