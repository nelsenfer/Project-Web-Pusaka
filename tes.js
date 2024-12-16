const keriss = [
  {
    nama: "DAPUR BROJOL",
    isi: "Sampai saat ini, beberapa masyarakat meyakini bahwa keris brojol manfaatnya sangat besar dalam proses kelahiran. Padahal, keris ini memiliki filosofi penting tentang kehidupan sekaligus sejumlah makna spiritual yang dapat dijadikan sebagai pegangan hidup.Tidak hanya untuk proses kelahiran, filosofi keris brojol diharapkan pada pemilik keris ini dapat dilancarkan secara urusannya, termasuk lancar dalam mencari rezeki.",
    img: "img/DAPUR BROJOL.jpg",
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
    deskripsi.appendChild(keterangan);

    const imgSlide = document.createElement("div");
    imgSlide.className = "warp-imgSlide";
    imgSlide.innerHTML = `
        <img class="imgSlide" src="${keris.img}"style="display: none;">`;

    slideitem.appendChild(imgSlide);
  });

  let slideIndex = 1;
  showDivs(slideIndex);
  const buttonContainer = document.createElement("div");
  buttonContainer.className = "w3-section";
  buttonContainer.innerHTML = `
        <button onclick="plusDivs(-1)">❮ Prev</button>
        <button onclick="plusDivs(1)">Next ❯</button>`;
  slideitem.appendChild(buttonContainer);
});

let slideIndex = 1;
function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  let i;
  let x = document.getElementsByClassName("imgSlide");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}
