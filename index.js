function submitForm() {
    console.log("entered")
    var formdata = new FormData();
    formdata.append("name", _("name").value);
    formdata.append("email", _("email").value);
    var ajax = new XMLHttpRequest();
    ajax.open("POST", "sentMail.php");
    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4 && ajax.status == 200) {
            if (ajax.responseText == "success") {
                _("my_form").innerHTML = '<h2>Thank you ' + _("name").value + ', your message has been sent.</h2>';
            }
        }
    }
    ajax.send(formdata);
}