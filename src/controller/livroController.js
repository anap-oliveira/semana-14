
const livros = require("../model/livros.js");

const getAll = (req, res) => {
    livros.find((err, livros) => {
        if (err) {
            res.status(500).send({message: err.message});
        } else {
            res.status(200).send(livros);
        }
    })
}

const getById = (req, res) => {
    const id = req.params.id;
    livros.find({ id }, (err, livros) => {
        if (err) {
            res.status(424).send({ message: err.message});
        } else if (curso.length > 0) {
            res.status(200).send(livros);
        } else {
            res.status(404).send({ message: "O livro não foi encontrado.",
            });
        };
    });
};

const postLivros = (req, res) => {
    livros.countDocuments((err, count) => {
        if (err) {
            res.status(424).send({ message: err.message,});
        } else{
            let livro = new livros(req.body);
            livro.id = count + 1;
            livro.save ((err) => {
                if (err) {
                    res.status(424).send({ message: err.message,});
                } else {
                    res.status(200).send({
                           // status: true,
                            menssagem: "Livro adicionado com sucesso!",
                        });
                    };
                });
            };
        });
    };

module.exports = {
    getAll,
    getById,
    postLivros
};