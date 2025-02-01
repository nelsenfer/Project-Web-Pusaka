const keriss = [
  {
    nama: "DAPUR BROJOL",
    isi: "Sampai saat ini, beberapa masyarakat meyakini bahwa keris brojol manfaatnya sangat besar dalam proses kelahiran. Padahal, keris ini memiliki filosofi penting tentang kehidupan sekaligus sejumlah makna spiritual yang dapat dijadikan sebagai pegangan hidup.",
    img: "/img/DAPUR BROJOL.jpg",
  },
  {
    nama: "Keris Dua",
    isi: "Keris ini dikenal dengan keindahan pamornya yang unik. Banyak yang percaya bahwa keris ini membawa keberuntungan dan perlindungan bagi pemiliknya.",
    img: "/img/keris 2.jpg",
  },
  {
    nama: "Keris Tiga",
    isi: "Keris ini memiliki bentuk yang elegan dan sering dikaitkan dengan kekuatan spiritual. Dipercaya dapat membantu pemiliknya dalam mengambil keputusan penting.",
    img: "/img/DAPUR BROJOL.jpg",
  },
  {
    nama: "Keris Empat",
    isi: "Keris ini memiliki sejarah panjang dan sering digunakan dalam upacara adat. Banyak yang meyakini bahwa keris ini memiliki kekuatan magis.",
    img: "/img/DAPUR BROJOL.jpg",
  },
  {
    nama: "Keris Lima",
    isi: "Keris ini dikenal dengan bilahnya yang tajam dan motif pamor yang indah. Dipercaya dapat memberikan keberanian dan keteguhan hati.",
    img: "/img/DAPUR BROJOL.jpg",
  },
  {
    nama: "Keris Enam",
    isi: "Keris ini sering dikaitkan dengan kekuatan alam dan spiritual. Banyak yang meyakini bahwa keris ini dapat membantu pemiliknya menghadapi rintangan hidup.",
    img: "/img/DAPUR BROJOL.jpg",
  },
  {
    nama: "Keris Tujuh",
    isi: "Keris ini memiliki bentuk yang unik dan sering digunakan sebagai pusaka keluarga. Dipercaya dapat membawa kedamaian dan harmoni.",
    img: "/img/DAPUR BROJOL.jpg",
  },
  {
    nama: "Keris Delapan",
    isi: "Keris ini dikenal dengan kekuatan spiritualnya yang tinggi. Banyak yang meyakini bahwa keris ini dapat melindungi pemiliknya dari energi negatif.",
    img: "/img/DAPUR BROJOL.jpg",
  },
  {
    nama: "Keris Sembilan",
    isi: "Keris ini memiliki pamor yang indah dan sering dikaitkan dengan kebijaksanaan. Dipercaya dapat membantu pemiliknya dalam menyelesaikan masalah.",
    img: "/img/DAPUR BROJOL.jpg",
  },
  {
    nama: "Keris Sepuluh",
    isi: "Keris ini merupakan simbol kekuatan dan keteguhan. Banyak yang meyakini bahwa keris ini dapat memberikan motivasi dan semangat dalam menghadapi tantangan.",
    img: "/img/DAPUR BROJOL.jpg",
  },
];

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
