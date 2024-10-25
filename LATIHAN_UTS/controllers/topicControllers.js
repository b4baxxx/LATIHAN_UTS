const produk = require('../models/produk');
const transaksi = require('...models/transaksi');
const transaksi = require('../models/transaksi');

exports.index = async (req, res) => {
    try {
        const produk = await produk.find();
        res.status(200).json({
            code: 200,
            messange: "Success",
            data: produk
        });

    } catch (error) {
        res.status(400).json({
            code: 400,
            messange: "Failed"
        });
    }
};

exports.insert = async (req, res) => {
    try {
        const transaksi = new transaksi(req.body);
        await transaksi.save();
        res.status(200).json({
            code: 200,
            messange: "Success"
        });
    } catch (error) {
        res.status(400).json({
            code: 400,
            messange: "Failed"
        });
    }
};