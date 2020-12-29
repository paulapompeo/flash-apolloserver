const { ApolloServer } = require('apollo-server')
// const { mergeTypeDefs } = require('graphql-tools')
const connectDB = require("./config/connection")

// const { companySchema, companyResolvers, CompaniesAPI } = require('./company')
// const { employeeSchema, employeeResolvers, EmployeesAPI } = require('./employee')

// const typeDefs = mergeTypeDefs([companySchema, employeeSchema ])
// const typeDefs = [companySchema]
// const resolvers = [companyResolvers]
// const resolvers = [companyResolvers, employeeResolvers]

const typeDefs = require("./company/types");
const resolvers = require("./company/resolvers");
const models = require("./company/models")

connectDB();

//servidor
// const server = new ApolloServer ( { 
//     typeDefs,
//     resolvers,
//     dataSources: () => {
//       return {
//         companiesAPI: new CompaniesAPI(dbConfig),
//         // employeesAPI: new EmployeesAPI(dbConfig),
//       }
//     }
// } )

const server = new ApolloServer({ 
  typeDefs, 
  resolvers,
  context: {models}
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
