let now = document.querySelector(".now");
let list = document.querySelectorAll(".list");
let back = document.getElementById("back");

let clicked = false;

now.addEventListener("click", () => {
    if (!clicked) {
        clicked = true;
        back.classList.add("backList");
        back.classList.remove("backListHide");
        setTimeout(() => {
            list.forEach((element) => {
                element.classList.add("showList");
            });
        }, 400);

    } else {
        clicked = false;
        list.forEach((element) => {
            element.classList.remove("showList");
        });
        back.classList.remove("backList");
        back.classList.add("backListHide");
    }
})