import { GraphQLObjectType, 
         GraphQLNonNull, GraphQLID, 
         GraphQLString, 
         GraphQLBoolean} from 'graphql';

import empresaType from './EmpresaType';

const perfilType = new GraphQLObjectType({
  name: 'perfil',
  fields: () => {
    return {
      empresa: {
        type: new GraphQLObjectType({
          name: 'emp',
          fields: () => ({
            nome: {
              type: GraphQLString
            }
          })
        })
      },
      // empresa: {
      //   type: new GraphQLNonNull(empresaType)
      // },
      id: {
        type: new GraphQLNonNull(GraphQLString)
      },
      nome: {
        type: GraphQLString
      }
    }
  }
});

export default perfilType;