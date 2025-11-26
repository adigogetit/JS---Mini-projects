// select the input
let inp = document.querySelector("input");

// select ul
let Ul_text = document.querySelector("ul");

// select button for event triggering
let btn = document.querySelector("button");


btn.addEventListener('click',function(){

    // extracting the value from input
    let inp_text = inp.value;

    // creating li element for appending it 
    let Crli = document.createElement("li");

    // inserting the text in li 
    Crli.innerText = inp_text;

    // here we append in Ul_text at last
    Ul_text.appendChild(Crli);

    // after adding we should clear input
    inp.value='';

    // deleting the notes
    Crli.addEventListener('click',function(){
        Crli.remove();
    })
})

//add note when pressing Enter
inp.addEventListener('keydown', function (e) {
    if (e.key === "Enter") {
        btn.click();
    }
});