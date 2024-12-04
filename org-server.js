const adminModule = require('./admin');
const transportadorModule = require('./transportador');

adminModule(io);
transportadorModule(io);
