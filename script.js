let submitmdp = document.querySelector(".buttonmdp")
let form1 = document.querySelector("#form1")
let inputmdp = document.querySelector("#inputmdp")
const chaine = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789*$^ù%!:;,?./§-_&é'(-è_çà)"
let maj = document.querySelector("#maj")
let ranger = document.querySelector("#ranger")
let rangemax = ranger.value
document.querySelector("#labelRanger").innerHTML=rangemax


ranger.onchange=function(){
    if (inputmdp.value == "") {
        for (let index = 0; index < ranger.value; index++) {
            inputmdp.value += chaine.charAt(Math.floor(Math.random()*(chaine.length)))
        }
        if (maj.checked){
            let nombrealeatoire = (Math.floor(Math.random()*10))
            let caracaleatoire = inputmdp.value.charAt(nombrealeatoire)
            let AZ = chaine.slice(26,52)
            let nombrealeatoire2 = (Math.floor(Math.random()*26))
            let majAleatoire = AZ.charAt(nombrealeatoire2)
            let newinput = inputmdp.value.replace(caracaleatoire, majAleatoire)
            inputmdp.value = newinput
            document.body.style.backgroundColor = "Grey"
        }
    }
    else{
        inputmdp.value = "";
        for (let index = 0; index < ranger.value; index++) {
            inputmdp.value += chaine.charAt(Math.floor(Math.random()*(chaine.length)))
        }
    }
    let rangemax = ranger.value
    document.querySelector("#labelRanger").innerHTML=rangemax
}

submitmdp.addEventListener("click", function(event){
    event.preventDefault()
    if (inputmdp.value == "") {
        for (let index = 0; index < ranger.value; index++) {
            inputmdp.value += chaine.charAt(Math.floor(Math.random()*(chaine.length)))
        }
    }
    else{
        inputmdp.value = "";
        for (let index = 0; index < ranger.value; index++) {
            inputmdp.value += chaine.charAt(Math.floor(Math.random()*(chaine.length)))
        }
    }
    copyToClipboard();
})

// function copy() {
//     let copyText = document.querySelector("#inputmdp");
//     copyText.select();
//     document.execCommand("copy");
//   }
  
//   document.querySelector(".buttonmdp").addEventListener("click", copy);


function copyToClipboard() {
    var copyText = document.getElementById("inputmdp").value;
    navigator.clipboard.writeText(copyText).then(() => {
        alert("Copied to clipboard");
    });
  }
