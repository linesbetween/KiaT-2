
function upload() {
    var targetImage = document.querySelector("#target_image").files[0];
    var arImage = document.querySelector("#ar_image").files[0];
    uploadFile(targetImage, arImage);
}

const uploadFile = (targetImage, arImage) => {
    console.log("Uploading file...");
    const API_ENDPOINT = "https://console.echoAR.xyz/upload";
    const request = new XMLHttpRequest();
    const formData = new FormData();
    
    var newMessage;

    request.open("POST", API_ENDPOINT, true);
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            console.log("what's breaking JSON" + request.responseType.toString());
            newMessage = request.response; // need to store this newMessage as js object
    // save returned response to server
    // POST /message
    $.ajax({
        method: 'POST',
        url: 'http://localhost:3000/message',
        data: newMessage
    }).then(function(response) {
        if (response.success) {
            console.log("message saved");
            alert("Your message is saved on EchoAR cloud!");
        } else {
            alert(response.message);
        }
    });
    };
    };
    formData.append("key", "small-fog-3905");
    formData.append("email", "majiatester@gmail.com");
    formData.append("target_type", 0);
    formData.append("hologram_type", 1);
    formData.append("file_image", targetImage);
    formData.append("file_image_hologram", arImage);
    request.send(formData);

    // save returned response to server
    // POST /message
    // $.ajax({
    //     method: 'POST',
    //     url: 'http://localhost:3000/message',
    //     data: newMessage
    // }).then(function(response) {
    //     if (response.success) {
    //         console.log("message saved");
    //         alert("Your message is saved on EchoAR cloud!");
    //     } else {
    //         alert(response.message);
    //     }
    // });
    // };
}
