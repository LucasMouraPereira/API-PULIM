const Clients = require ('../model/modelClients');
const bcrypt = require('bcrypt');

module.exports = {
    index: async(req, res) => {
        try {
            const clients = await Clients.find({});
            return res.status(200).send(clients);
        }
        catch(err){
            return res.status(500).send({error: 'Erro na consulta de Clientes!'});
        }
    },
    store: async(req, res) => {
        const { username, email, password } = req.body;
        if(!username || !email || !password) return res.status(400).send({ error: 'Dados insuficientes!' });
        try {
            if(await Clients.findOne({ email })) return res.status(400).send({error: 'Cliente já resgistado!'});

            const clients = await Clients.create(req.body);
            clients.password = undefined;
            return res.status(201).send(clients);
        }
        catch(err){
            if(err) return res.status(500).send({error: 'Erro ao buscar cliente!' });
        }
    },
    show: async(req, res) => {
        const { email, password } = req.body;
        if(!email || !password) return res.status(400).send({ error: 'Dados insuficientes!'});
        try{
            const clients = await  Clients.findOne({email}).select('+password');
            if(!clients) return res.status(400).send({ error: 'Cliente não registrado!'});
            const pass_ok = await bcrypt.compare(password, clients.password);

            if(!pass_ok) return res.status(401).send({ error: 'Erro ao autenticar cliente!'});

            clients.password = undefined;
            return res.status(200).send(clients);
        }
        catch(err){
            return res.status(500).send({ error: 'Cliente não registrado!'});
        }
    }
}