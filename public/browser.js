console.log("FrontEnd JS ishga tushdi");
function itemTemplate(item) {
  return `<li
          class="list-group-item list-group-item-info d-flex align-items-center justify-content-between"
        >
          <span class="item-text">${item.reja} </span>
          <div>
            <!-- endi har bir item id sini btnlarga biriktirib qpyamiz -->
            <button
              data-id="${item._id}"
              class="edit-me btn btn-secondary"
              btn-sm
              mr-1
            >
              edit
            </button>
            <button
              data-id="${item._id}"
              class="delete-me btn btn-danger"
              btn-sm
            >
              delete
            </button>
          </div>
        </li>`;
}

let createField = document.getElementById("create-field");

document.getElementById("create-form").addEventListener("submit", (e) => {
  e.preventDefault();

  axios
    .post("/create-item", { reja: createField.value })
    .then((responce) => {
      document
        .getElementById("item-list")
        .insertAdjacentHTML("beforeend", itemTemplate(responce.data));
      createField.value = "";
      createField.focus();
    })
    .catch((err) => {
      console.log("Please try again");
    });
});
