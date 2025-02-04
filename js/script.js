import { keriss } from "./librari.js";

// Function to generate cards
function generateCards() {
  const container = document.getElementById("container-card");
  keriss.forEach((item) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
    <h3>${item.nama}</h3>
    <img src="..${item.img}" alt="${item.nama}" class="img_card">`;
    card.onclick = () => {
      window.location.href = `detail.html?nama=${encodeURIComponent(
        item.nama
      )}`;
    };
    container.appendChild(card);
  });
}

// Call the function to generate cards when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", generateCards);

// Function to display keris details based on query parameter
function displayKerisDetails() {
  const params = new URLSearchParams(window.location.search);
  const namaKeris = params.get("nama");

  const kerisDetail = keriss.find((keris) => keris.nama === namaKeris);
  if (kerisDetail) {
    const detailContainer = document.getElementById("detail-container");
    const detailContent = `
      <h2>${kerisDetail.nama}</h2>
      <p>${kerisDetail.isi}</p>
      <img src="..${kerisDetail.img}" alt="${kerisDetail.nama}">
    `;
    detailContainer.innerHTML = detailContent;
  } else {
    document.getElementById("detail-container").innerHTML =
      "<p>Keris tidak ditemukan.</p>";
  }
}

// Call the function to display details when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", displayKerisDetails);

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
  const truncatedIsi = keriss[index].isi.substring(0, 100) + "..."; // Display only the first 100 characters
  keterangan.innerHTML = `
      <h2>${keriss[index].nama}</h2>
      <p>${truncatedIsi}</p>`;
  const deskripsi = document.getElementById("deskripsi");
  deskripsi.innerHTML = "";

  const seeMore = document.createElement("button");
  seeMore.innerHTML = "See More";
  seeMore.addEventListener("click", () => {
    // Update the URL and reload the page to call displayKerisDetails
    window.location.href = `./html/detail.html?nama=${encodeURIComponent(
      keriss[index].nama
    )}`;
  });

  deskripsi.appendChild(keterangan);
  deskripsi.appendChild(seeMore);

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
        <img class="imgSlide" src=".${keris.img}" style="display: none;">`;
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

// Function to search for keris by name
function searchKeris() {
  const searchInput = document
    .getElementById("search-input")
    .value.toLowerCase();
  const filteredKeris = keriss.filter((keris) =>
    keris.nama.toLowerCase().includes(searchInput)
  );

  // Clear existing cards
  const container = document.getElementById("container-card");
  container.innerHTML = ""; // Clear existing cards

  // Generate new cards based on search results
  filteredKeris.forEach((item) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
    <h2>${item.nama}</h2>
    <img src="..${item.img}" alt="${item.nama}" class="img_card">`; // Corrected image source
    card.onclick = () => {
      window.location.href = `detail.html?nama=${encodeURIComponent(
        item.nama
      )}`;
    };
    container.appendChild(card);
  });
}

// Event listener for search input
document.getElementById("search-input").addEventListener("input", searchKeris);

//see more
function seeMore() {}
