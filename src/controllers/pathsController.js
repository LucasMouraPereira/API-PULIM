const Paths = require('../model/modelPaths');

module.exports = {
    index: async(req, res) => {
        try {
            const paths = await Paths.find({});
            return res.status(200).send(paths);
        }
        catch(err){
            return res.status(500).send({error: 'Erro na consulta de percursos!'});
        }
    },
    store: async(req, res) => {
        const { originname, destinyname } = req.body;
        if(!originname || !destinyname) return res.status(400).send({ error: 'Dados insuficientes!' });
        try {
            if(await Paths.findOne({originname} || {destinyname})) return res.status(400).send({error: 'origem ou destino já resgistado!'});

            const paths = await Paths.create(req.body);
            return res.status(201).send(paths);
        }
        catch(err){
            if(err) return res.status(500).send({error: 'Erro ao criar origem ou destino!' });
        }
    }
}