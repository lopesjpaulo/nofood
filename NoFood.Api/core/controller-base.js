exports.post = async (repository, validationContract, req, res) => {

    try {

        let data = req.body;

        if(!validationContract.isValid()){
            res.status(400).send({
                message: 'Existem dados inválidos',
                validation: validationContract.error()
            }).end();
            return;
        }

        let resultado = await repository.create(data);
        res.status(200).send(resultado);
        
    } catch (err) {
        console.log("Post com error", err);
        res.status(500).send({ message: "Erro no processamento", error: err});
    }
};

exports.put = async (repository, validationContract, req, res) => {

    try {

        let data = req.body;
        let id = req.params.id;

        if(!validationContract.isValid()){
            res.status(400).send({
                message: 'Existem dados inválidos',
                validation: validationContract.error()
            }).end();
            return;
        }

        let resultado = await repository.update(id, data);
        res.status(200).send(resultado);
        
    } catch (err) {
        console.log("Post com error", err);
        res.status(500).send({ message: "Erro no processamento", error: err});
    }
};