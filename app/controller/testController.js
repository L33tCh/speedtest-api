/* Load Test Data Access Object */
const TestDao = require('../dao/testDao');

/* Load Controller Common function */
const ControllerCommon = require('./common/controllerCommon');

/* Load Test entity */
const Test = require('../model/test');

/**
 * Test Controller
 */
class CarController {

    constructor() {
        this.testDao = new TestDao();
        this.common = new ControllerCommon();
    }

    /**
     * Tries to find an entity using its Id / Primary Key
     * @params req, res
     * @return entity
     */
    findById(req, res) {
        let id = req.params.id;

        this.testDao.findById(id)
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    };

    /**
     * Finds all entities.
     * @return all entities
     */
    findAll(res) {
        this.testDao.findAll()
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    };

    /**
     * Counts all the records present in the database
     * @return count
     */
    countAll(res) {

            this.testDao.countAll()
            .then(this.common.findSuccess(res))
            .catch(this.common.serverError(res));
    };

    /**
     * Updates the given entity in the database
     * @params req, res
     * @return true if the entity has been updated, false if not found and not updated
     */
    update(req, res) {
        let test = new Test();
        test.id = req.body.id;
        test.server_id = req.body.server_id;
        test.sponsor = req.body.sponsor;
        test.server_name = req.body.server_name;
        test.timestamp = req.body.timestamp;
        test.distance = req.body.distance;
        test.ping = req.body.ping;
        test.download = req.body.download;
        test.upload = req.body.upload;
        test.share = req.body.share;
        test.ip_address = req.body.ip_address;

        return this.testDao.update(test)
            .then(this.common.editSuccess(res))
            .catch(this.common.serverError(res));
    };

    /**
     * Creates the given entity in the database
     * @params req, res
     * returns database insertion status
     */
    create(req, res) {
        console.log(req.body);

        let test = new Test();
        if (req.body.id) {
            test.id = req.body.id;
        }
        test.server_id = req.body.server_id;
        test.sponsor = req.body.sponsor;
        test.server_name = req.body.server_name;
        test.timestamp = req.body.timestamp;
        test.distance = req.body.distance;
        test.ping = req.body.ping;
        test.download = req.body.download;
        test.upload = req.body.upload;
        test.share = req.body.share;
        test.ip_address = req.body.ip_address;

        if (req.body.id) {
            return this.testDao.createWithId(test)
                .then(this.common.editSuccess(res))
                .catch(this.common.serverError(res));
        }
        else {
            return this.testDao.create(test)
                .then(this.common.editSuccess(res))
                .catch(this.common.serverError(res));
        }

    };

    /**
     * Deletes an entity using its Id / Primary Key
     * @params req, res
     * returns database deletion status
     */
    deleteById(req, res) {
        let id = req.params.id;

        this.testDao.deleteById(id)
            .then(this.common.editSuccess(res))
            .catch(this.common.serverError(res));
    };

    /**
     * Returns true if an entity exists with the given Id / Primary Key
     * @params req, res
     * @return
     */
    exists(req, res) {
        let id = req.params.id;

        this.testDao.exists(id)
            .then(this.common.existsSuccess(res))
            .catch(this.common.findError(res));
    };
}

module.exports = CarController;