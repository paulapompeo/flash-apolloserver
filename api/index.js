const { ApolloServer } = require('apollo-server')
const { mergeTypeDefs } = require('graphql-tools')
const connectDB = require("./config/connection")

const { companySchema, companyResolvers, CompaniesAPI } = require('./company')
const { employeeSchema, employeeResolvers, EmployeesAPI } = require('./employee')

const typeDefs = mergeTypeDefs([companySchema, employeeSchema ])
const resolvers = [companyResolvers, employeeResolvers]

connectDB();

//servidor
const server = new ApolloServer ( { 
    typeDefs,
    resolvers,
    dataSources: () => {
      return {
        companiesAPI: new CompaniesAPI(dbConfig),
        employeesAPI: new EmployeesAPI(dbConfig),
      }
    }
} )

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});