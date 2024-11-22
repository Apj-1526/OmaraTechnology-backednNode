const express = require('express')
const cors = require('cors')
const orderRoute = require('./Routes/route')

const app = express();
const PORT = 5000
app.use(cors());
app.use(express.json());

app.use('/api/orders',orderRoute);


app.listen(PORT,()=>{
	console.log("Server Connected on port "+PORT);
})