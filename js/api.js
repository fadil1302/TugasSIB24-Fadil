// URL API
var apiUrl = "https://crudcrud.com/api/e2a4520e7e68438286d0fbdcfa385e28/users";

// Fungsi untuk menambahkan produk baru
function addProduct(productData){
    fetch(apiUrl, {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(productData)
    })
    .then(response => response.json())
    .then(data => {
        console.log("Produk ditambah", data);
        alert("Produk Berhasil Ditambah!");
    })
    .catch(error => {
        console.error("Error", error);
        alert("Terjadi Kesalahan!");
    })
}

// Fungsi untuk memperbarui produk
function updateProduct(productId, newData) {
    fetch(apiUrl + "/" + productId, {
        method: 'PUT',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newData)
    })
    .then(response => response.json())
    .then(data => {
        console.log("Produk diperbarui", data);
        alert("Produk Berhasil Diperbarui!");
    })
    .catch(error => {
        console.error("Error", error);
        alert("Terjadi Kesalahan!");
    })
}

// Fungsi untuk menghapus produk
function deleteProduct(productId) {
    fetch(apiUrl + "/" + productId, {
        method: 'DELETE',
    })
    .then(response => {
        console.log("Produk dihapus");
        alert("Produk Berhasil Dihapus!");
    })
    .catch(error => {
        console.error("Error", error);
        alert("Terjadi Kesalahan!");
    })
}

// Tambahkan event listener untuk form
document.getElementById("product").addEventListener("submit", function(event){
    event.preventDefault();//mencegah pengiriman form secara default

    // mengambil data dari form
    var nama = document.getElementById("nama").value;
    var jumlah = document.getElementById("jumlah").value;
    var harga = document.getElementById("harga").value;

    // membuat objek data produk
    var productData = {
        nama: nama,
        harga: parseFloat(harga),
        jumlah: parseFloat(jumlah)
    };

    addProduct(productData);

    document.getElementById("product").reset();
});

// Fungsi untuk memuat dan menampilkan produk
function getAndDisplayProducts() {
    var productList = document.getElementById('produk-l');

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            productList.innerHTML = ''; // Mengosongkan daftar produk sebelum menambahkan yang baru

            data.forEach(function(product) {
                var listItem = document.createElement('li');
                listItem.textContent = 'ID: ' + product._id + ', Nama: ' + product.nama + ', Harga: ' + product.harga + ', Jumlah: ' + product.jumlah;
                productList.appendChild(listItem);
            });
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

// Memanggil fungsi getAndDisplayProducts untuk memuat produk saat halaman dimuat
getAndDisplayProducts();
