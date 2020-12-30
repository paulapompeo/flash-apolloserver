const { ApolloServer } = require('apollo-server')
// const { mergeTypeDefs } = require('graphql-tools')
const connectDB = require("./config/connection")

// const { companySchema, companyResolvers, CompaniesAPI } = require('./company')
// const { employeeSchema, employeeResolvers, EmployeesAPI } = require('./employee')

// const typeDefs = mergeTypeDefs([companySchema, employeeSchema ])
// const typeDefs = [companySchema]
// const resolvers = [companyResolvers]
// const resolvers = [companyResolvers, employeeResolvers]

const typeDefs = require("./employee/types");
const resolvers = require("./employee/resolvers");
const models = require("./employee/models")

connectDB();

const server = new ApolloServer({ 
  typeDefs, 
  resolvers,
  context: {models}
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
