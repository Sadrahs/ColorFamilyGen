



const generateColor = document.getElementById("generateButton");

const colorScheme = document.getElementById("colorScheme");

generateColor.addEventListener("click", (e) => {
    e.preventDefault();

    const colorName =document.getElementById("colorInput");
    const colorMode = document.getElementById("colorMode");

    const hex = colorName.value.replace("#", "");


fetch(`https://www.thecolorapi.com/scheme?hex=${hex}&mode=${colorMode.value}&count=6`)
        .then(response => response.json())

    .then(data => {
        colorScheme.innerHTML  = "";
        data.colors.forEach(color => {
            console.log(color.hex.value);
            schemeBuilder(color.hex.value);
        })
    })

})


function schemeBuilder(hex){

    colorScheme.innerHTML += `<div class="color" style="background-color: ${hex};">${hex}</div>`;




}




        
