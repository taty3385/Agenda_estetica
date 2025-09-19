const mongoose=require('mongoose');

const usuariosSchema= new mongoose.Schema({
    nombre:{type:String,
         required:true
        },
    email:{type:String,
         required:true, 
         unique:true
        },
    password:{type:String,
         required:true
        },
    rol:{type:String,
         enum:['admin','usuario'],
          default:'usuario'
        }
});

module.exports=mongoose.model('Usuarios',usuariosSchema);