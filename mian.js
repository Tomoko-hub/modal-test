const buttonOpen = document.getElementById("modalOpen");

const buttonClose = document.querySelector(".modalClose");

const modal = document.getElementById("modal");

buttonOpen.addEventListener("click", ()=>{
    modal.style.display = "block";
});

buttonClose.addEventListener("click", ()=>{
    modal.style.display = "none";
})

document.addEventListener("click", (event)=> {
    //console.log(event.target);
    if (event.target == modal) {
        modal.style.display = "none";
    }
});