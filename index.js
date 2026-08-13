const generateColor = document.getElementById("generateButton");
const colorScheme = document.getElementById("colorScheme");

generateColor.addEventListener("click", (e) => {
    e.preventDefault();

    const colorName = document.getElementById("colorInput");
    const colorMode = document.getElementById("colorMode");

    const hex = colorName.value.replace("#", "");

    generateColor.disabled = true;
    colorScheme.innerHTML = `<p class="status">Loading...</p>`;

    fetch(`https://www.thecolorapi.com/scheme?hex=${hex}&mode=${colorMode.value}&count=6`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Color API returned ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            colorScheme.innerHTML = "";
            data.colors.forEach(color => {
                schemeBuilder(color.hex.value);
            })
        })
        .catch(error => {
            colorScheme.innerHTML = `<p class="status">Couldn't generate a color scheme. Please try again.</p>`;
            console.error(error);
        })
        .finally(() => {
            generateColor.disabled = false;
        })
})

function schemeBuilder(hex){
    const swatch = document.createElement("div");
    swatch.className = "color";
    swatch.style.backgroundColor = hex;
    swatch.innerHTML = `
        <span class="hex-label">${hex}</span>
        <span class="copied-label">Copied!</span>
    `;
    swatch.addEventListener("click", () => copyHex(swatch, hex));
    colorScheme.appendChild(swatch);
}

function copyHex(swatch, hex){
    navigator.clipboard.writeText(hex).then(() => {
        swatch.classList.add("copied");
        setTimeout(() => swatch.classList.remove("copied"), 1000);
    });
}
