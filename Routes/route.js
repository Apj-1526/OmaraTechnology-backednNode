const express = require('express');
const router = express.Router();
const db = require('../config/config');

router.get('/',(req,res)=>{
	const {cursor = 0 , limit = 20 } = req.query;
	const parsedCursor = parseInt(cursor,10);
	const parsedLimit = parseInt(limit,10);
	const query = `SELECT * FROM orders LIMIT ${parsedLimit} OFFSET ${parsedCursor}`
	db.query(query,(err,results)=>{
		if(err){
			return res.status(500).json({err:err.message})
		}
			res.json({data : results})
		
	});
});

module.exports = router;