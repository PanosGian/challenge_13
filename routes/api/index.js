//This index.js file within the /api folder of an Express.js project 
//typically serves as the entry point for all API-related routing logic. 
//Its main functionality is to combine all API routes and export them as a single router object, 
//which can then be mounted onto the main application server in the main server file.


const router = require('express').Router();
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const tagRoutes = require('./tag-routes');

router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/tags', tagRoutes);

module.exports = router;
