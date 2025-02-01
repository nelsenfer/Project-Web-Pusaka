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
