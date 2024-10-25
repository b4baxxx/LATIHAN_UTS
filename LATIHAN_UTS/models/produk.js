const mongoose = require('mongoose');

const produkSchema = new mongoose.Schema({
    nama: { type: String, require: true},
    harga: {type: Number, require: true}
});

module.exports =  mongoose.model('Produk', produkSchema);
