import { GraphQLNonNull, GraphQLString } from 'graphql';
import EmpresaSchema from '../../../models/empresa';
import empresaType from "../../types/EmpresaType";
 
const addEmpresa = {
  type: empresaType,
  args: {
    nome: {
      type: new GraphQLNonNull(GraphQLString),
    },
    fantasia: {
      type: new GraphQLNonNull(GraphQLString),
    },
    email: {
      type: new GraphQLNonNull(GraphQLString),
    }
  },
  resolve(root:any, params:any) {
    const uModel = new EmpresaSchema(params);
    const newUModel = uModel.save();
    if (!newUModel) {
      throw new Error('Error');
    }
    return newUModel
  }
};

export default addEmpresa;