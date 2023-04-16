import remove from "./remove"
const list = document.querySelector(".list");
const audioIcon = document.getElementById("audio");
const infoText = document.getElementById("info-text");



function data(result, word) {
    if(result.title){
        infoText.innerHTML = `No word was found <span>"${word}"</span>`
        list.classList.remove("active");
    }else{
        //console.log(result);
        list.classList.add("active");
        
        document.getElementById("word").innerText = result[0].word;
        document.getElementById("definition").innerText = result[0].meanings[0].definitions[0].definition;
        document.getElementById("phonetics").innerText = result[0].phonetics[1].text;
        audio = new Audio(result[0].phonetics[0].audio);
        
    }
    
};

audioIcon.addEventListener("click", () => {
    audio.play();
});

remove()
export default data;