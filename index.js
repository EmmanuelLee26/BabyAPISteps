const express = require('express');
const myapp = express();
const PORT = 8080;

myapp.use(express.json())

myapp.get('/te_amo', (req, res) => {
    res.status(200).send({
        te_amo: '😘😘😘',
        size: 'large'
    })
});

myapp.post('/te_amo/:id', (req, res) => {
    const{ id } = req.params;
    const { besos } = req.body;

    if (!besos) {
        res.status(418).send({ message: 'Necesitamos besos!'})
    }

    res.send({
        te_amo: `${besos} 😘 y más 😘 para ${id}`, 
    });
});


myapp.listen(
    PORT,
    () => console.log(`it's alive on http://localhost:${PORT}`)   
)