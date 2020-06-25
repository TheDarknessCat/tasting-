const fs =  require('fs')
function MakingDir(DirNameToMake)
    { fs.mkdir(DirNameToMake,{},function(err){console.log(err)})
    }
function RemoveDir(DirNameToRemove)
    { fs.rmdir(DirNameToRemove, function(err){console.log(err)})
    }
function RemoveFile(FileNameToRemove)
    { fs.unlink(FileNameToRemove, function(err){console.log(err)})
    }
    function WriteFile(DirName ,Code ,fun)
    { fs.writeFile(DirName ,Code
     ,{},function(err){console.log(err); 
        fun();
    })
    }
    function RenameFile(oldpath ,newpath )
    { fs.writeFile(oldpath ,newpath
     ,function(err){console.log(err); 

    })
    }
     
console.log("*_______________#Running_app.js!________________*")

module.exports = {
    MDr : MakingDir ,
    WFe : WriteFile ,
    RFe : RemoveFile ,
    RDr : RemoveDir ,
    ReFe : RenameFile,
}




// makingdir("./dir"+Math.floor(Math.random()*10)
// )
