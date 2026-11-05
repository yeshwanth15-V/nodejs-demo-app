const { test, before, after } = require('node:test');
const assert = require('node:assert/strict');
const app = require('../app');

let server;
let baseUrl;

before(async () => {
    server = app.listen(0);

    await new Promise((resolve) => {
        server.once('listening', resolve);
    });

    const port = server.address().port;
    baseUrl = `http://localhost:${port}`;
});

after(async () => {
    await new Promise((resolve, reject) => {
        server.close((error) => {
            if (error) reject(error);
            else resolve();
        });
    });
});

test('Health API should return success', async () => {
    const response = await fetch(`${baseUrl}/api/health`);

    assert.equal(response.status, 200);

    const data = await response.json();

    assert.equal(data.status, 'success');
    assert.equal(data.service, 'DevOps Demo App');
});