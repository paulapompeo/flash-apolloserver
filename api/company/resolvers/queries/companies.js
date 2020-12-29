module.exports = async (_, {}, {models}) => {
  return await models.Company.find();
};
