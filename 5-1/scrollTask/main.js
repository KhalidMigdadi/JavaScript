let scrollIcon = document.querySelector(".arrow")

window.addEventListener("scroll", ()=>{
    if(window.scrollY > 300) {
        scrollIcon.classList.add("show")
    }
    else {
        scrollIcon.classList.remove("show")

    }
})

// Solution 1 for return the page to top

// scrollIcon.addEventListener('click', function() {
//     window.scrollTo({
//         top: 0,
//         behavior: "smooth"
//     })
// })


// Solution 2 for return the page to top

scrollIcon.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

