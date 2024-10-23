const telefone = require('../connect/connect').con;

const create = (req, res) => {
    let telefone_id = req.body.quarto_id;
    let cliente_id = req.body.numero;
    let  tipo_enum = req.body.andar;
    let numero = req.body.cliente_id ;


    let query = 'INSERT INTO clientes (clientes_id, numero, tipo_enum, telefone_id) VALUES'
    query += `('${cliente_id}', '${numero}', '${tipo_enum}', '${telefone_id}');`;
    con.query (query, (err, result) => {
        if (err) {
            res.status(500).json(err)
        }else{
            res.status(201).json(result)
        }
    })
}

const update = (req, res) => {
    const {clientes_id, numero, tipo_enum, telefone_id} = req.body;
    const query ='UPDATE telefone SET nome =?, cpf =?, email =?, endereco =?, data_nascimento =?, data_cadastro =? WHERE cliente_id =?';
    con.query(query, [clientes_id, numero, tipo_enum, telefone_id], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message});
        } else {
            res.json({ message: 'Cliente autualizado com sucesso', result});
        }
    });
};

const read = (req, res) => {
    con.query('SELECT * FROM telefone', (err, result) => {
        if(err){
            res.status(500).json(err);
        } else {
            res.json(result)
        }
    })
}


const deletar = (req, res) => {
    let id = req.params.id;
    con.query(`DELETE FROM telefone WHERE id = '${id}'`, (err, result) => {
        if(err){
            res.status(400).json(err).end();
        } else {
            res.status(201).json(result)
        }
    })
}


module.exports = {
    create,
    read,
    update,
    deletar
};
