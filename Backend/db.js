const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'CodeLife_db',
    password: 'root',
    port: 5432, // or your PostgreSQL port number
});

const getUsers = async () => {
    const client = await pool.connect();
    try {
        const result = await client.query('SELECT student_id, first_name FROM student');
        console.log(result);    
        return result.rows;
    } catch (error) {
        console.error(error);
    } finally {
        client.release();
    }
};
module.exports = { getUsers };

