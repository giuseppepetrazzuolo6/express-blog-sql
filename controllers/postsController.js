const connection = require('../database/db')

const index = (req, res) => {

    const sql = 'SELECT * FROM posts'

    connection.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: true, message: err.message })
        res.json(results)

    })

}

const destroy = (req, res) => {

    const id = Number(req.params.id)

    const sql = 'DELETE FROM posts WHERE id = ?'
    console.log(sql, id)

    connection.query(sql, [id], (err, results) => {
        if (err) return res.status(500).json({ error: true, message: err.message })
        console.log(results);
        return res.sendStatus(204)
    })
}

module.exports = { index, destroy }