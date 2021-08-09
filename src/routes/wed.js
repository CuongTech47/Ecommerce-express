const dashBoardRouter = require("./dashboard")
const adminRouter = require('./admin')
const homeRouter = require("./home");
const authRouter = require('./auth')
function route(app) {

  app.use("/admin-dashboard",authRouter)
  app.use("/api/admin",authRouter)
  app.use("/dashboard",dashBoardRouter)
  app.use("/admin",adminRouter)
  
  app.use("/",homeRouter);
  

}

module.exports = route;
