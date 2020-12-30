module.exports = async (_, {id}, {companyModels}) => {
    return await companyModels.Company.findById(id);
};
  