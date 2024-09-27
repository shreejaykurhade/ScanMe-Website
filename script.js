const qrText = document.getElementById('qr-text');
const sizes = document.getElementById('sizes');
const genrateBtn = document.getElementById('generateBtn');
const downloadBtn = document.getElementById('downloadBtn');
const qrContainer = document.querySelector('.qr-body');

let size = sizes.value;
genrateBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    isEmptyInput();
});

sizes.addEventListener('change',(e)=>{
    size = e.target.value;
    isEmptyInput();
});

downloadBtn.addEventListener('click',()=>{
    let img  = document.querySelector('.qr-body img');

    if(img !== null){
        let imgAttr = img.getAttribute('src');
        downloadBtn.setAttribute("href", imgAttr);
    }
    else{
        downloadBtn.setAttribute("href", `${document.querySelector('canvas').toDataURL()}`);
    }
})

function isEmptyInput(){
    if(qrText.value.length > 0){
        generateQRCode();
        }
        else{
            alert("Enter text or URL to generate your QR Code");
        }
}

function generateQRCode(){
    qrContainer.innerHTML = "";
    new QRCode(qrContainer, {
        text: qrText.value,
        height:size,
        width: size,
        colorLight: "#fff",
        colorDark: "#000",
    });
}


