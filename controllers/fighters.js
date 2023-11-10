const Fighter = require('../models/fighters');
const WeightClass = require('../models/weightclass');



module.exports = {
    new: newFighter,
    create,
    index,
    show,
    delete: deleteFighter,
    edit: editForm,
    update
  };


  async function index(req, res) {
    const fighters = await Fighter.find({})
    const weightClasses = await WeightClass.find({}).populate('fighters')
    res.render('fighters/index', {
      title:'All Fighters',
      fighters,
      weightClasses

    })
  }


  async function create(req, res) {
const fighter = await Fighter.create(req.body)
const weightClass = await WeightClass.findOne({
name:req.body.weightclass
})
if(!weightClass){
 const newWeightClass =  await WeightClass.create({name:req.body.weightclass})
 newWeightClass.fighters.push(fighter)
 await newWeightClass.save()
}else{
  weightClass.fighters.push(fighter)
  await weightClass.save()
}
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

  async function editForm(req, res){
 const fighter = await Fighter.findById(req.params.id)
 res.render('fighters/edit',{
  title:'edit fighter',
  fighter
 })

  }
  async function update(req, res){
    const fighter = await Fighter.findByIdAndUpdate(req.params.id, req.body)
    res.redirect('/fighters')

  }