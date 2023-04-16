import data from "./word"
import debouns from "./debouns"

const infoText = document.getElementById("info-text");

export function fetchApi(word){
    infoText.innerHTML = `search for the meaning of a word<span>"${word}"</span>`
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then(res => res.json()).then(result => data(result, word))
};

fetchApi = debouns(fetchApi, 500);

export default fetchApi;