const Categories = require('../model/modelCategories');

module.exports = {
    index: async(req, res) => {
        try {
            const categories = await Categories.find({});
            return res.status(200).send(categories);
        }
        catch(err){
            return res.status(500).send({error: 'Erro na consulta de categoria!'});
        }
    },
    store: async(req, res) => {
        const { categoryname } = req.body;
        if(!categoryname) return res.status(400).send({ error: 'Dados insuficientes!' });
        try {
            if(await Categories.findOne({ categoryname })) return res.status(400).send({error: 'Categoria já resgistada!'});

            const categories = await Categories.create(req.body);
            return res.status(201).send(categories);
        }
        catch(err){
            if(err) return res.status(500).send({error: 'Erro ao buscar categoria!' });
        }
    }
}