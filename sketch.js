function createGrid(size){

    for(let i=0; i<size; i++){  // Create Rows Here
        const container = document.querySelector(".container");
        const rows = document.createElement("div");
        rows.classList.add("rows");
        container.appendChild(rows);

            for(let i=0; i<size; i++){      // Insert Divs in The Current Row (Columns)
                const square = document.createElement("div");
                square.classList.add("square_div");
                let alphaValue = 0.1
                let red_val = Math.floor(Math.random()*256);
                let blue_val = Math.floor(Math.random()*256);
                let green_val = Math.floor(Math.random()*256);

                square.addEventListener('mouseover', () => {
                    
                    alphaValue += 0.1;
                    square.style.backgroundColor = `rgba(${red_val}, ${green_val}, ${blue_val}, ${alphaValue})`;

                });
                
                rows.appendChild(square);
            }
    }
}

createGrid(16);
