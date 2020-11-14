const mongoose = require ('mongoose');

const livrosSchema = new mongoose.Schema({
    id: { type : Number },
    nomeDoLivro: { type: String },
    editora: { type: String },
    lancamento: { type: String },
    autoria: { type: String },
    genero: { type: String },
    lido: { type: Boolean}
},{
    versionKey: false
});

const livros = new mongoose.model("livros", livrosSchema);

module.exports = livros;