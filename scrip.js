

const base_api = "https://api.genderize.io";


function showResult(name, gender, probability){
    const persen = probability*100;
    let genderDcode;
    if (gender == "male"){
        genderDcode = "laki - laki"
    }else{
        genderDcode = "perempuan"
    }
    const predictionElemnt = document.getElementById("prediction");
    const predictionFinal = `Halo ${name}, prediksi kelamin kamu adalah ${genderDcode} dengan akurasi ${persen}%`;
    predictionElemnt.textContent = predictionFinal;
}

function gagal(){
    const predictionElemnt = document.getElementById("prediction");
    const predictionFinal = `Maaf tolong hanya masukan 1 kata saja(nama depan)`;
    predictionElemnt.textContent = predictionFinal
}

function cekNamaDepan(nama){
    kalimat = nama.trim();
    var kataArray = kalimat.split(" ");

    if (kataArray.length == 1){
        return 1
    }else{
        return 2
    }

}

async function predict(){
 
    const firstName = document.getElementById("userInput").value;
    const cek  = cekNamaDepan(firstName);
    if (cek == 1){
        const queryUrl = `${base_api}/?name=${firstName}&country_id=ID`;
    const respone = await fetch(queryUrl);
    const result = await respone.json();

    showResult(result.name, result.gender, result.probability);
    }else{
        gagal()
    }

  
}

















