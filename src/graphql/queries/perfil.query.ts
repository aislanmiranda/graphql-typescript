import { GraphQLList } from "graphql";
import perfilType from "../types/PerfilType";
import PerfilSchema from "../../models/perfil";

const listaPerfil = {
  type: new GraphQLList(perfilType),
  resolve: async () => {
    const list = await PerfilSchema.find()
    .populate('empresa')
    .exec(); 
    
    if (!list) {
      throw new Error("Error");
    }
    return list;
  }
};

export { listaPerfil };
