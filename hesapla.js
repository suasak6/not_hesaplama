function sinavEkle() {
    let sinavlarDiv = document.getElementById("sinavlar");

    let yeniDiv = document.createElement("div");
    yeniDiv.className = "sinav";

    yeniDiv.innerHTML = `
        Not: <input type="number" class="not">
        Oran: <input type="number" class="oran">
        <button onclick="sinavSil(this)">Sil</button>
    `;

    sinavlarDiv.appendChild(yeniDiv);
}

function sinavSil(btn) {
    btn.parentElement.remove();
}


function hesapla() {
    let notlar = document.getElementsByClassName("not");
    let oranlar = document.getElementsByClassName("oran");
    let uyariDiv= document.getElementById("popup")

    let oranToplam = 0;

    for (let i=0; i< oranlar.length; i++) {
        oranToplam += Number(oranlar[i].value);
    }

    if (oranToplam !== 100) {
        document.getElementById("sonuc").innerText= "";
        uyariDiv.style.display = "flex"
        document.getElementById("popup-mesaj").innerText=
            "Oranlar toplamı 100 değil!";
        return;
    }

    let toplam = 0;

    for (let i = 0; i < notlar.length; i++) {
        let not = Number(notlar[i].value);
        let oran = Number(oranlar[i].value);

        toplam += not * oran/100;
    }

    document.getElementById("sonuc").innerText =
        "Not Ortalaman: " + toplam.toFixed(2);
}

function popupKapat() {
    document.getElementById("popup").style.display = "none"
}