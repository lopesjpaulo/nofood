'use strict'

const mongoose = require('mongoose');

class baseRepository{

    constructor(model){
        this._model = mongoose.model(model);
    }

    async create(data){
        try {
            let modelo = new this._model(data);
            let resultado = await modelo.save();
            return resultado;
        } catch (error) {
            throw(new Error('Erro ao inserir, verifique os parâmetros'));
        }
        
    }

    async update(id, data){
        await this._model.findByIdAndUpdate(id, {$set:data});
        let resultado = await this._model.findById(id);
        return resultado;
    }

    async getAll(){
        return await this._model.find();
    }

    async getById(id){
        return await this._model.findById(id);
    }

    async delete(id){
        return await this._model.findByIdAndRemove(id);
    }
}

module.exports = baseRepository;