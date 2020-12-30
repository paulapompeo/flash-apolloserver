module.exports = async (_, {}, {companyModels}) => {
  return await companyModels.Company.find();
};
