const Institutes = require('../model/modelInstitutes');

module.exports = {
    index: async(req, res) => {
        try {
            const institutes = await Institutes.find({});
            return res.status(200).send(institutes);
        }
        catch(err){
            return res.status(500).send({error: 'Erro na consulta de estabelecimentos!'});
        }
    },
    store: async(req, res) => {
        const { institutename, address, number, cep, cnpj, account, image } = req.body;
        if(!institutename || !address || !number || !cep || !cnpj) return res.status(400).send({ error: 'Dados insuficientes!' });
        try {
            if(await Institutes.findOne({cnpj})) return res.status(400).send({error: 'Estabelecimento já resgistado!'});

            const institutes = await Institutes.create(req.body);
            return res.status(201).send(institutes);
        }
        catch(err){
            if(err) return res.status(500).send({error: 'Erro ao buscar estabelecimento!' });
        }
    }
}