const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const { check, validationResult } = require('express-validator');
const Profile = require("../../models/Profile");
const User = require("../../models/User");

// Get api/profile/me
// Get current users profile
// Private
router.get('/me', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.user.id
    }).populate('user', ['name']);
    if (!profile) {
      return res.status(400).json({ msg: "there is no profile for this user" });
    }
    res.json(profile);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
});

// POST api/profile
// Create or update user profile
router.post('/', [auth,  [
 
  check('role' , 'role is required')
  .not()
  .isEmpty()
  
]
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array()});
  }

const {
  role,
  phonenumber
  
} = req.body ;

// build profile obj
const profileFields = {};
profileFields.user = req.user.id ;
if(phonenumber) profileFields.phonenumber = phonenumber;
if(role) profileFields.role = role;


// res.send('gg')
try {
let profile = await Profile.findOne ({ user: req.user.id});

if (profile) {
  profile = await  Profile.findOneAndUpdate({ user: req.user.id }, {$set: profileFields }, { new: true });

return res.json(profile);
}
// Create 
profile = new Profile(profileFields);

await profile.save();
res.json(profile);


} catch(err) {
  console.error(err.message);
  res.status(500).send('Server Error');
}
}
);

//  GET api/profile
//  GET all profiles

router.get('/', async(req, res)=>{
  try {
const profiles = await Profile.find().populate('User', ['name']);
res.json(profiles);
  } catch(err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

//  GET api/profile/user/:user_id
//  GET profile by user ID

router.get('/user/:user_id', async(req, res)=>{
  try {
const profile = await Profile.findOne({  user: req.params.user_id }).populate('User', ['name']);

if(!profile) return res.status(400).json ({ msg: 'Profile not found'});

res.json(profile);
  } catch(err) {
    console.error(err.message);
    if(err.kind == 'ObjectId'){
      return res.status(400).json ({ msg: 'Profile not found'});
    }
    res.status(500).send('Server Error');
  }
});

// DELETE api/profile
// DELETE profile, user
//private

router.delete('/', auth, async(req, res)=>{
  try {
    //
    //Remove profile
await Profile.findOneAndRemove({ user:req.user.id });
    //Remove user
await User.findOneAndRemove({ _id:req.user.id });



res.json({ msg: 'User deleted'});
  } catch(err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// PUT api/profile/information
// ADD profile information
// Private

router.put('/experience', [auth , [
  check ('nom' , 'nom is required').not()
  .isEmpty(),
  check ('role' , 'role is required').not()
  .isEmpty()
  ]
], async(req, res)=>{
 const errors = validationResult(req);
 if(!errors.isEmpty()) {
   return res.status(400).json ({ errors: errors.array()});
 }

 const {
   nom,
   prenom,
   adresse,
   phonenumber
 }= req.body;

 const newInf = {
  nom,
  prenom,
  adresse,
  phonenumber
 }

 try{
const profile = await Profile.findOne({ user: req.user.id});
profile.experience.unshift(newInf);
await profile.save();
res.json(profile);
 }
 catch(err) {
console.error(err.message);
res.status(500).send('Server Error');
 }




} );



module.exports = router;



