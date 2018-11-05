import { GraphQLObjectType, 
  GraphQLList, GraphQLString } from 'graphql';
import userType from "../types/UserType";
import UserModel from '../../models/user';

// Query
const queryType = new GraphQLObjectType({
  name: "Query",
  fields: () => {
    return {
      users: {
        type: new GraphQLList(userType),
        resolve: () => {
          const users = UserModel.find().exec();
          if (!users) {
            throw new Error("Error");
          }
          return users;
        }
      },
      user: {
        type: userType,
        args: {
          id: { type: GraphQLString }
        },
        resolve: async (parentValue: any, args: any) =>  {
          const user = await UserModel.findById(args.id);
          if (!user) {
            throw new Error("Error");
          }
          return user;
        }
      }
    };
  }
});

export default queryType;
