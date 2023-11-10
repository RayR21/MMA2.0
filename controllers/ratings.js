async function create(req, res) {
    const fighter = await Fighter.findById(req.params.id);
  
    // Add the user-centric info to req.body (the new review)
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
  
    // We can push (or unshift) subdocs into Mongoose arrays
    fighter.reviews.push(req.body);
    try {
      // Save any changes made to the movie doc
      await fighter.save();
    } catch (err) {
      console.log(err);
    }
    res.redirect(`/fighters/${fighter._id}`);
  }