// const databaseService = require('./databaseService');
// const ordersService = require('./ordersService');

const getAll = async function () {
    await integrateWithOrders();
    const sql = `SELECT * FROM companies
                 WHERE 
                    active = 1`;
    // return databaseService.query(sql, []);
};