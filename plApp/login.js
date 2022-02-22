const loginForm = document.getElementById("loginForm");         //Declare all constant references to elements on page
const loginButt = document.getElementById("subLogin");
const loginErrMsg = document.getElementById("errMsgCon");

loginButt.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.uname.value;
    const password = loginForm.pword.value;

    if (username == "user" && password == "pass") {
        alert("You have succesfuly logged in!");
        location.reload();
    } else {
        loginErrMsg.style.opacity = 1;
    }
})

