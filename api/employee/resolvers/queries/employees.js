module.exports = async (_, {}, {employeeModels}) => {
    return await employeeModels.Employee.find();
};
  