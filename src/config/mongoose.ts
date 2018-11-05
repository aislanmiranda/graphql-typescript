var env = process.env.NODE_ENV || "development",
  config = require("./env.json")[env];

import mongoose from "mongoose";

class DataBase {
  private DB_URI = `${config.mongo_server}:${config.mongo_port}/${
    config.mongo_base
  }`;
  private DB_CONNECTION:any;

  constructor() {}

  createConnection() {
    mongoose.connect(this.DB_URI, { useNewUrlParser: true });
    this.logger(this.DB_URI);
  }

  logger(uri:any) {
    this.DB_CONNECTION = mongoose.connection;
    this.DB_CONNECTION.on("connected", () =>
      console.log(`Moogose está conectado em ${uri}`)
    );
    this.DB_CONNECTION.on("error", (error:any) =>
      console.error.bind(console, `Conexão Mongoose Erro: ${error}`)
    );
    this.DB_CONNECTION.on("disconnected", () =>
      console.log(`Moogose está desconectado em ${uri}`)
    );
  }

  closeConnection(message:any, callback:any) {
    this.DB_CONNECTION.close(() => {
      console.log(`Mongoose conexão fechada by: ${message}`);
      callback();
    });
  }
}

export default DataBase;
