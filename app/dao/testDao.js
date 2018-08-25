/* Load Test entity */
const Test = require('../model/test');

/* Load DAO Common functions */
const daoCommon = require('./commons/daoCommon');

/**
 * Test Data Access Object
 */
class TestDao {

    constructor() {
        this.common = new daoCommon();
    }

    /**
     * Tries to find an entity using its Id / Primary Key
     * @params id
     * @return entity
     */
    findById(id) {
        let sqlRequest = "SELECT id, server_id, sponsor, server_name, timestamp, distance, ping, download, upload, share, ip_address, api_timestamp FROM tests WHERE id=$id";
        let sqlParams = {$id: id};
        return this.common.findOne(sqlRequest, sqlParams).then(row =>
            new Test(row.id, row.server_id, row.sponsor, row.server_name, row.timestamp, row.distance, row.ping, row.download, row.upload, row.share, row.ip_address, row.api_timestamp));
    };



    /**
     * Finds all entities.
     * @return all entities
     */
    findAll() {
        let sqlRequest = "SELECT * FROM tests";
        return this.common.findAll(sqlRequest).then(rows => {
            let tests = [];
            for (const row of rows) {
                tests.push(row);
            }
            return tests;
        });
    };

    /**
     * Counts all the records present in the database
     * @return count
     */
    countAll() {
        let sqlRequest = "SELECT COUNT(*) AS count FROM tests";
        return this.common.findOne(sqlRequest);
    };

    /**
     * Updates the given entity in the database
     * @params Car
     * @return true if the entity has been updated, false if not found and not updated
     */
    update(test) {
        let sqlRequest = "UPDATE tests SET " +
            "server_id = $server_id, " +
            "sponsor = $sponsor, " +
            "server_name = $server_name, " +
            "timestamp = $timestamp, " +
            "distance = $distance, " +
            "ping = $ping, " +
            "download = $download, " +
            "upload = $upload, " +
            "share = $share, " +
            "ip_address = $ip_address, " +
            "api_timestamp = $api_timestamp, " +
            "WHERE id=$id";

        let sqlParams = {
            $id: test.id,
            $server_id: test.server_id,
            $sponsor: test.sponsor,
            $server_name: test.server_name,
            $timestamp: test.timestamp,
            $distance: test.distance,
            $ping: test.ping,
            $download: test.download,
            $upload: test.upload,
            $share: test.share,
            $ip_address: test.ip_address,
            $api_timestamp: test.api_timestamp
        };
        return this.common.run(sqlRequest, sqlParams);
    };

    /**
     * Creates the given entity in the database
     * @params Car
     * returns database insertion status
     */
    create(test) {
      let sqlRequest = "INSERT into tests (server_id, sponsor, server_name, timestamp, distance, ping, download, upload, share, ip_address, api_timestamp) " +
          "VALUES ($server_id, $sponsor, $server_name, $timestamp, $distance, $ping, $download, $upload, $share, $ip_address, $api_timestamp)";
        let sqlParams = {
            $server_id: test.server_id,
            $sponsor: test.sponsor,
            $server_name: test.server_name,
            $timestamp: test.timestamp,
            $distance: test.distance,
            $ping: test.ping,
            $download: test.download,
            $upload: test.upload,
            $share: test.share,
            $ip_address: test.ip_address,
            $api_timestamp: test.api_timestamp
        };
        return this.common.run(sqlRequest, sqlParams);
    };

    /**
     * Creates the given entity with a provided id in the database
     * @params Car
     * returns database insertion status
     */
    createWithId(test) {
      let sqlRequest = "INSERT into tests (id, server_id, sponsor, server_name, timestamp, distance, ping, download, upload, share, ip_address, api_timestamp) " +
          "VALUES ($id, $server_id, $sponsor, $server_name, $timestamp, $distance, $ping, $download, $upload, $share, $ip_address, $api_timestamp)";
      let sqlParams = {
          $id: test.id,
          $server_id: test.server_id,
          $sponsor: test.sponsor,
          $server_name: test.server_name,
          $timestamp: test.timestamp,
          $distance: test.distance,
          $ping: test.ping,
          $download: test.download,
          $upload: test.upload,
          $share: test.share,
          $ip_address: test.ip_address,
          $api_timestamp: test.api_timestamp
        };
        return this.common.run(sqlRequest, sqlParams);
    };

    /**
     * Deletes an entity using its Id / Primary Key
     * @params id
     * returns database deletion status
     */
    deleteById(id) {
        let sqlRequest = "DELETE FROM tests WHERE id=$id";
        let sqlParams = {$id: id};
        return this.common.run(sqlRequest, sqlParams);
    };

    /**
     * Returns true if an entity exists with the given Id / Primary Key
     * @params id
     * returns database entry existence status (true/false)
     */
    exists(id) {
        let sqlRequest = "SELECT (count(*) > 0) as found FROM tests WHERE id=$id";
        let sqlParams = {$id: id};
        return this.common.run(sqlRequest, sqlParams);
    };
}

module.exports = TestDao;