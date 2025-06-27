const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');
const { protect, adminOnly } = require('../middleware/authMiddleware');
const { register } = require('../controllers/authController');
const { getUsers } = require('../controllers/userController');

// All routes require authentication:
router.use(protect);

// Any authenticated user can view users
router.get('/', getUsers);

// Only admin users can create, update, or delete users
router.post('/', adminOnly, register);  // Use register() to hash password
router.put('/:id', adminOnly, userController.updateUser);
router.delete('/:id', adminOnly, userController.deleteUser);

module.exports = router;
