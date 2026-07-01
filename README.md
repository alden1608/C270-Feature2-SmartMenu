# C270 Feature Development - Alden (alden1608)

This branch contains 2 features developed for the C270 DevOps group project (FoodGorilla).

---

## Feature 2: Smart Metric-Filtered Menu

**User Story:** As a fitness tracker user, I want to filter restaurant menus using specific nutritional sliders so that I can easily find meals that fit my remaining daily macros.

### Tech Stack
- Node.js, Express.js, EJS, Bootstrap 5, MySQL

### Setup
```bash
cd feature2-smart-menu
npm install
mysql -u root -p < db/menu.sql
node app.js
```
Server runs on `http://localhost:3000`

---

## Feature 9: Order and Checkout System

**User Story:** As a user, I want to place an order and checkout my selected meals so that my purchases are recorded and my daily macro intake is updated.

### Tech Stack
- Node.js, Express.js, EJS, Bootstrap 5, MySQL, bcrypt, express-session

### Setup
```bash
cd feature9-auth-checkout
npm install
mysql -u root -p < db/schema.sql
node app.js
```
Server runs on `http://localhost:3000`

---

## Project Structure
C270-Feature2-SmartMenu/
├── feature2-smart-menu/    # Feature 2: Smart Metric-Filtered Menu
└── feature9-auth-checkout/ # Feature 9: Order and Checkout System

## Author
alden1608
