const express = require('express');
const mysql = require('mysql2/promise');
const router = express.Router();

// MySQL Connection Pool
const pool = mysql.createPool({
  host: process.env.MYSQL_HOST || '127.0.0.1',
  user: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || 'rootpw',
  database: process.env.MYSQL_DATABASE || 'feature2_db',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// GET / - Display home page with all meals
router.get('/', async (req, res) => {
  try {
    const connection = await pool.getConnection();
    const [meals] = await connection.execute('SELECT * FROM meals ORDER BY restaurant_name, meal_name');
    connection.release();
    
    res.render('index', { meals });
  } catch (error) {
    console.error('Error fetching meals:', error);
    res.status(500).render('error', { error: 'Failed to load meals' });
  }
});

module.exports = router;