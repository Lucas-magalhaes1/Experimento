let names = [];
let currentPage = 1;
const itemsPerPage = 5;

function addName() {
    const nameInput = document.getElementById("nameInput");
    const name = nameInput.value.trim();
    if (name) {
        names.push(name);
        renderNames();
        nameInput.value = "";
    }
}

function renderNames() {
    const nameList = document.getElementById("nameList");
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedNames = names.slice(startIndex, endIndex);

    nameList.innerHTML = "";
    paginatedNames.forEach(name => {
        const li = document.createElement("li");
        li.textContent = name;
        nameList.appendChild(li);
    });

    renderPagination();
}

function renderPagination() {
    const pagination = document.getElementById("pagination");
    const totalPages = Math.ceil(names.length / itemsPerPage);

    pagination.innerHTML = "";
    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement("button");
        button.textContent = i;
        button.onclick = () => {
            currentPage = i;
            renderNames();
        };
        pagination.appendChild(button);
    }
}

renderNames();
