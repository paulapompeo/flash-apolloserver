module.exports = async (_, {}, {models}) => {
    return await models.Employee.find();
};
  