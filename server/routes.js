
module.exports = function (app) {
  app.use('/api/users',require('./api/users'));
  app.post('/user',(req,res)=>{
    console.log("req.body"+req.body)
    return res.send(req.body)
  })
};
