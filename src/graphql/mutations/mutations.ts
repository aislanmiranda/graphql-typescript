var addUser = require('./add').add;
// var removeUser = require('./remove').remove;
// var updateUser = require('./update').update;
import addEmpresa from './empresa/addEmpresa';
import addPerfil from './perfil/addPerfil';

module.exports = {
  addUser,
  addEmpresa,
  addPerfil
//   removeUser,
//   updateUser
}