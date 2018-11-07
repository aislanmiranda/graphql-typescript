import { GraphQLList } from "graphql";
import empresaType from "../types/EmpresaType";
import EmpresaSchema from "../../models/empresa";

const listaEmpresa = {
  type: new GraphQLList(empresaType),
  resolve: async () => {
    const list = await EmpresaSchema.find()
    .exec(); 

    if (!list) {
      throw new Error("Error");
    }
    return list;
  }
};

export { listaEmpresa };
