import { GraphQLObjectType, 
         GraphQLNonNull, GraphQLID, 
         GraphQLString, 
         GraphQLBoolean,
         GraphQLInt} from 'graphql';

const empresaType = new GraphQLObjectType({
  name: 'empresa',
  fields: () => {
    return {
      id: {
        type: new GraphQLNonNull(GraphQLString)
      },
      nome: {
        type: new GraphQLNonNull(GraphQLString)
      },
      fantasia: {
        type: new GraphQLNonNull(GraphQLString)
      },
      email: {
        type: new GraphQLNonNull(GraphQLString)
      }
    }
  }
});

export default empresaType;