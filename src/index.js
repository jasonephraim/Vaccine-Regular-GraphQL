require("dotenv").config();
const express = require("express");
const { ApolloServer } = require("apollo-server-express");

const resolvers = require("./graphql/resolvers/hello");
const typeDefs = require("./graphql/schemas/hello");
const cors = require("cors");
const { createServer } = require("http");
const cookieParser = require("cookie-parser");
const sequelize = require("./db/sequelize");

const startServer = async () => {
  const server = new ApolloServer({
    resolvers,
    typeDefs,
  });

  await sequelize;

  const app = express();
  app.use(cookieParser());
  app.use(
    cors({
      origin: process.env.FRONTEND_URL,
      credentials: true,
    })
  );

  app.get("/", function (req, res) {
    res.send("");
  });

  server.applyMiddleware({ app, path: "/graphql" });

  const httpServer = createServer(app);

  httpServer.listen({ port: process.env.PORT }, () =>
    console.log(`Server is running on port ${process.env.PORT}/graphql`)
  );
};

startServer().then();
