function generateQR() {
    let locationLink = document.getElementById('locationLink').value;
    let btn = document.querySelector('.btn');
    if (locationLink.trim() !== '') {
        let qrCodeDiv = document.getElementById('qrcode');
        qrCodeDiv.innerHTML = '';

        let qr = new QRCode(qrCodeDiv, {
            text: locationLink,
            width: 256,
            height: 256,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H

        });
        btn.style.display = 'none';
    } else {
        alert('Please enter a valid location link.');
    }

}