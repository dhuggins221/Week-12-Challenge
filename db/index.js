  const connection = require("./connection");

  createEmployee(employee) {
    return this.connection.promise().query("INSERT INTO employee SET ?", employee);
  }

  updateEmployeeRole(employeeId, roleId) {
    return this.connection.promise().query(
      "",
      [roleId, employeeId]
    );
  }

  updateEmployeeManager(employeeId, managerId) {
    return this.connection.promise().query(
      "",
      [managerId, employeeId]
    );
  }