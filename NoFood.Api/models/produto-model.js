'use strict'

const mongoose = require('mongoose');
const schema = mongoose.Schema;

const produtoModel = new schema({
    titulo: {trim: true, type: String, index: true, required: true},
    preco: { type: Number, required: true},
    descricao: { type: String },
    createdAt: { type: Date, default: Date.now },
    folder: { type: String, required: true },
    arquivo: { type: String, required: true },
    status: { type: Boolean, required: true },
    excluido: { type: Boolean, required: true }
}, { versionKey:false });

produtoModel.pre('save', next => {
    let now = new Date();
    if (!this.dataCriacao){
        this.dataCriacao = now;
    }
    next();
});

module.exports = mongoose.model('Produto', produtoModel);