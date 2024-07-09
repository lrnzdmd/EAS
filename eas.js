document.addEventListener("DOMContentLoaded", function() {
    let resetButton = document.querySelector(".reset");
    let grid = document.querySelector(".content");
    
    
    resetButton.addEventListener("click", function() {resetGrid(grid)});

    function getRandomColor() {
        
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
    
        
        let color = `rgb(${r}, ${g}, ${b})`;
    
        return color;
    }
    
    function resetGrid(grid) {
        let newsize;
        grid.innerHTML = "";
        do {
        newSize = prompt("Inserisci la dimensione della griglia:");
        if (newSize === null || isNaN(newSize) || newSize <= 0 || newSize > 100) {
            alert("Inserisci un numero valido compreso tra 1 e 100.");
        }
        }
        while (newSize === null || isNaN(newSize) || newSize <= 0 || newSize > 100);
        
        createGrid(grid, newSize);
    }

    
    function createGrid(grid, size) {
        for (let i = 0; i < size * size; i++) {
            let div = document.createElement("div");
            div.style.width = `calc(100% / ${size})`; 
            div.style.paddingTop = `calc(100% / ${size})`;
            div.style.opacity = 0;
            div.classList.add("grid-cell");

            div.addEventListener("mouseenter", function(){ div.style.opacity = parseFloat(div.style.opacity) + 0.05;
                div.style.backgroundColor = getRandomColor();
            }); 
            grid.appendChild(div);
        }
    }

   
    createGrid(grid, 16);
});