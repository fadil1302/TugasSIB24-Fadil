// fundamental
function showAlert(){
    alert("Halo...! anda telah menekan Alert!!")
}

function showConfirmation(){
    var result = confirm("Apakah Anda Jomblo ?")
    if (result){
        alert("ealah kasihan")
    }else{
        alert("Boleh di tikung gk ?")
    }
}

function showPrompt(){
    var nama = prompt("boleh aku tahu nama kamu gak ?", "")
    if (nama != null && nama != ""){
        alert ("halo kak "+ nama + " salam kenal")
    }else{
        alert ("yaahh, kasih tahulah namanya!!")
    }
}

function loopExample(){
    var output = ""
    for (i=1; i<=5; i++){
        output += "iterasi ke-"+ i + "\n";
    }
    alert(output)
}

function conditionExample(){
    var umur = prompt("Umur kamu berapa kakak ?")
    if (umur < 18){
        alert("selagi belum dewasa nikmatin masa muda ya!!")
    }else {
        alert("ingat kak, udah dewasa harus mandiri ok!!!")
    }
}

function switchExample(){
    var day = prompt("Masukkan nama hari:");
            var message;

            switch (day.toLowerCase()) {
                case "senin":
                case "selasa":
                case "rabu":
                case "kamis":
                case "jumat":
                    message = "Hari kerja.";
                    break;
                case "sabtu":
                    message = "Hari libur, tapi tetap produktif!";
                    break;
                case "minggu":
                    message = "Hari libur, nikmati waktu bersama keluarga!";
                    break;
                default:
                    message = "Hari yang kamu masukin tidak ada nih.";
            }

            alert(message);
}
// fundamental


// caraousel

let slideIndex = 0;
showSlide(slideIndex);

function nextSlide() {
    showSlide(slideIndex += 1);
}

function prevSlide() {
    showSlide(slideIndex -= 1);
}

function showSlide(index) {
    const slides = document.getElementsByClassName("carousel-slide");
    if (index >= slides.length) {slideIndex = 0}    
    if (index < 0) {slideIndex = slides.length - 1}
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");  
    }
    slides[slideIndex].classList.add("active");  
}

setInterval(nextSlide, 3000);

// caraousell

