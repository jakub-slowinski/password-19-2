function checkPass() {

    let password1 = document.getElementById("pass1").value;
    let password2 = document.getElementById("pass2").value;
    const lowCase = /[a-z]/;
    const upCase = /[A-Z]/;
    const specCase = /[]/;
    

    if (password1.length < 8) {
        document.getElementById("tooShort").style.color = "red";
        document.getElementById("tooShort").innerHTML = "<br> Za krótkie hasło. Min. 8 znaków";
    } else {
        document.getElementById("tooShort").innerHTML = "";
    }

    if (password1 != password2) {
        document.getElementById("differentPass").style.color = "red";
        document.getElementById("differentPass").innerHTML = "<br> Hasła różnią się od siebie!";
    } else {
        document.getElementById("differentPass").innerHTML = "";
    }

    if (!lowCase.test(password1)) {
        document.getElementById("minimumOneLowercase").style.color = "red";
        document.getElementById("minimumOneLowercase").innerHTML = "<br> Minimum 1 mała litera!";
    } else {
        document.getElementById("minimumOneLowercase").innerHTML = "";
    }


    if (!upCase.test(password1)) {
        document.getElementById("minimumOneUppercase").style.color = "red";
        document.getElementById("minimumOneUppercase").innerHTML = "<br> Minimum 1 duża litera!";
    } else {
        document.getElementById("minimumOneUppercase").innerHTML = "";
    }

}