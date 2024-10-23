const quartos = require('../connect/connect').con;

const create = (req, res) => {
    let quarto_id= req.body.quarto_id;
    let numero = req.body.numero;
    let  andar = req.body.andar;
    let tipo_enum = req.body.tipo_enum;
    let valor_diaria  = req.body.valor_diaria ;
    let statusQuarto  = req.body.statusQuarto ;
    let cliente_id  = req.body.cliente_id ;


    let query = 'INSERT INTO clientes (clientes_id, numero, andar, tipo_enum, valor_diaria, statusQuarto, quarto_id) VALUES'
    query += `('${cliente_id}', '${quarto_id}', '${numero}', '${andar}', '${tipo_enum}', '${valor_diaria}', '${statusQuarto}');`;
    con.query (query, (err, result) => {
        if (err) {
            res.status(500).json(err)
        }else{
            res.status(201).json(result)
        }
    })
}

const update = (req, res) => {
    const {clientes_id, numero, andar, tipo_enum, valor_diaria, statusQuarto, quarto_id} = req.body;
    const query ='UPDATE quartos SET cliente_id =?, quarto_id =?, numero =?, andar =?, tipo_enum =?, valor_diaria =?, statusQuarto =?, WHERE cliente_id =?';
    con.query(query, [clientes_id, numero, andar, tipo_enum, valor_diaria, statusQuarto, quarto_id], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message});
        } else {
            res.json({ message: 'Cliente autualizado com sucesso', result});
        }
    });
};

const read = (req, res) => {
    con.query('SELECT * FROM quartos', (err, result) => {
        if(err){
            res.status(500).json(err);
        } else {
            res.json(result)
        }
    })
}


const deletar = (req, res) => {
    let id = req.params.id;
    con.query(`DELETE FROM quartos WHERE id = '${id}'`, (err, result) => {
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
