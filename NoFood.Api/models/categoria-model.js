'use strict'

const mongoose = require('mongoose');
const schema = mongoose.Schema;

const categoriaModel = new schema({
    titulo: { trim: true, index:true, required: true, type: String },
    descricao: { type: String },
    createdAt: { type: Date, default: Date.now },
    folder: { type: String, required: true },
    arquivo: { type: String, required: true },
    status: { type: Boolean, required: true },
    excluido: { type: Boolean, required: true }
}, { versionKey: false });

categoriaModel.pre('save', next => {
    let now = new Date();
    if (!this.dataCriacao){
        this.dataCriacao = now;
    }
    next();
});

module.exports = mongoose.model('Categoria', categoriaModel);