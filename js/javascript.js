/*
validate password match
*/
function validatePasswordMatch() {
    const pw = document.querySelector('#password');
    const pwc = document.querySelector('#passwordC');

    if (pw.value != pwc.value) {
        document.getElementById("passwordC-error").innerHTML = "Passwords do not match!";
        pw.setAttribute("isvalid", "false");
        pwc.setAttribute("isvalid", "false");

    }
    else
        document.getElementById("passwordC-error").innerHTML = "";

}





