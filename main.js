let button = document.querySelectorAll('button')
let time = document.querySelector('#time')
let year = document.querySelector('#year')
let month = document.querySelector("#month")
let weekDay = document.querySelector('#weekday')


setInterval(() => {
    let date = new Date()

    let hours = date.getHours()
    let minutes = date.getMinutes()
    let second = date.getSeconds()
    let years = date.getFullYear()
    let week = date.getDay()
    let month = date.getMonth()

    let array = ["Monday", "Tuesady", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "November", "December"]


    console.log(week)
    time.innerHTML = `

     <span>${hours}</span>:<span>${(minutes < 10) ? ("0" + minutes) : (minutes)}</span>:<span>${second}</span>
    `

    weekDay.innerHTML = array[week - 1]
    month.innerHTML = month[month - 1]
    year.innerHTML = years
    
}, 1000);