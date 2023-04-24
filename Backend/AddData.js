const mongoose = require("mongoose");
const data = require("./sample_data.json")

const sample = async () => {

try{
        
        const MONGO_URL = "mongodb+srv://kubaholinne:Ewv6zah7NLz57iYu@cluster0.wtqoxlh.mongodb.net/?retryWrites=true&w=majority"
        const connected = await mongoose.connect(MONGO_URL)
    if(connected){
        console.log("database connected");
    }
    
    const userSchema = new mongoose.Schema({
        id: String,
        first_name: String,
        last_name: String,
        email: String,
        gender: String,
        quote: String,
        city: String,
        car: String,
        income: String,
        phone_price: String,
      });
      
      const User = mongoose.model('User', userSchema);

      const result = await User.insertMany(data);
      
      console.log(result.length)
      await mongoose.connection.close();
    }catch (err){
        console.log(err);
    }
}

sample()