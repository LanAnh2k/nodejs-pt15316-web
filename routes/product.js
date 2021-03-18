import express from 'express';
const router = express.Router();

//list products
router.get('/products', (req, res) => {
    res.json({
        message: "successfully"
    })
    //console.log('successfully');
});

//product detail
router.get('/product/:id', (req, res) => {
    res.json({
        id: req.params.id,
        name: 'Product 1'
    })
});

//them sp
router.post('/products', (req, res) => {
    console.log(req.body);
})

module.exports = router;