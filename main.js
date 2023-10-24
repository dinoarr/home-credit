document.addEventListener("DOMContentLoaded", function () {
    // Ambil elemen-elemen yang diperlukan dari formulir
    const tipeRumah = document.getElementById("tipeRumah");
    const tempo = document.getElementById("Tempo");
    const hargaRumahInput = document.getElementById("HargaRumah");
    const uangMukaInput = document.getElementById("UangMuka");
    const angsuranInput = document.getElementById("Angsuran");
    const tombolProses = document.getElementById("tombolProses");

    // Data harga rumah berdasarkan tipe rumah
    const hargaRumahData = {
        Alamanda: 120000000, // Harga rumah tipe Alamanda
        Melati: 150000000,    // Harga rumah tipe Melati
        Mawar: 200000000    // Harga rumah tipe Mawar
    };

    // Event listener untuk perubahan tipe rumah
    tipeRumah.addEventListener("change", function () {
        const selectedTipeRumah = tipeRumah.value;
        const hargaRumah = hargaRumahData[selectedTipeRumah];
        hargaRumahInput.value = "Rp" + hargaRumah.toLocaleString("en-ID");
    });

    // Event listener untuk tombol "Proses"
    tombolProses.addEventListener("click", function () {
        const selectedTipeRumah = tipeRumah.value;
        const hargaRumah = hargaRumahData[selectedTipeRumah];
        const uangMukaPersen = 20; // Persentase uang muka
        const tempoKredit = parseInt(tempo.value);
        const uangMuka = (hargaRumah * uangMukaPersen) / 100;
        const sisaHarga = hargaRumah - uangMuka;
        const angsuran = sisaHarga / tempoKredit;

        uangMukaInput.value = "Rp" + uangMuka.toLocaleString("en-ID");
        angsuranInput.value = "Rp" + angsuran.toLocaleString("en-ID");
    });
});
