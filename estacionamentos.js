const estacionamento = require('../connect/connect').con;

exports.createestacionamento = (req, res) => {
    const { cliente_id, estacionamento_id, data_check_in, data_check_out, status } = req.body;
    const sql = 'INSERT INTO estacionamento (cliente_id, estacionamento_id, data_check_in, data_check_out, status) VALUES (?, ?, ?, ?, ?)';
    estacionamento.query(sql, [cliente_id, estacionamento_id, data_check_in, data_check_out, status], (err, result) => {
        if (err) return res.status(500).send(err);
        res.status(201).json({ id: result.insertId, cliente_id, estacionamento_id });
    });
};

   module.exports = {
    create
   };