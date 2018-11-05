import { GraphQLNonNull, GraphQLString } from 'graphql';
import UserModel from '../../models/user';
import userType from "../types/UserType";
 
exports.add = {
  type: userType,
  args: {
    name: {
      type: new GraphQLNonNull(GraphQLString),
    }
  },
  resolve(root:any, params:any) {
    const uModel = new UserModel(params);
    const newUser = uModel.save();
    if (!newUser) {
      throw new Error('Error');
    }
    return newUser
  }
}