import { ApolloServer } from "apollo-server";
import mongoose from "mongoose";
const MONGODB_URL =
  "mongodb+srv://root:Root5600@cluster0.bwckus6.mongodb.net/first?retryWrites=true&w=majority";
import typeDefs from "./graphql/typeDefs.js";
import resolvers from "./graphql/resolvers.js";

const server = new ApolloServer({
  typeDefs,
  resolvers,
});
mongoose
  .connect(MONGODB_URL)
  .then(() => {
    console.log("DB connected...");
    return server.listen({ port: 4000 });
  })
  .then((data) => console.log("url is ", data.url))
  .catch((err) => console.log(err));
