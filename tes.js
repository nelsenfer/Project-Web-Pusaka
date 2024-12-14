const keriss = [
  {
    nama: "keris satu",
    isi: "ini adalah keris satu",
    img: "img/keris satu.jpg",
  },
  {
    nama: "keris dua",
    isi: "ini adalah keris dua",
    img: "img/keris 2.jpg",
  },
];
console.log(keriss);

document.addEventListener("DOMContentLoaded", function () {
  const deskripsi = document.getElementById("deskripsi");
  const slideitem = document.getElementById("slide");
  keriss.forEach((keris) => {
    const keterangan = document.createElement("div");
    keterangan.className = "keterangan";
    keterangan.innerHTML = `
        <h2>${keris.nama}</h2>
        <p>${keris.isi}</p>`;
    deskripsi.appendChild(keterangan); // Pastikan descripsi tidak null

    const imgSlide = document.createElement("div");
    imgSlide.className = "imgSlide";
    imgSlide.innerHTML = `
        <img src="${keris.img}">`;
    slideitem.appendChild(imgSlide); // Pastikan slideitem tidak null
  });
});
