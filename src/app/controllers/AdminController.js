const Admin = require('../models/Admin_table')
class AdminController {
  index(req, res) {
    res.render("admin_login",{layout:"admin_login_layout.hbs"});
  }
  show_dashboard(req,res){
    res.render("admin/dashboard",{layout:"admin_layout.hbs"});
  }
  dashboard(req,res){

  }
  register(req,res){
    const admin = new Admin({
      admin_name: req.body.admin_name,
      admin_email: req.body.admin_email,
      admin_phone: req.body.admin_phone,
      admin_password: req.body.admin_password,
    })
    try{
      const savedAdmin = admin.save()
      res.send(savedAdmin)
    }catch (err){
      res.status(400).send(err)
    }
  }

  
  
}
  
  module.exports = new AdminController