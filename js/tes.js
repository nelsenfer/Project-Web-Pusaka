const keriss = [
  {
    nama: "DAPUR BROJOL",
    isi: "Sampai saat ini, beberapa masyarakat meyakini bahwa keris brojol manfaatnya sangat besar dalam proses kelahiran. Padahal, keris ini memiliki filosofi penting tentang kehidupan sekaligus sejumlah makna spiritual yang dapat dijadikan sebagai pegangan hidup.Tidak hanya untuk proses kelahiran, filosofi keris brojol diharapkan pada pemilik keris ini dapat dilancarkan secara urusannya, termasuk lancar dalam mencari rezeki.",
    img: "../img/DAPUR BROJOL.jpg",
  },
  {
    nama: "keris dua",
    isi: "ini adalah keris dua",
    img: "../img/keris 2.jpg",
  },
];

//iju coba card

// import { keriss } from "./librari.js";

console.log(keriss);

let currentSlide = 0;

function plusDivs(n) {
  currentSlide += n;
  if (currentSlide < 0) {
    currentSlide = keriss.length - 1; // Kembali ke slide terakhir
  } else if (currentSlide >= keriss.length) {
    currentSlide = 0; // Kembali ke slide pertama
  }
  showSlide(currentSlide); // Tampilkan slide yang baru
}

function showSlide(index) {
  const keterangan = document.createElement("div");
  keterangan.innerHTML = `
      <h2>${keriss[index].nama}</h2>
      <p>${keriss[index].isi}</p>`;

  const deskripsi = document.getElementById("deskripsi");
  deskripsi.innerHTML = "";
  deskripsi.appendChild(keterangan);

  // Menampilkan gambar yang sesuai dengan slide saat ini
  let x = document.getElementsByClassName("imgSlide");
  for (let i = 0; i < x.length; i++) {
    x[i].style.display = "none"; // Sembunyikan semua gambar
  }
  x[index].style.display = "block"; // Tampilkan gambar yang sesuai
}

document.addEventListener("DOMContentLoaded", function () {
  const slideitem = document.getElementById("slide");
  keriss.forEach((keris) => {
    const imgSlide = document.createElement("div");
    imgSlide.className = "warp-imgSlide";
    imgSlide.innerHTML = `
        <img class="imgSlide" src="${keris.img}" style="display: none;">`;
    slideitem.appendChild(imgSlide);
  });

  showSlide(currentSlide);

  const buttonContainer = document.createElement("div");
  buttonContainer.className = "button";
  buttonContainer.innerHTML = `
        <button onclick="plusDivs(-1)">❮ Prev</button>
        <button onclick="plusDivs(1)">Next ❯</button>`;
  slideitem.appendChild(buttonContainer);
});

//daftar card
