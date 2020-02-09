const Users = require ('../model/modelUsers');
const bcrypt = require('bcrypt');

module.exports = {
    index: async(req, res) => {
        try {
            const users = await Users.find({});
            return res.status(200).send(users);
        }
        catch(err){
            return res.status(500).send({error: 'Erro na consulta de usuário!'});
        }
    },
    store: async(req, res) => {
        const { username, email, password } = req.body;
        if(!username || !email || !password) return res.status(400).send({ error: 'Dados insuficientes!' });
        try {
            if(await Users.findOne({ email })) return res.status(400).send({error: 'Usuário já resgistado!'});

            const users = await Users.create(req.body);
            users.password = undefined;
            return res.status(201).send(users);
        }
        catch(err){
            if(err) return res.status(500).send({error: 'Erro ao buscar usuário!' });
        }
    },
    show: async(req, res) => {
        const { email, password } = req.body;
        if(!email || !password) return res.status(400).send({ error: 'Dados insuficientes!'});
        try{
            const users = await  Users.findOne({email}).select('+password');
            if(!users) return res.status(400).send({ error: 'Usuário não registrado!'});
            const pass_ok = await bcrypt.compare(password, users.password);

            if(!pass_ok) return res.status(401).send({ error: 'Erro ao autenticar usuário!'});

            users.password = undefined;
            return res.status(200).send(users);
        }
        catch(err){
            return res.status(500).send({ error: 'Usuário não registrado!'});
        }
    }
}