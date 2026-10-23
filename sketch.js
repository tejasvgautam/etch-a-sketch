function createGrid(size){

    for(let i=0; i<size; i++){  // Create Rows Here
        const container = document.querySelector(".container");
        const rows = document.createElement("div");
        rows.classList.add("rows");
        container.appendChild(rows);

            for(let i=0; i<size; i++){      // Insert Divs in The Current Row (Columns)
                const square_div = document.createElement("div");
                square_div.classList.add("square_div");
                rows.appendChild(square_div);
            }
    }
}

createGrid(4);
