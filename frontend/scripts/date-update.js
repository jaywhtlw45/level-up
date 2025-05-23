const date = new Date();
sessionStorage.setItem("date", date.toISOString())


// use this instead of window.onload
// loads as soon as the dom content is loaded, does not wait for images
document.addEventListener('DOMContentLoaded', updateDate);
