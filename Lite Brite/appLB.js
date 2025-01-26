
        const colors = [ "green", "yellow", "orange", "red", "white", "purple", "transparent"];
        document.querySelectorAll(".colorButton").forEach((button) => {
            let clickCount = 0;
            button.addEventListener("click", () => {
                clickCount++;
                button.style.backgroundColor = colors[(clickCount - 1) % colors.length];
            });
        });





/*
        let clickCount = 0;
        const colors = ["purple", "blue", "green", "yellow", "orange", "red"];

        function changeColor() {
            clickCount++;
            const pegIndiv = document.getElementById("pegIndiv");

            pegIndiv.style.backgroundColor = colors[(clickCount - 1) % colors.length];
        }

        document.querySelectorAll(".peg").forEach(button => { button.addEventListener("click", changeColor); });


let clickNumber = 0;

function changeColor() {
    clickNumber++;
    const pegIndiv = document.getElementById("pegIndiv");

    if (clickNumber === 1) {
        pegIndiv.style.backgroundColor = "yellow";
    }
    if (clickNumber === 2) {
        pegIndiv.style.backgroundColor = "green";
    }
    if (clickNumber === 3) {
        pegIndiv.style.backgroundColor = "orange";
    }
    else if (clickNumber === 3) {
        pegIndiv.style.backgroundColor = "red";
    }
    else {
        clickNumber = 0;
        pegIndiv.style.backgroundColor = "transparent";
    }

}

*/
