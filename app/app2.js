const express = require("express");
const app = express();
var multer  = require('multer')
const apk = require("./app")
var upload = multer({ dest: 'uploads/' })
const vcfS = require("./vcfFileSaving")
const bodyParser = require("body-parser")
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      
      cb(null, file.originalname)
    }
  })
  var upload = multer({ storage: storage })
app.use(bodyParser.urlencoded(
    {extended: true}
))
// app.get("/",function(req,res)
// {
//     res.sendFile(__dirname + "/aa122.jpg")
// })
app.post("/", function(req,res )
{
    
})


app.post('/profile', upload.single('photo'), function (req, res, next) {
    console.log()
    
    function PhotoName (ooo){
        return __dirname+ `/uploads/${ooo.pho}`        
            }
    
    const PhName = PhotoName({
        pho: req.file.originalname
     })

    const massage = vcfS.UserInput(
        {   
            Mr_or_Mrs  : req.body.MrOrMrs,
            FirstName  : req.body.FirstName,
            FullName   : req.body.FirstName+req.body.LastName,
            LastName   : req.body.LastName,
            CompanyName: req.body.Company,
            Title      : req.body.Title,
            WorkPhNo   : req.body.Work_Phone,
            HomePhNo   : req.body.Home_Phone,
            WorkADR    : req.body.Work_address,
            HomeADR    : req.body.Home_address,
            Gmail      : req.body.User_email,
            photo      : PhName ,
            WorkADR_R  :"100 Waters Edge\\nBaytown\, LA 30314\\nUnited States of America",
            HomeADR_R  :"100 Waters Edge\\nBaytown\, LA 30314\\nUnited States of America",
            REV        : "20080424T195243Z",
        });
    function funct (){res.sendFile(PhName)
    
};

    apk.WFe("data.vcf",massage, funct );
  })



app.listen(3010, function(){
    console.log("server starting")
})