const content_div = document.querySelector(".content");
const prompt_button = document.createElement("button");
prompt_button.textContent = "Resize";
prompt_button.style.padding = "5px";
content_div.insertBefore(prompt_button, content_div.firstChild);

    prompt_button.addEventListener("click", () => {
        const delete_container = document.querySelector(".container");
        let prompt_value = Math.floor(parseFloat(prompt("Enter Grid Size (2-64): ")));

        if(Number.isNaN(prompt_value)){
            return;
        }
        if(prompt_value > 64){
            prompt_value = 64;
        }
        if(prompt_value < 2){
            return;
        }

        while (delete_container.hasChildNodes()){
            delete_container.removeChild(delete_container.lastChild);
        }

        createGrid(prompt_value);
    });     

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
