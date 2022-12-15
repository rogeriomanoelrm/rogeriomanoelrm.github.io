
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function counter() {

    count += 1
    countEl.textContent = count

}

function save()   {

    //let countStr = count + "-" caso eu não queira que volte do zero

    let countStr = count + "-"

    saveEl.innerText += countStr

    countEl.textContent = 0

    count = 0

}


    //console.log(count)

    

