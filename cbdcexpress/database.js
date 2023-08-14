const SQLite = require('react-native-sqlite-storage');

const db = SQLite.openDatabase({ name: 'cbdc.db', location: 'default' });

const createTables = () => {
    db.transaction((tx) => {
        tx.executeSql(
            'CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, name TEXT, walletBalance INTEGER)'
        );
        tx.executeSql(
            'CREATE TABLE IF NOT EXISTS transactions (id INTEGER PRIMARY KEY, userId INTEGER, type TEXT, amount INTEGER, FOREIGN KEY (userId) REFERENCES users(id))'
        );
    });
};

module.exports = { db, createTables };
