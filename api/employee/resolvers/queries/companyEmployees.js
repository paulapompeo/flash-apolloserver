module.exports = async (_, value, {employeeModels}) => {
    return await employeeModels.Employee.find()
};


