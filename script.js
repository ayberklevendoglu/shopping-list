const itemForm = document.querySelector("#item-form");
const itemInput = document.querySelector("#item-input");
const itemList = document.querySelector("#item-list");
const clearAllButton = document.querySelector("#clear");

const itemFilter = document.querySelector(".filter");

const addItem = (e) => {
  e.preventDefault();
  const newItem = itemInput.value;
  let upperCaseItem = newItem.charAt(0).toUpperCase() + newItem.slice(1);

  if (newItem === "") {
    alert("Please enter the field");
    return;
  }

  const li = document.createElement("li");
  li.appendChild(document.createTextNode(upperCaseItem));

  const button = createButton("remove-item btn-link text-red");
  li.appendChild(button);

  itemList.appendChild(li);
  checkUI();

  itemInput.value = "";
};

const createButton = (classes) => {
  const button = document.createElement("button");
  button.className = classes;
  const icon = createIcon("fa-solid fa-xmark");
  button.appendChild(icon);
  return button;
};

const createIcon = (classes) => {
  const icon = document.createElement("i");
  icon.className = classes;
  return icon;
};

const removeItem = (e) => {
  if (e.target.parentElement.classList.contains("remove-item")) {
    if (confirm("Do you want to delete this item?")) {
      e.target.parentElement.parentElement.remove();
      checkUI();
    }
  }
};

const clearAllItems = () => {
  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
  }
  checkUI();
};

const checkUI = () => {
  const items = document.querySelectorAll("li");
  if (items.length === 0) {
    clearAllButton.classList.add("hide");
    itemFilter.classList.add("hide");
  } else {
    clearAllButton.classList.remove("hide");
    itemFilter.classList.remove("hide");
  }
};
// Event listeners
itemForm.addEventListener("submit", addItem);
itemList.addEventListener("click", removeItem);
clearAllButton.addEventListener("click", clearAllItems);

checkUI();
