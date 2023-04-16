import fetchApi from "./api"

const searchInput = document.querySelector("input");

function input() {
    searchInput.addEventListener("input", e => {
       //console.log(e)
        fetchApi(e.target.value)   
    })
    };
export default input;


