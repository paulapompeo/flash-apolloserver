const { gql } = require('apollo-server');

module.exports = gql `

  type Company {
    id: ID!
    name: String!
    trade: String
    cnpj: String
    address: String
    employees: [String] 
  }

  input CompanyInput {
    name: String
    trade: String
    cnpj: Int
    address: String
    # benefits: Array 
    # employees: [Employee] 
    # createdAt: DateTime
  }

  type Query {
    companies(page: Int, limit: Int): [Company]
    company(id: ID!): Company! 
  }

#   type deleteCompanyRes {
#     id: ID!
#   }

#   type Mutation {
#     createCompany(company: CompanyInput): Company!,
#     updateCompany(id: ID!, company: CompanyInput): Company!,
#     deleteCompany(id: ID!): deleteCompanyRes,

`;


