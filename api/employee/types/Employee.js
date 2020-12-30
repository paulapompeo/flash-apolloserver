const { gql } = require('apollo-server');

module.exports = gql `
# scalar DateTime
  type Employee {
    id: ID!
    name: String!
    lastName: String
    cpf: String
    email: String
    company: String
  }

  input CompanyInput {
    name: String!
    lastName: String
    cpf: String
    email: String
    company: String
    # benefits: Array 
    # employees: [Employees] 
    # createdAt: DateTime
  }

  type Query {
    employees(page: Int, limit: Int, company: String): [Employee]
    companyEmployees(value: String): [Employee]
  }

#   type deleteCompanyRes {
#     id: ID!
#   }

#   type Mutation {
#     createCompany(company: CompanyInput): Company!,
#     updateCompany(id: ID!, company: CompanyInput): Company!,
#     deleteCompany(id: ID!): deleteCompanyRes,

`;

