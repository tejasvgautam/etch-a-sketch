
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

                square.addEventListener('mouseover', () => {
                    alphaValue += 0.1;
                    square.style.backgroundColor = `rgba(255, 0, 0, ${alphaValue})`;

                });
                
                rows.appendChild(square);
            }
    }
}

createGrid(16);
