module.exports = async (_, {id}, {models}) => {
    return await models.Company.findById(id);
};
  