let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")

let count = 0

function counter() {
    count += 1
    countEl.textContent = count
}

function save() {
    let prevCount = saveEl.textContent ? parseInt(saveEl.textContent) : 0
    saveEl.textContent = count + prevCount

    countEl.textContent = 0
    count = 0
} 

    

