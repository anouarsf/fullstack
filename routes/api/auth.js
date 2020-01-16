const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const auth = require ('../../middleware/auth');
const { check , validationResult} = require('express-validator/check');
const config = require('config');
const jwt = require ('jsonwebtoken');
const User = require('../../models/User')

//Get api/auth
router.get('/', auth, async(req,res)=> {
  try{
const user = await User.findById (req.user.id).select('-password');
res.json(user) ;
  } catch(err) {
console.error(err.message);
res.status(500).send('Server Error');
  }
});

//POST api/auth
router.post('/', 
[
 
  check('email' , 'entrez votre email').isEmail(),
  check('password', 'passwords is required').exists()
],
 async (req,res)=> {
const errors = validationResult(req);
 if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array()});
 }

 const { email, password } = req.body;

 try{
    //user deja inscrit
let user = await User.findOne({ email });
if (!user) {
 return  res.status(400).json({ errors: [ { msg : 'Invalid Credentials'}]});
}


const isMatch = await bcrypt.compare(password, user.password);
if (!isMatch){
  return res
  .status(400)
  .json({ errors: [{ msg: 'Invalid Credentials'}]});
}
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