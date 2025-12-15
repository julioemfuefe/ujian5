// Simulasi akun
const akun = { username: "siswa", password: "12345" };

// Fungsi login
function login() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    if (user === akun.username && pass === akun.password) {
        localStorage.setItem("login", "true");
        alert("Login berhasil!");
        window.location.href = "index.html";
    } else {
        alert("Username atau password salah!");
    }
}

// Cek login untuk index.html
if (window.location.pathname.endsWith("index.html")) {
    const statusLogin = localStorage.getItem("login");
    if (statusLogin !== "true") {
        alert("Harap login terlebih dahulu!");
        window.location.href = "login.html";
    }
}

// Produk
const produkList = [
    { nama: "Gantungan Kunci Lucu", harga: 15000, gambar: "https://via.placeholder.com/150" },
    { nama: "Notebook Cantik", harga: 25000, gambar: "https://via.placeholder.com/150" },
    { nama: "Mug Unik", harga: 35000, gambar: "https://via.placeholder.com/150" }
];

const container = document.getElementById('produkContainer');
if (container) {
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
}

// Tombol beli
function beliProduk(namaProduk) {
    alert(`Terima kasih! Kamu memilih produk: ${namaProduk}`);
}
