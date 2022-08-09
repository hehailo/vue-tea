let routerApi = function (router) {
  router.post("/api/user/sendSms", function (req, res, next) {
    console.log("paramns",req.paramns);
    console.log("body",req.body);
    res.send({
      code: 200,
      data: {
        success: true,
        smscode: 100861,
      },
    });
  });
};

module.exports = routerApi;
