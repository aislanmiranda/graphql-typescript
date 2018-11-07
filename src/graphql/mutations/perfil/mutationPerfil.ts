import { GraphQLNonNull, GraphQLString } from 'graphql';
import PerfilSchema from '../../../models/perfil';
import perfilType from "../../types/PerfilType";
import empresaType from "../../types/EmpresaType";
 
const addPerfil = {
  type: perfilType,
  args: {
    empresa: {
      type: new GraphQLNonNull(GraphQLString)
    },
    nome: {
      type: new GraphQLNonNull(GraphQLString),
    }
  },
  resolve(root:any, params:any) {
    const uModel = new PerfilSchema(params);
    const newUModel = uModel.save();
    if (!newUModel) {
      throw new Error('Error');
    }
    return newUModel
  }
};

const editPerfil = {
  type: perfilType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLString)
    },
    nome: {
      type: new GraphQLNonNull(GraphQLString),
    }
  },
  resolve(root:any, params:any) {
    return PerfilSchema.findByIdAndUpdate(
      params.id,
      params,
      { new: true }
    )
      .catch(err => new Error(err));
  }
};

export { addPerfil, editPerfil };