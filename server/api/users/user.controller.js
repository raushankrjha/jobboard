var User = require("./users.model");
const mongoose = require("mongoose");
// Get list of users
exports.index = function (req, res) {
  User.find(function (err, data) {
    if (err) {
      return handleError(res, err);
    }
    var resp = {
        status: true,
        message: "Users Fetched Successfully",
        data: data
    }
    return res.status(200).json(resp);
  });
};

exports.create = function (req, res) {
  console.log("user req body " + JSON.stringify(req.body));
  User.create(req.body, function (err, data) {
    if (err) {
      return handleError(res, err);
    }
    var resp = {
      status: true,
      message: "User Created Successfully",
      data: [data],
    };
    return res.send(resp);
  });
};
exports.delete=function (req,res){
    console.log(JSON.stringify(req.body))
    User.deleteMany(req.body,function(err,data)
    {
        if(err)
        {
            return handleError(err,res)
        }
        var resp = {
            status: true,
            message: "User Deleted Successfully",
            data: [data],
          };
          return res.send(resp)
    })
}

exports.update=function(req,res)
{
    User.findOneAndUpdate(req.body.params,req.body,function(err,data){
        if(err){
            return handleError(err,res)
        }
        var resp = {
            status: true,
            message: "User Updated Successfully",
            data: [data],
          };
        return res.send(resp)
    })
}

function handleError(res, err) {
  return res.status(500).send(err);
}
