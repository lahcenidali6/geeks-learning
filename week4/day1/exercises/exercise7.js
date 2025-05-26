(function (userName){
    const element=document.createElement("div")
    element.innerText=userName
    document.getElementsByTagName("div")[0].appendChild(element)

})("user")