import queryType from './queries/query';
var mutation = require('./mutations/mutations');

import { GraphQLObjectType, GraphQLSchema } from 'graphql';

exports.userSchema = new GraphQLSchema({
  query: queryType,
  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: mutation
  })
})