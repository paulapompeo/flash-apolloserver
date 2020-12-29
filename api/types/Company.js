const {gql} = require("apollo-server");

module.exports = gql `
# scalar DateTime

  type Company {
    id: ID!
    name: String!
    trade: String
    cnpj: Int
    address: String
    # benefits: Array 
    # employees: array 
    # createdAt: DateTime
  }

  input CompanyInput {
    name: String
    trade: String
    cnpj: Int
    address: String
    # benefits: Array 
    # employees: array 
    # createdAt: DateTime
  }

  type Query {
    companies(page: Int, limit: Int): [Company]
    company(id: ID!): Company! 
  }

  type deleteCompanyRes {
    id: ID!
  }

  type Mutation {
    createCompany(company: CompanyInput): Company!,
    updateCompany(id: ID!, company: CompanyInput): Company!,
    deleteCompany(id: ID!): deleteCompanyRes,
  }
`;

