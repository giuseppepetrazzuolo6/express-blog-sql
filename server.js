const express = require('express')
const app = express()
const PORT = 3000
const postsRouter = require('./routers/postsRouter.js');

app.get('/', (req, res) => {
    res.send('<h1>Server del mio blog</h1>')
})

app.use('/api/posts', postsRouter)

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})