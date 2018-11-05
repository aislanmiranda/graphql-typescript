//const express = require("express");
import express from 'express';
const config = require('./config/env.json')[process.env.NODE_ENV || 'development'];
// const mongoose = require('./config/mongoose');
import * as mongoose from './config/mongoose';
import graphqlHTTP from 'express-graphql';
import cors from 'cors';
import DataBase from './config/mongoose';

class Server {
    app: express.Application;
    banco: any;

    constructor() {
      this.app = express();
      this.listen();
      this.middlewares();
      this.initializeDB();
    }

    listen() {
      const userSchema = require('./graphql/schema').userSchema;
      this.app.use('/graphql', cors(), graphqlHTTP({
        schema: userSchema,
        rootValue: global,
        graphiql: true
      }));

      this.app.listen(config.port, () => {
        console.log(`GraphQL API rodando na porta ${config.port}`);
      });
    }

    middlewares() {
      this.app.use('*', cors());
    }

    initializeDB () {
      this.banco = new DataBase();
      this.banco.createConnection();
    }
}

export default new Server().app;