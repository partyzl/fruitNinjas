

console.log("Hello World")

const rootElement = document.getElementById("root")

const renderHeader = () =>{
    const header = document.createElement("div");
    header.classList.add("header")

    const headerText = document.createElement("h1");
    headerText.classList.add("header-text");
    headerText.textContent = "Welcome to Fruit Ninja!"

    header.appendChild(headerText);
    rootElement.appendChild(header)
}

const guessMade = () =>{
    fetch(`http://localhost:3000/guess/apple`)
    .then(response =>response.json())
    .then(data=>console.log(data));
}

renderHeader();
guessMade();