
const removeIcon = document.getElementById("remove");
const searchInput = document.querySelector("input");
const list = document.querySelector(".list");
const infoText = document.getElementById("info-text");

function remove() {
removeIcon.addEventListener("click", () => {
    searchInput.value = "";
    list.classList.remove("active");
    infoText.innerHTML = "write any word to get the meaning"
})
};

export default remove;