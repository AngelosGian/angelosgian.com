const express = require('express');
const app = express();
const path = require('path');
const env = require('dotenv')
env.config({path: './config/.env'})



const port = process.env.PORT || 3000;

app.listen(process.env.PORT, () => console.log(`It is alive on port ${port}`));