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

    connection.query(sql, [id], (err, results) => {
        if (err) return res.status(500).json({ error: true, message: err.message })
        console.log(results);
        return res.sendStatus(204)
    })
}

const show = (req, res) => {

    const id = Number(req.params.id)

    const sql = 'SELECT * FROM posts WHERE id = ?'
    connection.query(sql, [id], (err, response) => {
        if (err) return res.status(500).json({ error: true, message: err.message })
        if (response.length == 0) return res.status(404).json({ error: true, message: err.message })

        res.json(response[0])
    })
}

module.exports = { index, destroy, show }