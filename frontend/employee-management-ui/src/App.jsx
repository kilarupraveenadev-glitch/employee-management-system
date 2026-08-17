import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

const API_URL =
  'https://employee-management-system-m5d0.onrender.com/api/employees';

function App() {
  const [employees, setEmployees] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);

  // Search
  const [searchTerm, setSearchTerm] = useState('');

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const employeesPerPage = 5;

  // Sorting
  const [sortField, setSortField] = useState('');
  const [sortDirection, setSortDirection] = useState('asc');

  // Error message
  const [errorMessage, setErrorMessage] = useState('');

  // Form data
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    department: '',
    salary: ''
  });

  // ==============================
  // GET - Fetch all employees
  // ==============================
  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get(API_URL);

      setEmployees(response.data);
      setErrorMessage('');
    } catch (error) {
      console.error('Error fetching employees:', error);

      setErrorMessage(
        'Unable to load employees. Please check that the backend is running.'
      );
    }
  };

  // ==============================
  // Handle form input
  // ==============================
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value
    });

    setErrorMessage('');
  };

  // ==============================
  // POST - Add employee
  // ==============================
  const handleSubmit = async (event) => {
    event.preventDefault();

    setErrorMessage('');

    if (!formData.firstName.trim()) {
      setErrorMessage('First name is required.');
      return;
    }

    if (!formData.lastName.trim()) {
      setErrorMessage('Last name is required.');
      return;
    }

    if (!formData.email.trim()) {
      setErrorMessage('Email is required.');
      return;
    }

    if (formData.salary === '') {
      setErrorMessage('Salary is required.');
      return;
    }

    if (Number(formData.salary) < 0) {
      setErrorMessage('Salary cannot be negative.');
      return;
    }

    try {
      const response = await axios.post(API_URL, {
        firstName: formData.firstName.trim(),
        lastName: formData.lastName.trim(),
        email: formData.email.trim(),
        department: formData.department.trim(),
        salary: Number(formData.salary)
      });

      console.log('Employee added:', response.data);

      alert('Employee added successfully!');

      clearForm();

      setCurrentPage(1);

      await fetchEmployees();

    } catch (error) {
      console.error('Error adding employee:', error);

      if (error.response?.status === 400) {
        setErrorMessage(
          'Please check the employee details. The email may already exist or some data is invalid.'
        );
      } else {
        setErrorMessage(
          'Unable to add employee. Please check that the backend is running.'
        );
      }
    }
  };

  // ==============================
  // DELETE - Delete employee
  // ==============================
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      'Are you sure you want to delete this employee?'
    );

    if (!confirmDelete) {
      return;
    }

    try {
      await axios.delete(`${API_URL}/${id}`);

      alert('Employee deleted successfully!');

      await fetchEmployees();

      setCurrentPage(1);

    } catch (error) {
      console.error('Error deleting employee:', error);

      setErrorMessage(
        'Unable to delete employee. Please try again.'
      );
    }
  };

  // ==============================
  // EDIT - Load employee
  // ==============================
  const handleEdit = (employee) => {
    setErrorMessage('');

    setEditingId(employee.id);

    setFormData({
      firstName: employee.firstName,
      lastName: employee.lastName,
      email: employee.email,
      department: employee.department,
      salary: employee.salary
    });

    setShowForm(true);
  };

  // ==============================
  // PUT - Update employee
  // ==============================
  const handleUpdate = async (event) => {
    event.preventDefault();

    setErrorMessage('');

    if (!formData.firstName.trim()) {
      setErrorMessage('First name is required.');
      return;
    }

    if (!formData.lastName.trim()) {
      setErrorMessage('Last name is required.');
      return;
    }

    if (!formData.email.trim()) {
      setErrorMessage('Email is required.');
      return;
    }

    if (formData.salary === '') {
      setErrorMessage('Salary is required.');
      return;
    }

    if (Number(formData.salary) < 0) {
      setErrorMessage('Salary cannot be negative.');
      return;
    }

    try {
      const response = await axios.put(
        `${API_URL}/${editingId}`,
        {
          firstName: formData.firstName.trim(),
          lastName: formData.lastName.trim(),
          email: formData.email.trim(),
          department: formData.department.trim(),
          salary: Number(formData.salary)
        }
      );

      console.log('Employee updated:', response.data);

      alert('Employee updated successfully!');

      clearForm();

      await fetchEmployees();

    } catch (error) {
      console.error('Error updating employee:', error);

      if (error.response?.status === 400) {
        setErrorMessage(
          'Unable to update employee. Please check the entered details.'
        );
      } else {
        setErrorMessage(
          'Unable to update employee. Please try again.'
        );
      }
    }
  };

  // ==============================
  // Clear form
  // ==============================
  const clearForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      department: '',
      salary: ''
    });

    setEditingId(null);
    setShowForm(false);
    setErrorMessage('');
  };

  // ==============================
  // Open Add Employee form
  // ==============================
  const openAddForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      department: '',
      salary: ''
    });

    setEditingId(null);
    setErrorMessage('');
    setShowForm(true);
  };

  // ==============================
  // SEARCH
  // ==============================
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  const filteredEmployees = employees.filter((employee) => {
    const search = searchTerm.toLowerCase();

    return (
      employee.firstName.toLowerCase().includes(search) ||
      employee.lastName.toLowerCase().includes(search) ||
      employee.email.toLowerCase().includes(search) ||
      employee.department.toLowerCase().includes(search)
    );
  });

  // ==============================
  // SORTING
  // ==============================
  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(
        sortDirection === 'asc'
          ? 'desc'
          : 'asc'
      );
    } else {
      setSortField(field);
      setSortDirection('asc');
    }

    setCurrentPage(1);
  };

  const sortedEmployees = [...filteredEmployees].sort(
    (a, b) => {
      if (!sortField) {
        return 0;
      }

      const valueA = a[sortField];
      const valueB = b[sortField];

      if (valueA === null || valueA === undefined) {
        return 1;
      }

      if (valueB === null || valueB === undefined) {
        return -1;
      }

      // Salary sorting
      if (sortField === 'salary') {
        return sortDirection === 'asc'
          ? Number(valueA) - Number(valueB)
          : Number(valueB) - Number(valueA);
      }

      // Text sorting
      const textA = String(valueA).toLowerCase();
      const textB = String(valueB).toLowerCase();

      if (textA < textB) {
        return sortDirection === 'asc' ? -1 : 1;
      }

      if (textA > textB) {
        return sortDirection === 'asc' ? 1 : -1;
      }

      return 0;
    }
  );

  // ==============================
  // PAGINATION
  // ==============================
  const totalPages = Math.ceil(
    sortedEmployees.length / employeesPerPage
  );

  const startIndex =
    (currentPage - 1) * employeesPerPage;

  const currentEmployees = sortedEmployees.slice(
    startIndex,
    startIndex + employeesPerPage
  );

  // ==============================
  // DASHBOARD
  // ==============================
  const totalEmployees = employees.length;

  const totalDepartments = new Set(
    employees
      .map((employee) => employee.department)
      .filter((department) => department)
  ).size;

  const totalSalary = employees.reduce(
    (total, employee) =>
      total + Number(employee.salary || 0),
    0
  );

  return (
    <div>
      <h1>Employee Management System</h1>

      {/* ==========================
          DASHBOARD
          ========================== */}
      <div className="dashboard">

        <div className="dashboard-card">
          <h3>Total Employees</h3>
          <p>{totalEmployees}</p>
        </div>

        <div className="dashboard-card">
          <h3>Departments</h3>
          <p>{totalDepartments}</p>
        </div>

        <div className="dashboard-card">
          <h3>Total Salary</h3>
          <p>{totalSalary.toLocaleString()}</p>
        </div>

      </div>

      {/* Add Employee Button */}
      <button onClick={openAddForm}>
        Add Employee
      </button>

      {/* ==========================
          ADD / EDIT FORM
          ========================== */}
      {showForm && (
        <div>
          <h2>
            {editingId
              ? 'Edit Employee'
              : 'Add Employee'}
          </h2>

          {errorMessage && (
            <p className="error-message">
              {errorMessage}
            </p>
          )}

          <form
            onSubmit={
              editingId
                ? handleUpdate
                : handleSubmit
            }
          >

            {/* First Name */}
            <div>
              <label>First Name: </label>

              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>

            <br />

            {/* Last Name */}
            <div>
              <label>Last Name: </label>

              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>

            <br />

            {/* Email */}
            <div>
              <label>Email: </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <br />

            {/* Department */}
            <div>
              <label>Department: </label>

              <input
                type="text"
                name="department"
                value={formData.department}
                onChange={handleChange}
              />
            </div>

            <br />

            {/* Salary */}
            <div>
              <label>Salary: </label>

              <input
                type="number"
                name="salary"
                value={formData.salary}
                onChange={handleChange}
                min="0"
                required
              />
            </div>

            <br />

            {/* Submit */}
            <button type="submit">
              {editingId
                ? 'Update Employee'
                : 'Save Employee'}
            </button>

            {' '}

            {/* Cancel */}
            <button
              type="button"
              onClick={clearForm}
            >
              Cancel
            </button>

          </form>
        </div>
      )}

      {/* ==========================
          EMPLOYEE LIST
          ========================== */}
      <h2>Employee List</h2>

      {/* Search */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by name, email or department..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      {filteredEmployees.length === 0 ? (
        <p>No employees found.</p>
      ) : (
        <>
          <table>
            <thead>
              <tr>

                <th>ID</th>

                <th
                  onClick={() =>
                    handleSort('firstName')
                  }
                >
                  First Name
                  {sortField === 'firstName' &&
                    (sortDirection === 'asc'
                      ? ' ↑'
                      : ' ↓')}
                </th>

                <th
                  onClick={() =>
                    handleSort('lastName')
                  }
                >
                  Last Name
                  {sortField === 'lastName' &&
                    (sortDirection === 'asc'
                      ? ' ↑'
                      : ' ↓')}
                </th>

                <th
                  onClick={() =>
                    handleSort('email')
                  }
                >
                  Email
                  {sortField === 'email' &&
                    (sortDirection === 'asc'
                      ? ' ↑'
                      : ' ↓')}
                </th>

                <th
                  onClick={() =>
                    handleSort('department')
                  }
                >
                  Department
                  {sortField === 'department' &&
                    (sortDirection === 'asc'
                      ? ' ↑'
                      : ' ↓')}
                </th>

                <th
                  onClick={() =>
                    handleSort('salary')
                  }
                >
                  Salary
                  {sortField === 'salary' &&
                    (sortDirection === 'asc'
                      ? ' ↑'
                      : ' ↓')}
                </th>

                <th>Actions</th>

              </tr>
            </thead>

            <tbody>
              {currentEmployees.map((employee) => (
                <tr key={employee.id}>

                  <td>{employee.id}</td>

                  <td>{employee.firstName}</td>

                  <td>{employee.lastName}</td>

                  <td>{employee.email}</td>

                  <td>{employee.department}</td>

                  <td>{employee.salary}</td>

                  <td>

                    <button
                      onClick={() =>
                        handleEdit(employee)
                      }
                    >
                      Edit
                    </button>

                    {' '}

                    <button
                      onClick={() =>
                        handleDelete(employee.id)
                      }
                    >
                      Delete
                    </button>

                  </td>

                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="pagination">

              <button
                onClick={() =>
                  setCurrentPage(currentPage - 1)
                }
                disabled={currentPage === 1}
              >
                Previous
              </button>

              <span>
                Page {currentPage} of {totalPages}
              </span>

              <button
                onClick={() =>
                  setCurrentPage(currentPage + 1)
                }
                disabled={
                  currentPage === totalPages
                }
              >
                Next
              </button>

            </div>
          )}

        </>
      )}

    </div>
  );
}

export default App;