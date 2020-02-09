const Visits = require('../model/modelVisits');

module.exports = {
    index: async(req, res) => {
        try {
            const visits = await Visits.find({});
            return res.status(200).send(visits);
        }
        catch(err){
            return res.status(500).send({error: 'Erro na consulta de comentario de visitantes!'});
        }
    },
    store: async(req, res) => {
        const { comment, Date, Raiting, price } = req.body;
        if(!Raiting) return res.status(400).send({ error: 'Dados insuficientes!' });
        try {
            if(await Visits.findOne({Raiting})) return res.status(400).send({error: 'informação já resgistado!'});

            const visits = await Visits.create(req.body);
            return res.status(201).send(visits);
        }
        catch(err){
            if(err) return res.status(500).send({error: 'Erro ao criar informação de visita!' });
        }
    }
}