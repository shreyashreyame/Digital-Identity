function generateQRCode() {
    var name = document.getElementById("name").value;
    var id = document.getElementById("id").value;
    var qrText = `Name: ${name}\nID: ${id}`;
    var qrDiv = document.getElementById("qr-code");

    // Clear any existing QR code
    qrDiv.innerHTML = "";

    // Generate a simple QR code using a free API
    var qrCode = document.createElement("img");
    qrCode.src = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(qrText)}&size=200x200`;
    qrDiv.appendChild(qrCode);
}
