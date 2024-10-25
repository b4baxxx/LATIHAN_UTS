# LATIHAN_UTS


```javascript
// models/produk.js
const mongoose = require('mongoose');

const produkSchema = new mongoose.Schema({
    nama: { type: String, required: true },
    harga: { type: Number, required: true }
});

module.exports = mongoose.model('Produk', produkSchema);
```

#### Schema Transaksi

Buat file `transaksi.js` di dalam folder `models`:

```javascript
// models/transaksi.js
const mongoose = require('mongoose');

const transaksiSchema = new mongoose.Schema({
    produk_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Produk', required: true },
    pengguna_id: { type: mongoose.Schema.Types.ObjectId, required: true },
    jumlah: { type: Number, required: true },
    total_harga: { type: Number, required: true },
    tanggal_transaksi: { type: Date, default: Date.now },
    ulasan: { type: String }
});

module.exports = mongoose.model('Transaksi', transaksiSchema);
```

### Langkah 4: Membuat Controller

Buat folder `controllers` jika belum ada, lalu buat file `topicController.js`:

```javascript
// controllers/topicController.js
const Produk = require('../models/produk');
const Transaksi = require('../models/transaksi');

exports.index = async (req, res) => {
    try {
        const produk = await Produk.find();
        res.status(200).json({
            code: 200,
            message: "Success",
            data: produk
        });
    } catch (error) {
        res.status(400).json({
            code: 400,
            message: "Failed"
        });
    }
};

exports.insert = async (req, res) => {
    try {
        const transaksi = new Transaksi(req.body);
        await transaksi.save();
        res.status(200).json({
            code: 200,
            message: "Success"
        });
    } catch (error) {
        res.status(400).json({
            code: 400,
            message: "Failed"
        });
    }
};
```

### Langkah 5: Mengatur Router

Buat file `topicRoutes.js` di dalam folder `routes`:

```javascript
// routes/topicRoutes.js
const express = require('express');
const router = express.Router();
const topicController = require('../controllers/topicController');

router.get('/', topicController.index);
router.post('/insert', topicController.insert);

module.exports = router;
```

### Langkah 6: Menghubungkan Router di `app.js`

Import dan gunakan router di `app.js`:

```javascript
// app.js
const express = require('express');
const app = express();
const topicRoutes = require('./routes/topicRoutes');

app.use(express.json()); // untuk parse JSON request body

app.use('/topiccollection', topicRoutes);

// ... kode lainnya

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
```

### Langkah 7: Menjalankan Server dan Menguji

Sekarang Anda bisa menjalankan server dengan:

```bash
npm start
```

### Menguji API

1. **GET All Produk:**

   Akses `http://localhost:3000/topiccollection` menggunakan browser atau Postman. Anda harus mendapatkan response sukses dengan daftar produk.

2. **Insert Transaksi:**

   Untuk menginsert data transaksi, gunakan Postman untuk mengirim request POST ke `http://localhost:3000/topiccollection/insert` dengan body JSON seperti:

   ```json
   {
       "produk_id": "isi dengan ObjectId produk",
       "pengguna_id": "isi dengan ObjectId pengguna",
       "jumlah": 2,
       "total_harga": 20000,
       "ulasan": "Produk bagus"
   }
   ```

   Jika berhasil, Anda akan mendapatkan response sukses.

### Kesimpulan

Anda sekarang telah berhasil membuat database MongoDB, schema, controller, dan router untuk menangani permintaan terkait koleksi `produk` dan `transaksi`. Jika ada yang ingin ditanyakan atau butuh penjelasan lebih lanjut, silakan!