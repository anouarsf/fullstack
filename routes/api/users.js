const express = require('express');
const router = express.Router();
const { check , validationResult} = require('express-validator/check');
const bcrypt = require ('bcryptjs');
const jwt = require ('jsonwebtoken');
const config = require('config');

const User = require('../../models/User');

//POST api/users
router.post('/', 
[
  check('name', 'Name is required')
  .not()
  .isEmpty(),
  check('email' , 'entrez votre email').isEmail(),
  check('password', 'votre mdp doit contenir min 6 charactere').isLength({ min: 6})
],
 async (req,res)=> {
const errors = validationResult(req);
 if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array()});
 }

 const { name, email, password } = req.body;

 try{
    //user deja inscrit
let user = await User.findOne({ email });
if (user) {
 return  res.status(400).json({ errors: [ { msg : 'User exist deja'}]});
}

user = new User({
  name,
  email,
  password
});

const salt = await bcrypt.genSalt(10);

user.password = await bcrypt.hash(password, salt);

await user.save();

const payload = {
  user:{
    id: user.id
  }
}

jwt.sign(payload,
  config.get('jwtSecret'),
  { expiresIn: 40000},
  (err, token)=> {
    if(err) throw err;
    res.json ({ token });
  });
 } catch(err){
   // si il ya un erreur
   console.error(err.message);
   res.status(500).send('Server Error')
 }




});

module.exports = router;