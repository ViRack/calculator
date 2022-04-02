let expression = "";

const btn = document.querySelectorAll("button");
for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function() {
        console.log("in readValue");
        let thisChar = btn[i].textContent;
        expression += thisChar;
        console.log(expression);
    });
}