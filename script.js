// Daftar produk
const produkList = [
    { nama: "Gantungan Kunci Lucu", harga: 15000, gambar: "https://via.placeholder.com/150" },
    { nama: "Notebook Cantik", harga: 25000, gambar: "https://via.placeholder.com/150" },
    { nama: "Mug Unik", harga: 35000, gambar: "https://via.placeholder.com/150" }
];

// Fungsi menampilkan produk
const container = document.getElementById('produkContainer');

produkList.forEach(produk => {
    const card = document.createElement('div');
    card.classList.add('produk-card');

    card.innerHTML = `
        <img src="${produk.gambar}" alt="${produk.nama}">
        <h3>${produk.nama}</h3>
        <p>Rp ${produk.harga.toLocaleString()}</p>
        <button class="beli-btn" onclick="beliProduk('${produk.nama}')">Beli</button>
    `;

    container.appendChild(card);
});

// Fungsi tombol beli
function beliProduk(namaProduk) {
    alert(`Terima kasih! Kamu memilih produk: ${namaProduk}`);
}
