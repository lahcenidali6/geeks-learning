async function getData(){
    fetch("https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My").then(resault=>{
        if(!resault.ok){
            throw new Error("somethings went wrong!")
        }else {
            return resault.json()
        }
    }).then(resault=>console.log(resault))
    .catch(error=>console.log(error))
}
getData()
