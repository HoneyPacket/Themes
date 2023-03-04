///////////////////////////
//////modal code///////////

const moo = document.querySelector("#modal")
const openM = document.querySelector("#openModalBtn")
const closeM = document.querySelector("#closeModalBtn")
const overlay = document.querySelector("#overlay")

openM.addEventListener("click", ()=>{
   moo.classList.add("open")
   overlay.classList.add("open")
})


function modalClose() {
   moo.classList.remove("open")
   overlay.classList.remove("open")
}

closeM.addEventListener("click", ()=>{
   modalClose()
})

overlay.addEventListener("click", ()=>{
   modalClose()
})
//end


//theme buttons
const darkTheme = document.getElementById('darkTheme')
const lightTheme = document.getElementById('lightTheme')
const purpleTheme = document.getElementById('purpleTheme')
const redTheme = document.getElementById('redTheme')
let themeTag = document.body.classList


lightTheme.addEventListener('click', ()=>{
    themeTag.add('lightMode')
    document.getElementById("headDivTitle").style.color = '#d65d0e';
    document.getElementById("headFluff").style.color = "#cc241d";

    themeTag.remove('darkMode')
    themeTag.remove('purpleMode')
    themeTag.remove('redMode')

    localStorage.setItem('selectedTheme', 1);
})

darkTheme.addEventListener('click', ()=>{
    themeTag.add('darkMode')
    document.getElementById("headDivTitle").style.color = "#1d9bf0";
    document.getElementById("headFluff").style.color = '#468487';

    themeTag.remove('lightMode')
    themeTag.remove('purpleMode')
    themeTag.remove('redMode')

    localStorage.setItem('selectedTheme', 2);
})

purpleTheme.addEventListener('click', ()=>{
   themeTag.add('purpleMode')
   document.getElementById("headDivTitle").style.color = "#d8792b";
   document.getElementById("headFluff").style.color = '#cc2c24';

   themeTag.remove('lightMode')
   themeTag.remove('darkMode')
   themeTag.remove('redMode')

   localStorage.setItem('selectedTheme', 3);
})

redTheme.addEventListener('click', ()=>{
   themeTag.add('redMode')
   document.getElementById("headDivTitle").style.color = "#cba6f7";
   document.getElementById("headFluff").style.color = '#89dceb';

   themeTag.remove('lightMode')
   themeTag.remove('darkMode')
   themeTag.remove('purpleMode')

   localStorage.setItem('selectedTheme', 4);
})




////////////////
////////////////
////////////////
//theme dropdown
const lightDrop = document.getElementById('linkOne')
const darkDrop = document.getElementById('linkTwo')
const purpleDrop = document.getElementById('linkThree')
const redDrop = document.getElementById('linkFour')


lightDrop.addEventListener('click', ()=>{
   themeTag.add('lightMode')
   document.getElementById("headDivTitle").style.color = '#d65d0e';
   document.getElementById("headFluff").style.color = "#cc241d";

   themeTag.remove('darkMode')
   themeTag.remove('purpleMode')
   themeTag.remove('redMode')

   localStorage.setItem('selectedTheme', 1);

})

darkDrop.addEventListener('click', ()=>{
   themeTag.add('darkMode')
   document.getElementById("headDivTitle").style.color = "#1d9bf0";
   document.getElementById("headFluff").style.color = '#468487';

   themeTag.remove('lightMode')
   themeTag.remove('purpleMode')
   themeTag.remove('redMode')

   localStorage.setItem('selectedTheme', 2);
})

purpleDrop.addEventListener('click', ()=>{
   themeTag.add('purpleMode')
   document.getElementById("headDivTitle").style.color = "#d8792b";
   document.getElementById("headFluff").style.color = '#cc2c24';

   themeTag.remove('lightMode')
   themeTag.remove('darkMode')
   themeTag.remove('redMode')

   localStorage.setItem('selectedTheme', 3);
})

redDrop.addEventListener('click', ()=>{
   themeTag.add('redMode')
   document.getElementById("headDivTitle").style.color = "#cba6f7";
   document.getElementById("headFluff").style.color = '#89dceb';

   themeTag.remove('lightMode')
   themeTag.remove('darkMode')
   themeTag.remove('purpleMode')

   localStorage.setItem('selectedTheme', 4);
})


///////////////
///////////////
//local storage

let selectedTheme = localStorage.getItem('selectedTheme');
console.log(selectedTheme);


if (selectedTheme == 1) {
   themeTag.add('lightMode')
   document.getElementById("headDivTitle").style.color = '#d65d0e';
   document.getElementById("headFluff").style.color = "#cc241d";

   themeTag.remove('darkMode')
   themeTag.remove('purpleMode')
   themeTag.remove('redMode')
}else if (selectedTheme == 2) {
   themeTag.add('darkMode')
   document.getElementById("headDivTitle").style.color = "#1d9bf0";
   document.getElementById("headFluff").style.color = '#468487';

   themeTag.remove('lightMode')
   themeTag.remove('purpleMode')
   themeTag.remove('redMode')
}else if (selectedTheme == 3){
   themeTag.add('purpleMode')
   document.getElementById("headDivTitle").style.color = "#d8792b";
   document.getElementById("headFluff").style.color = '#cc2c24';

   themeTag.remove('lightMode')
   themeTag.remove('darkMode')
   themeTag.remove('redMode')
}else if (selectedTheme == 4){
   themeTag.add('redMode')
   document.getElementById("headDivTitle").style.color = "#cba6f7";
   document.getElementById("headFluff").style.color = '#89dceb';

   themeTag.remove('lightMode')
   themeTag.remove('darkMode')
   themeTag.remove('purpleMode')
}