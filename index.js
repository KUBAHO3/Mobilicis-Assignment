import express from 'express';
const app = express();
import mongoose from 'mongoose';
import _ from 'lodash';

mongoose.connect('mongodb://0.0.0.0:27017/mydb', { useNewUrlParser: true });

const userSchema = new mongoose.Schema({
  
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

const getAllUsers = () => {
  return User.find({}).exec();
};


app.get('/users', (req, res) => {
  getAllUsers().then((result) => {
    res.send(result);
  }).catch((err) => {
    throw err;
  });
});

const getIncome = (str) => {
  const num = parseFloat(str.replace("$", ""));
  return num;
}

app.get('/users/income-bmw-mercedes', (req, res) => {
  User.find({
    // income: { $lt: 5 },
    car: { $in: ['BMW', 'Mercedes'] }
  }).then((result) => {
    let finalRes = [];
    result.forEach(item => {
      if (getIncome(item.income) < 5) {
        finalRes = [...finalRes, item];
      }
    })
    res.send(finalRes);
  }).catch((err) => {
    throw err;
  });
});

app.get('/users/male-phone-price', (req, res) => {
  User.find({
    gender: 'Male',
    phone_price: { $gt: 10000 }
  }).then((result) => {
    res.send(result);
  }).catch((err) => {
    throw err;
  });
});

app.get('/users/last-name-quote-email', (req, res) => {
  User.find({
    last_name: { $regex: /^M/ },
    $where: 'this.quote.length > 15'
  }).then((result) => {
    let finalRes = [];
    result.forEach(item => {
      if (item.email.includes(item.last_name.toLowerCase())) {
        finalRes = [...finalRes, item];
      }
    })
    res.send(finalRes);
  }).catch((err) => {
    throw err;
  });
});

app.get('/users/car-email', (req, res) => {
  User.find({
    car: { $in: ['BMW', 'Mercedes', 'Audi'] },
    email: { $not: { $regex: /\d/ } }
  }).then((result) => {
    res.send(result);
  }).catch((err) => {
    throw err;
  });
});

app.get('/cities/top-10', (req, res) => {
  User.aggregate([
    { $group: { _id: '$address.city', count: { $sum: 1 }, totalIncome: { $sum: '$income' } } },
    { $sort: { count: -1 } },
    { $limit: 10 },
    { $project: { _id: 0, city: '$_id', count: 1, averageIncome: { $divide: ['$totalIncome', '$count'] } } }
  ]).then((result) => {
    res.send(result);
  }).catch((err) => {
    throw err;
  });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
