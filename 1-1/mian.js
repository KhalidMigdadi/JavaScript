// Task One

let myElement = document.getElementById("myP");
myElement.style.backgroundColor = "yellow";
myElement.style.width = "400px"
myElement.style.textAlign = "center"
myElement.style.padding = "15px"
myElement.style.border = "1px solid black"
myElement.style.margin = "50px auto"


//Method One

function changeText(myPara) {
    myPara.target.textContent = "Hello World !";
}

myElement.addEventListener ("mouseover" , changeText)

function backText(myPara) {
    myPara.target.textContent = "Can I Help You !";
}

myElement.addEventListener("mouseout", backText)



// =================================================================== 


//Method Two

// myElement.addEventListener ("mouseover" , function hoverMe(me) {
//     me.target.textContent = "Hello World !";
// })

// myElement.addEventListener ("mouseout", function hoverNotMe(my) {
//     my.target.textContent = "Can I Help You !"
// })

// =================================================================== 

//Method Three


// myElement.addEventListener("mouseover", parameterName => {
//     parameterName.target.textContent = "Hello World!";
// })

// myElement.addEventListener("mouseout", Nameparameter => {
//     Nameparameter.target.textContent = "Can I Help You !";
// })



// =================================================================== 


// Task Two



let changeFont = document.getElementById("fontSelector");

changeFont.addEventListener("change" , event => {
    document.getElementById("write").style.fontFamily = event.target.value;
})

let changeSize = document.getElementById("fontSize");

changeSize.addEventListener("change", event => {
    document.getElementById("write").style.fontSize = event.target.value;
})

// Not Work

// let changeWieght = document.getElementsByName("input");
// for (let i = 0; i < changeWieght.length; i++) {
//     changeWieght[i].addEventListener("change", event => {
//         document.getElementsByName("input").style.fontWeight = event.target.value
//     })
    
// }



// change the weight for bold,Italic,underline
let changeWieght = document.getElementsByName("style"); // Get all checkboxes with name="style"

for (let i = 0; i < changeWieght.length; i++) {
    changeWieght[i].addEventListener("change", (event) => {
    let textarea = document.getElementById("write");

    // Check the checkbox if it is checked 
    if (event.target.id == "it") {
      textarea.style.fontStyle = event.target.checked ? "italic" : "normal"; // if its true that means the box is checked so apply italic and if false that mean the check box is unchecked so apply normal
    }
    if (event.target.id == "b") {
      textarea.style.fontWeight = event.target.checked ? "bold" : "normal";
    }
    if (event.target.id == "ul") {
      textarea.style.textDecoration = event.target.checked
        ? "underline"
        : "none";
    }
  });
}