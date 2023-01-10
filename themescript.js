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
    document.getElementById("headDivTitle").style.color = '#275086';
    document.getElementById("headFluff").style.color = "#1d9bf0";

    themeTag.remove('darkMode')
    themeTag.remove('purpleMode')
    themeTag.remove('redMode')
})

darkTheme.addEventListener('click', ()=>{
    themeTag.add('darkMode')
    document.getElementById("headDivTitle").style.color = "#1d9bf0";
    document.getElementById("headFluff").style.color = '#468487';

    themeTag.remove('lightMode')
    themeTag.remove('purpleMode')
    themeTag.remove('redMode')
})

purpleTheme.addEventListener('click', ()=>{
   themeTag.add('purpleMode')
   document.getElementById("headDivTitle").style.color = "#d8792b";
   document.getElementById("headFluff").style.color = '#cc2c24';

   themeTag.remove('lightMode')
   themeTag.remove('darkMode')
   themeTag.remove('redMode')
})

redTheme.addEventListener('click', ()=>{
   themeTag.add('redMode')
   document.getElementById("headDivTitle").style.color = "#74c6eb";
   document.getElementById("headFluff").style.color = '#08acfd';

   themeTag.remove('lightMode')
   themeTag.remove('darkMode')
   themeTag.remove('purpleMode')
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
   document.getElementById("headDivTitle").style.color = '#275086';
   document.getElementById("headFluff").style.color = "#1d9bf0";

   themeTag.remove('darkMode')
   themeTag.remove('purpleMode')
   themeTag.remove('redMode')

})

darkDrop.addEventListener('click', ()=>{
   themeTag.add('darkMode')
   document.getElementById("headDivTitle").style.color = "#1d9bf0";
   document.getElementById("headFluff").style.color = '#468487';

   themeTag.remove('lightMode')
   themeTag.remove('purpleMode')
   themeTag.remove('redMode')
})

purpleDrop.addEventListener('click', ()=>{
   themeTag.add('purpleMode')
   document.getElementById("headDivTitle").style.color = "#d8792b";
   document.getElementById("headFluff").style.color = '#cc2c24';

   themeTag.remove('lightMode')
   themeTag.remove('darkMode')
   themeTag.remove('redMode')
})

redDrop.addEventListener('click', ()=>{
   themeTag.add('redMode')
   document.getElementById("headDivTitle").style.color = "#74c6eb";
   document.getElementById("headFluff").style.color = '#08acfd';

   themeTag.remove('lightMode')
   themeTag.remove('darkMode')
   themeTag.remove('purpleMode')
})