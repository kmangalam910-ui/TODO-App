// Element Section
const para1 = document.getElementsByClassName("text")[0];
const para2 = document.getElementsByClassName("text")[1];
const para3 = document.getElementsByClassName("text")[2];

function selectElements() {
    para1.style = "background-color: yellow; color: white; transition: all 0.3s; border-color: var(--btn-primary);";
    para1.textContent = "I am paragraph 1";

    para2.style = "background-color: var(--btn-primary); color: white; transition: all 0.3s; border-color: var(--btn-primary);";
    para2.textContent = "I am paragraph 2";

    para3.style = "background-color: var(--btn-primary); color: white; transition: all 0.3s; border-color: var(--btn-primary);";
    para3.textContent = "I am paragraph 3";
};

// Creating and Appending
const list = document.getElementById("item-list");
function addItem(event) {
    event.preventDefault();
    const input = document.getElementById("item-input").value;
    if (!input) return;
    const li = document.createElement("li");
    li.textContent = input;
    const remove = document.createElement("button");
    remove.textContent = "Remove";
    list.appendChild(li);
    li.appendChild(remove);
    remove.addEventListener("click", () => {
        li.remove();
    });
    document.getElementById("item-input").value = "";
};

// Modifying Content
const content = document.querySelector("#content-box");
function changeContent() {
    content.textContent = "The content is changed";
};

function changeHTML() {
    content.innerHTML = ("<h2>The HTML is modified</h2>");
};

// Styling Element
const box = document.querySelector("#style-box");
function changeStyle() {
    box.style = "background-color: pink; border-radius: 40px; transition: all 0.5s ease; color: red; border: 2px solid #c4b5fd;";
};

// Event Handling
const eventBtn = document.querySelector("#event-btn");
let click = 1;
eventBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const clicks = click++;
    const clickCount = document.querySelector("#click-count");
    clickCount.textContent = `Clicks: ${clicks}`;
    if (clicks >= 10) {
        clickCount.textContent = "LIMIT";
        clickCount.style = "background-color: #ef4444; color: white;";
    };
});

const input = document.getElementById("text-input");
const output = document.getElementById("output");
input.addEventListener("input", (event) => {
    output.innerHTML = `You typed: ${event.target.value}`;
});

// DOM Traversal
const parent = document.getElementById("parent");
const middleChild = document.getElementsByClassName("child")[1]
function traverseDOM() {
    parent.firstElementChild.style = "background-color: var(--bg-card); color: var(--text-primary); transition: all 0.5s; transform: translateY(-5px); border-color: var(--btn-primary);";

    parent.lastElementChild.style = "background-color: var(--btn-dark-blue); color: white; transition: all 0.5s; transform: translateY(-5px);";

    middleChild.style = "background-color: var(--btn-primary); color: white; transition: all 0.5s; transform: translateY(-5px);";
};

// Attributes Implementation
const image = document.getElementById("demo-img");
function changeAttribute() {
    image.setAttribute("src", "Assets/csr3.webp");
};