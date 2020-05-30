function request(url, callback) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            console.log('responseText:' + xmlhttp.responseText);
            try {
                var data = JSON.parse(xmlhttp.responseText);
            } catch(err) {
                console.log(err.message + " in " + xmlhttp.responseText);
                return;
            }
            callback(data);
        }
    };

    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}


function postRequest(url, data) {
    const xmlhttp = new XMLHttpRequest()
    xmlhttp.open('POST', url, true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send(data)
}


function postSubmit() {
    location.href='../';
    const username = document.getElementById('username').value;
    const fname = document.getElementById('first_name').value;
    const lname = document.getElementById('last_name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const phone_number = document.getElementById('number').value;
    const data = 'username=' + username + "&first_name=" + fname + "&last_name=" + lname + "&email=" + email + "&password=" + password
         + "&number=" + phone_number;
    postRequest('../api/users', data)
}