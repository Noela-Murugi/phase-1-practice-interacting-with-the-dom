//pause and resume idCounter
const increaseCount  = document.getElementById("idCounter");
function idCounterIncrease () {
    setInterval(function () {
        let idCounterValue = parseInt(increaseCount.textContent) + 1;
        increaseCount.textContent = idCounterValue;
    }, 1000)
}

//automatic increment
const idCounter = document.getElementById('counter')
let counterCount = 0
let intervals;
document.addEventListener('DOMContentLoaded', () => {
    intervals = setInterval(function(){
        counterCount +=1
        idCounter.innerText = counterCount

    }, 1000)
})

//manually
const classForm = document.querySelector('form')
classForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const commentInp = document.getElementById('comment-input')
    const inpVal = commentInp.value
    console.log(inpVal)
    const comments = document.querySelector('#list')
    const li = document.createElement('li')
    li.innerText = inpVal
    comments.appendChild(li)
    classForm.reset()
})

//-plus
const plus = document.getElementById('plus')
plus.addEventListener('click', () => {
    idCounter.innerText = counterCount + 1
})
//-minus
const subtract = document.getElementById('minus')
subtract.addEventListener('click', () => {
    idCounter.innerText = counterCount -1
})

//like count
const heartId = document.querySelector('#heart')
heartId.addEventListener('click', () => {
     const likesUL = document.querySelector('.likes')
     const li = document.createElement('li')
     li.innerText = `${counterCount} has been liked  time`
     likesUL.appendChild(li)
})
//pause and resume idCounter
let idCounterNumber = idCounterIncrease()
const pauseBtn = document.getElementById("pause");
pauseBtn.addEventListener("click", (event) =>{
    event.preventDefault();
    if(pauseBtn.innerText == "pause"){
        pauseBtn.innerText = "resume"
    }else {
        pauseBtn.innerText = "pause"
    }
})
