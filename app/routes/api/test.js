/* Load Modules */
const express = require('express');
const router = express.Router();

/* Load controller */
const TestController = require('../../controller/testController');
const testController = new TestController();

/**
 *  CORS
 */

router.all('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
 });

/**
 * Car Entity routes
 */
router.get('/count', function (req, res) {
    testController.countAll(res);
});

router.get('/exists/:id', function (req, res) {
    testController.exists(req, res);
});

router.get('/:id', function (req, res) {
    testController.findById(req, res);
});

router.get('/', function (req, res) {
    testController.findAll(res);
});

router.put('/:id', function (req, res) {
    testController.update(req, res);
});

router.post('/create', function (req, res) {
    testController.create(req, res);
});

router.delete('/:id', function (req, res) {
    testController.deleteById(req, res);
});

module.exports = router;
