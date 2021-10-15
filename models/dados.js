const mongoose = require("mongoose");

const dadoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    sobrenome: {
        type: String,
        required: true
    },
    cpf: {
        type: Number,
        required: true
    },
    endereco: {
        type: String,
        required: true
    },
    plano: {
        type: String,
        required: true
    },
    createAt: {
        type: Date,
        default: Date.now
    }

    
})

module.exports = mongoose.model("Dado", dadoSchema);