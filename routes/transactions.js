const express = require('express');
const router = express.Router();
const {
  getTransactions,
  addTransaction,
  deleteTransaction,
} = require('../controllers/transactionsController');

// router.get('/', (req, res) => res.send('Hello'));
router.route('/').get(getTransactions).post(addTransaction);

router.route('/:id').delete(deleteTransaction);

module.exports = router;

// GET http://localhost:5000/api/v1/transactions HTTP/1.1

// ###

// POST http://localhost:5000/api/v1/transactions HTTP/1.1

// ###

// DELETE http://localhost:5000/api/v1/transactions/5f74d9ad7fe0e32cec159d38 HTTP/1.1
// // content-type: application/json

// // {
// //     "name": "sample",
// //     "time": "Wed, 21 Oct 2015 18:27:50 GMT"
// // }

// ###

// POST http://localhost:5000/api/v1/transactions HTTP/1.1
// content-type: application/json

// {
//     "text": "sample",
//     "amount": 123
// }
