const reservas = require('../connect/connect').con;

exports.createReserva = (req, res) => {
    const { cliente_id, quarto_id, data_check_in, data_check_out, status } = req.body;
    const sql = 'INSERT INTO Reservas (cliente_id, quarto_id, data_check_in, data_check_out, status) VALUES (?, ?, ?, ?, ?)';
    reservas.query(sql, [cliente_id, quarto_id, data_check_in, data_check_out, status], (err, result) => {
        if (err) return res.status(500).send(err);
        res.status(201).json({ id: result.insertId, cliente_id, quarto_id });
    });
};

exports.getReservas = (req, res) => {
    const sql = 'SELECT * FROM Reservas';
    reservas.query(sql, (err, results) => {
        if (err) return res.status(500).send(err);
        res.status(200).json(results);
    });
};

exports.updateReserva = (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    const sql = 'UPDATE Reservas SET status = ? WHERE reserva_id = ?';
    reservas.query(sql, [status, id], (err, result) => {
        if (err) return res.status(500).send(err);
        res.status(200).json({ message: 'Reserva atualizada com sucesso!' });
    });
};

exports.deletReserva = (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM Reservas WHERE reserva_id = ?';
    this.getReservas.query(sql, [id], (err, result) => {
        if (err) return res.status(500).send(err);
        res.status(204).send();
    });
};

module.exports = {
    create,
    read,
    update,
    deletar
}