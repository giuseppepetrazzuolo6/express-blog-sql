const connection = require('../database/db')

const index = (req, res) => {

    const sql = 'SELECT * FROM posts'

    connection.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: true, message: err.message })
        res.json(results)

    })

}

module.exports = { index }