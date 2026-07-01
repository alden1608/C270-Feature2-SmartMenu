const express = require('express');
const { dedupeMeals } = require('../utils/mealUtils');
const pool = require('../db/pool');
const router = express.Router();

// GET / - Display home page with all meals
router.get('/', async (req, res) => {
  let connection;
  try {
    connection = await pool.getConnection();
    const [meals] = await connection.execute('SELECT * FROM meals ORDER BY restaurant_name, meal_name');
    const uniqueMeals = dedupeMeals(meals);
    res.render('index', { meals: uniqueMeals });
  } catch (error) {
    console.error('Error fetching meals:', error);
    res.status(500).render('error', { error: 'Failed to load meals' });
  } finally {
    if (connection) {
      connection.release();
    }
  }
});

module.exports = router;