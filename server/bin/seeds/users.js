const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/mtmt");
const User = require('../../models/user.js');


let userDatas = [{
  facebookId: '123456789',
  status: 'pending',
  gender: 'male',
  lookingFor: 'female',
  firstName: 'Vivian',
  age: 29,
  bio: 'Lorem ipsum dolor sit amet',
  work: 'Student @Ironhack',
  mail: 'yolo@yolo.com',
  phone: '0667721671',
  photos: 'https://lh3.googleusercontent.com/-QRfzdXqbRk0/AAAAAAAAAAI/AAAAAAAARKU/0mVuCX8pVhM/s60-p-rw-no/photo.jpg',
}]

User.create(userDatas, (err, user) => {
  if (err) {
    throw err;
  } else {
    user.forEach(user => {
      console.log(user);
    });
  }
  mongoose.connection.close();
});