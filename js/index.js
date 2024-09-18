function sendMail() {
    var param = {
        name: document.getElementById("name").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    }

    const serviceID = "service_dx83ij8";
    const templateID = "template_8g4gq7r";

    emailjs.send(serviceID, templateID, param).then((res) => {
        document.getElementById("name").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("email").value = "";
        document.getElementById("subject").value = "";
        document.getElementById("message").value = "";
    }).catch(error => console.log(error));
}

