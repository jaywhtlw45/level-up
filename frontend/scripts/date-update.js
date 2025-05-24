const date = new Date()
const formattedDateObj = { date: date.toISOString() }


console.log("hello")

sessionStorage.setItem("date", JSON.stringify(formattedDateObj))
sessionStorage.getItem('date')


// use this instead of window.onload
// loads as soon as the dom content is loaded, does not wait for images
// document.addEventListener('DOMContentLoaded', updateDate)