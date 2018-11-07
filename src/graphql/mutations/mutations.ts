var addUser = require('./add').add;
// var removeUser = require('./remove').remove;
// var updateUser = require('./update').update;
import addEmpresa from './empresa/addEmpresa';
import { addPerfil, editPerfil } from './perfil/mutationPerfil';

module.exports = {
  addUser,
  addEmpresa,
  addPerfil,
  editPerfil
//   removeUser,
//   updateUser
}