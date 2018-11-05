import { GraphQLObjectType, 
         GraphQLNonNull, GraphQLID, 
         GraphQLString } from 'graphql';

const userType = new GraphQLObjectType({
  name: 'user',
  fields: () => {
    return {
      id: {
        type: new GraphQLNonNull(GraphQLString)
      },
      name: {
        type: GraphQLString
      }
    }
  }
});

export default userType;