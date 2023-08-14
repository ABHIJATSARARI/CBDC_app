const jsonServer = require('json-server');
const server = jsonServer.create();
const middlewares = jsonServer.defaults();

const PORT = 3001;

server.use(middlewares);

// Use the SQLite database for the mock server
const db = require('./database.js');
const { dbPath } = db;

const router = jsonServer.router(dbPath);

server.use(router);

server.listen(PORT, () => {
    console.log(`Mock API server is running on port ${PORT}`);
});
