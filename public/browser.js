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
    .post("/create-item", { reja: createField.value }) //reja? //  nomi manashu ..... : bo'lgan inputni valuesini jo'nat
    .then((response) => {
      // console.log(response);
      document
        .getElementById("item-list")
        .insertAdjacentHTML("beforeend", itemTemplate(response.data));
      createField.value = "";
      createField.focus();
    })
    .catch((err) => {
      console.log("Please try again");
    });
});

document.addEventListener("click", function (e) {
  //delete oper
  console.log(e.target);
  if (e.target.classList.contains("delete-me")) {
    if (confirm("Aniq o'chirmoqchimisiz?")) {
      axios
        .post("/delete-item", { id: e.target.getAttribute("data-id") })
        .then((response) => {
          console.log(response.data);
          e.target.parentElement.parentElement.remove();
        })
        .catch((err) => {
          console.log("Please try again");
        });
    }

    // alert("siz delete tugmasini bosdingiz");
  }
  //edit oper
  if (e.target.classList.contains("edit-me")) {
    let userInput = prompt(
      "O'zgartirish kiriting",
      e.target.parentElement.parentElement.querySelector(".item-text").innerHTML
    );
    if (userInput) {
      axios
        .post("/edit-item", {
          id: e.target.getAttribute("data-id"),
          new_input: userInput,
        })
        .then((res) => {
          console.log(res.data);
          e.target.parentElement.parentElement.querySelector(
            ".item-text"
          ).innerHTML = userInput;
        })
        .catch((err) => {
          console.log(err, "Iltimos qayta urining");
        });
    }
  }
});

document.getElementById("clean-all").addEventListener("click", function () {
  axios
    .post("./delete-all", { delete_all: true })
    .then((res) => alert(res.data.state));
  document.location.reload();
});

//Atlas’da database turadi, Compass esa uni ko‘rib va boshqarish uchun developer asbobi
