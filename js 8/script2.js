let button=document.getElementById("btn")
button.addEventListener("click",()=>{
   document.querySelector(".box").innerHTML="<b>I have created successfully</b>"
})
button.addEventListener("contextmenu",()=>{
    alert("Dont hack us by right click please")
})
document.addEventsListener("keydown",e=>{
    console.log(e.key)
})