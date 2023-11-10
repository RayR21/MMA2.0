const Fighter = require('../models/fighters')


module.exports = {
    new: newFighter,
    create,
    index,
    show,
    delete: deleteFighter

  };


  async function index(req, res) {
    const fighters = await Fighter.find({})
    res.render('fighters/index', {
      title:'All Fighters',
      fighters
    })
  }


  async function create(req, res) {
const fighter = await Fighter.create(req.body)
console.log(fighter)
res.redirect('/fighters')
  }


  function newFighter(req, res) {
    // We'll want to be able to render an
    // errorMsg if the create action fails
    res.render('fighters/new', {  title:'New Fighter',errorMsg: '' });
  }


  async function show(req, res) {
    const fighter = await Fighter.findById(req.params.id)
    res.render('fighters/show', {
      title:'fighter details',
      fighter
    })
  }

  async function deleteFighter(req, res){
    try{ 
      
      await Fighter.findByIdAndDelete(req.params.id)
      res.redirect('/fighters')
   } catch(error){
    console.log(error)
   }
 
  }