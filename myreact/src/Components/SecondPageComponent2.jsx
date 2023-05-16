import React, { useState } from 'react';
import { Checkbox, Collapse, List, ListItem, ListItemText } from '@mui/material';

const SecondPageComponent2 = () => {
  const departments = [
    {
      id: 1,
      name: 'Customer_service',
      subDepartments: [
        { id: 1, name: 'Support' },
        { id: 2, name: 'customer_success' },
      ],
    },
    {
      id: 2,
      name: 'Design',
      subDepartments: [
        { id: 3, name: 'graphic_design' },
        { id: 4, name: 'product_design' },
        { id: 11, name: 'web_design' },
      ],
    },
    {
      id: 3,
      name: 'Agriculture and Fishing',
      subDepartments: [
        { id: 5, name: 'Agriculture' },
        { id: 6, name: 'Crops' },
        { id: 12, name: 'Ranching' },
      ],
    },
    {
      id: 4,
      name: 'Business Services',
      subDepartments: [
        { id: 7, name: 'Accounting and Accounting Services' },
        { id: 8, name: 'Business Services - General' },
        { id: 13, name: 'Career Planning' },
      ],
    },
  ];

  const [selectedDepartments, setSelectedDepartments] = useState([]);
  const [selectedSubDepartments, setSelectedSubDepartments] = useState([]);

  const handleDepartmentToggle = (departmentId) => {
    const isDepartmentSelected = selectedDepartments.includes(departmentId);
    let updatedSelectedDepartments = [];

    if (isDepartmentSelected) {
      updatedSelectedDepartments = selectedDepartments.filter((id) => id !== departmentId);
      setSelectedSubDepartments(selectedSubDepartments.filter((id) => id < departmentId));
    } else {
      updatedSelectedDepartments = [...selectedDepartments, departmentId];
      setSelectedSubDepartments([
        ...selectedSubDepartments,
        ...departments.find((dept) => dept.id === departmentId).subDepartments.map(
          (subDept) => subDept.id
        ),
      ]);
    }

    setSelectedDepartments(updatedSelectedDepartments);
  };

  const handleSubDepartmentToggle = (subDepartmentId, departmentId) => {
    const isSubDepartmentSelected = selectedSubDepartments.includes(subDepartmentId);
    let updatedSelectedSubDepartments = [];

    if (isSubDepartmentSelected) {
      updatedSelectedSubDepartments = selectedSubDepartments.filter((id) => id !== subDepartmentId);
    } else {
      updatedSelectedSubDepartments = [...selectedSubDepartments, subDepartmentId];

      const department = departments.find((dept) => dept.id === departmentId);
      const subDepartments = department.subDepartments.map((subDept) => subDept.id);

      if (subDepartments.every((id) => selectedSubDepartments.includes(id))) {
        setSelectedDepartments([...selectedDepartments, departmentId]);
      }
    }

    setSelectedSubDepartments(updatedSelectedSubDepartments);
  };

  const isDepartmentSelected = (departmentId) => selectedDepartments.includes(departmentId);
  const isSubDepartmentSelected = (subDepartmentId) =>
    selectedSubDepartments.includes(subDepartmentId);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'lightcyan' }}>
      <List>
        {departments.map((department) => (
          <React.Fragment key={department.id}>
          <ListItem button onClick={() => handleDepartmentToggle(department.id)}>
          <Checkbox checked={isDepartmentSelected(department.id)} />
          <ListItemText primary={department.name} />
          </ListItem>
          <Collapse in={isDepartmentSelected(department.id)}>
          <List component="div" disablePadding>
          {department.subDepartments.map((subDepartment) => (
          <ListItem
          key={subDepartment.id}
          button
          onClick={() => handleSubDepartmentToggle(subDepartment.id, department.id)}
          style={{ paddingLeft: 40 }}
          >
          <Checkbox checked={isSubDepartmentSelected(subDepartment.id)} />
          <ListItemText primary={subDepartment.name} />
          </ListItem>
          ))}
          </List>
          </Collapse>
          </React.Fragment>
          ))}
          </List>
          </div>
          );
          };
          
          export default SecondPageComponent2;
