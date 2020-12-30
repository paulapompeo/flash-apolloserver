const { ApolloServer } = require('apollo-server')
const { mergeTypeDefs } = require('graphql-tools')
const connectDB = require("./config/connection")

const employeeTypeDefs = require("./employee/types");
const companyTypeDefs = require("./company/types");

const employeeResolvers = require("./employee/resolvers");
const companyResolvers = require("./company/resolvers");

const employeeModels = require("./employee/models");
const companyModels = require("./company/models");

const typeDefs = mergeTypeDefs([employeeTypeDefs, companyTypeDefs ])
const resolvers = [companyResolvers, employeeResolvers]

connectDB();

const server = new ApolloServer({ 
  typeDefs, 
  resolvers,
  context: () => {
    return {
      employeeModels,
      companyModels
    }
  }
});


server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
