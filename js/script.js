const keriss = [
  {
    nama: "DAPUR BROJOL",
    isi: "Keris pusaka brojol merupakan salah satu jenis keris yang dipercaya dapat mempelancar lahirnya cabang bayi sehingga tidak heran keris brojol ini sering digunakan dan dimiliki oleh orang yang berprofesi menjadi dukun bayi atau paraji. Namun, pada kenyataannya tidak hanya para dukun bayi saja yang memiliki keris pusaka brojol ini melainkan banyak orang diluar profesi tersebut yang memiliki keris pusaka ini walaupun pada dasarnya mereka bukan keturunan dukun bayi.<br><br>Sama halnya seperti keris pusaka pada umumnya, keris brojol juga merupakan salah satu karya buatan yang mempunyai kekuatan spiritual terutama dalam bentuk ajaran-ajaran hidup. Brojol memang identik dengan kelahiran cabang bayi didalam perut. Keris berdhapur brojol merupakan simbol dari kelahiran bayi bukan sebagai proses kelahiran itu sendiri melainkan ditujukan pada kesucian cabang bayi yang baru saja dilahirkan yaitu sebagai fitrah manusia",
    img: "/img/DAPUR BROJOL.jpg",
  },
  {
    nama: "DAPUR TILAM UPIH ",
    isi: "TILAM SARI, adalah salah satu bentuk Dhapur keris lurus yang cukup banyak dijumpai di Pulau Jawa. Bentuk keris itu sangat serupa dengan keris dhapur Tilam Upih. Ricikan-nya adalah: Gandik Polos berukuran normal, tikel alis, pejetan, sraweyan, dan thingil berbentuk ri pandan. Menurut cerita pitutur lisan, salah satu wali-sanga, yaitu Kanjeng Sunan Kalijaga pernah menyarankan kepada pengikut-pengikut beliau, bahwa keris pusaka pertama yang harus dimiliki adalah keris dengan dapur Tilam Upih kemudian pasangannya adalah Tilam Sari. Menurut beliau keris dengan dapur ini, bisa menjadi pengikut/teman yang setia disaat suka maupun duka, disaat prihatin dan disaat jaya.<br><br>Tilam yang dalam terminologi Jawa berarti tikar yang terbuat dari anyaman daun untuk alas tidur, diistilahkan sebagai kondisi sedang tirakat/prihatin, masih tidur dengan alas yang keras, belum dengan alas yang empuk. Sedangkan Sari berarti kembang yang mempunyai filosofi luhur lambang rasa bakti terhadap orang tua, kemulyaan hidup dan keharuman nama",
    img: "/img/DAPUR TILAM UPIH.jpg",
  },
  {
    nama: "DAPUR TILAM SARI",
    isi: "TILAM SARI, adalah salah satu bentuk Dhapur keris lurus yang cukup banyak dijumpai di Pulau Jawa. Bentuk keris itu sangat serupa dengan keris dhapur Tilam Upih. Ricikan-nya adalah: Gandik Polos berukuran normal, tikel alis, pejetan, sraweyan, dan thingil berbentuk ri pandan. Menurut cerita pitutur lisan, salah satu wali-sanga, yaitu Kanjeng Sunan Kalijaga pernah menyarankan kepada pengikut-pengikut beliau, bahwa keris pusaka pertama yang harus dimiliki adalah keris dengan dapur Tilam Upih kemudian pasangannya adalah Tilam Sari. Menurut beliau keris dengan dapur ini, bisa menjadi pengikut/teman yang setia disaat suka maupun duka, disaat prihatin dan disaat jaya. <br><br> Tilam yang dalam terminologi Jawa berarti tikar yang terbuat dari anyaman daun untuk alas tidur, diistilahkan sebagai kondisi sedang tirakat/prihatin, masih tidur dengan alas yang keras, belum dengan alas yang empuk. Sedangkan Sari berarti kembang yang mempunyai filosofi luhur lambang rasa bakti terhadap orang tua, kemulyaan hidup dan keharuman nama.",
    img: "/img/dapur tilam.jpg",
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
  const truncatedIsi = keriss[index].isi.substring(0, 500) + "..."; // Display only the first 100 characters
  keterangan.innerHTML = `
      <h2>${keriss[index].nama}</h2>
      <p>${truncatedIsi}</p>`;
  const deskripsi = document.getElementById("deskripsi");
  deskripsi.innerHTML = "";

  const seeMore = document.createElement("button");
  seeMore.innerHTML = "See More";
  seeMore.addEventListener("click", () => {
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
