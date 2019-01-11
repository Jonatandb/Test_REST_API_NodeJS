const pool = require('../data/config');

const router = app => {
    
    app.get('/', (request, response) => {
        console.log(`URL: ${request.url}`);
        response.send({
            message: 'Node.js and Express REST API'});
    });

    app.get('/users', (req, resp) => {
        console.log(`URL: ${req.url}`);
        pool.query('select * from users', (err, result) => {
            if(err) throw err;
            resp.send(result);
        })
    });

    app.get('/users/:id', (request, response) => {
        console.log(`URL: ${request.url}`);
        const id = request.params.id;
        pool.query('SELECT * FROM users WHERE id = ?', id, (error, result) => {
            if (error) throw error;
            response.send(result);
        });
    });

    app.post('/users', (request, response) => {
        console.log(`POST URL: ${request.url}`);
        pool.query('INSERT INTO users SET ?', request.body, (error, result) => {
            if (error) throw error;
            response.status(201).send(`User added with ID: ${result.insertId}`);
        });
    });

    app.put('/users/:id', (request, response) => {
        console.log(`PUT URL: ${request.url}`);
        const id = request.params.id;
        pool.query('UPDATE users SET ? WHERE id = ?', [request.body, id], (error, result) => {
            if (error) throw error;
            response.send('User updated successfully.');
        });
    });

    app.delete('/users/:id', (request, response) => {
        console.log(`DELETE URL: ${request.url}`);
        const id = request.params.id;
        pool.query('DELETE FROM users WHERE id = ?', id, (error, result) => {
            if (error) throw error;
            response.send('User deleted.');
        });
    });
}

module.exports = router;
