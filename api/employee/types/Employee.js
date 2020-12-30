const { gql } = require('apollo-server');

module.exports = gql `
# scalar DateTime
  type Employee {
    id: ID!
    name: String!
    lasName: String
    cpf: String
    email: String
    company: String
    # benefits: Array 
    # employees: [Employees] 
    # createdAt: DateTime
  }

  input CompanyInput {
    name: String!
    lasName: String
    cpf: String
    email: String
    company: String
    # benefits: Array 
    # employees: [Employees] 
    # createdAt: DateTime
  }

  type Query {
    employees(page: Int, limit: Int): [Employee]
    # company(id: ID!): Company! 
  }

#   type deleteCompanyRes {
#     id: ID!
#   }

#   type Mutation {
#     createCompany(company: CompanyInput): Company!,
#     updateCompany(id: ID!, company: CompanyInput): Company!,
#     deleteCompany(id: ID!): deleteCompanyRes,

`;

// module.exports = companySchema;

