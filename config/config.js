if (process.env.NODE_ENV !== 'production')require('dotenv').config()
 
 
const config = {
    databaseURL: process.env.DATABASE
}

//För att kunna lägga till en betalningstjänst så behöver vi ett tredjepartsystem.
//Vi kommer använda Stripe API, finns även klarna och paypal. Vad behöver vi då? En API nyckel 
module.exports = config