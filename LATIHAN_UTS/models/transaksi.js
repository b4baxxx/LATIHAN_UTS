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
