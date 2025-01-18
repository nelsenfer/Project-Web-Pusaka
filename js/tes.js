const keriss = [
  {
    nama: "DAPUR BROJOL",
    isi: "Sampai saat ini, beberapa masyarakat meyakini bahwa keris brojol manfaatnya sangat besar dalam proses kelahiran. Padahal, keris ini memiliki filosofi penting tentang kehidupan sekaligus sejumlah makna spiritual yang dapat dijadikan sebagai pegangan hidup.",
    img: "../img/DAPUR BROJOL.jpg",
  },
  {
    nama: "keris dua",
    isi: "ini adalah keris dua",
    img: "../img/keris 2.jpg",
  },
];

// Function to generate cards
function generateCards() {
  const container = document.getElementById("container-card");
  keriss.forEach((item) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<h3>${item.nama}</h3>`;
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
      <img src="${kerisDetail.img}" alt="${kerisDetail.nama}">
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
    card.innerHTML = `<h3>${item.nama}</h3>`;
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
