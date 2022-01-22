const bcrypt = require('bcryptjs');
const User = require('../models/User')

const router = require('express').Router();

// UPDATE USER
router.put('/:id', async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    if (req.body.password) {
      try {
        const salt = await bcrypt.getSalt(12);
        req.body.password = await bcrypt.hash(req.body.password, salt);
      } catch (err) {
        return res.status(500).json(err)
      }
    }

    try {
      const user = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body
      });

      res.status(200).json("Account has been updated");
    } catch (err) {
      return res.status(500).json(err)
    }
  } else {
    return res.status(403).json('you can update only your account!')
  }
})

// DELETE USER
router.delete('/:id', async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      res.status(200).json("Account has been deleted");
    } catch (err) {
      return res.status(500).json(err)
    }
  } else {
    return res.status(403).json('you can delete only your account!')
  }
})

// GET A USER
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const {password, updatedAt, ...others} = user._doc;
    res.status(200).json(others);
  } catch (err) {
    return res.status(500).json(err)
  }
})

// FOLLOW 
router.put('/:id/follow', async (req, res) => {
  if(req.body.userId !== req.params.id){
    const targetUser = await User.findById(req.params.id);
    const currentUser =  await User.findById(req.body.userId)

    // check user already not followed
    if(!targetUser.followers.includes(req.body.userId)){
      await targetUser.updateOne({$push: {followers: req.body.userId}})
      await currentUser.updateOne({$push: {followings: req.params.id}})
      res.status(200).json("user has been followed");
    }else {
      return res.status(403).json('you already follow this user')
    }
  } else {
    return res.status(403).json('you can not follow yourself')
  }
})

// UNFOLLOW
router.put('/:id/unfollow', async (req, res) => {
  if(req.body.userId !== req.params.id){
    const targetUser = await User.findById(req.params.id);
    const currentUser =  await User.findById(req.body.userId)

    // check user followed
    if(targetUser.followers.includes(req.body.userId)){
      await targetUser.updateOne({$pull: {followers: req.body.userId}})
      await currentUser.updateOne({$pull: {followings: req.params.id}})
      res.status(200).json("user has been unfollowed");
    }else {
      return res.status(403).json('you already unfollow this user')
    }
  } else {
    return res.status(403).json('you can not unfollow yourself')
  }
})

module.exports = router;