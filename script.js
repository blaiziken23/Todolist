function isEmptyOrSpaces(str) {
    return str === null || str.match(/^ *$/) !== null;
};

document.getElementById("add").addEventListener("click", (e) => {
    
    e.preventDefault();
    let titleValue = document.getElementById("inputTitle").value;
    let divAdded = document.getElementById("added");
    let divAppend = document.createElement("div");
    let deleteBtn = document.createElement("button");
    let radioBtn = document.createElement("input");

    deleteBtn.classList.add("btn", "btn-danger", "btn-sm", "col-1");
    deleteBtn.setAttribute("type", "button");
    deleteBtn.setAttribute("id", "btndel");
    deleteBtn.innerHTML = '<i class="bi bi-x-octagon"></i>';
    radioBtn.setAttribute("type", "checkbox");
    radioBtn.setAttribute("id", "checkBox");
    radioBtn.classList.add("form-check-input", "m-0", "col-1");

    if (!isEmptyOrSpaces(titleValue)) {

        divAppend.classList.add("new", "mb-2", "rounded", "p-2", "shadow-sm", "row");
        divAppend.append(radioBtn);
        divAdded.append(divAppend);

        // let childList = divAdded.children;
        // for(i = 0; i < childList.length; i++) {
        //     divAppend.innerHTML = `${i + 1}. <p class="mb-0" id="text"> ${titleValue} </p>`;
        // };

        divAppend.innerHTML += `<p class="mb-0 col-10" id="text"> ${titleValue} </p>`;
        divAppend.append(deleteBtn);
    }
    else {
        alert("Add Any Text");
    }   

    document.querySelectorAll("#checkBox").forEach(x => {
        x.addEventListener("click", () => {

            if (x.checked) {
                x.nextElementSibling.style.textDecoration = "line-through";
                x.parentElement.style.backgroundColor = "rgb(193 203 212)";
            }
            else {
                x.nextElementSibling.style.textDecoration = "none";
                x.parentElement.style.backgroundColor = "aliceblue";
            };

        });
    });

    let btnDEl = document.querySelectorAll("#btndel");
    btnDEl.forEach(del => {
        del.addEventListener("click", () => {
            del.parentElement.remove();
        });
    });

    document.getElementById("inputTitle").value = "";
});






// for(let i = 0; i < localStorage.length; i++) {
//     let key = localStorage.key(i);
//     console.log(`${key} ${localStorage.getItem(key)}`);
// }

