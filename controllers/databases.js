import mysql from 'mysql';
import cfg_database from '../configs/databases';

const databaseConfigs = {
  host: cfg_database.host,
  port: cfg_database.port,
  user: cfg_database.user,
  password: cfg_database.password,
  database: cfg_database.database,
  connectionLimit: 512,
  multipleStatements: true,
};

const dbPool = mysql.createPool(databaseConfigs);
const dbctrl = (callback) => {
  dbPool.getConnection((err, conn) => {
    if (!err) {
      callback(conn);
    } else {
      console.log(new Error(err));
    }
  });
};

export default dbctrl;
