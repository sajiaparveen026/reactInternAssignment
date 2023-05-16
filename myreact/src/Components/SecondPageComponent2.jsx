import React, { useState } from 'react';
import { Checkbox, Collapse, List, ListItem, ListItemText } from '@mui/material';

const SecondPageComponent2 = () => {
  const departments = [
    {
      id: 1,
      name: 'Department 1',
      subDepartments: [
        { id: 1, name: 'Sub Department 1' },
        { id: 2, name: 'Sub Department 2' },
      ],
    },
    {
      id: 2,
      name: 'Department 2',
      subDepartments: [
        { id: 3, name: 'Sub Department 3' },
        { id: 4, name: 'Sub Department 4' },
      ],
    },
    {
      id: 3,
      name: 'Department 3',
      subDepartments: [
        { id: 1, name: 'Sub Department 5' },
        { id: 2, name: 'Sub Department 6' },
      ],
    },
    {
      id: 4,
      name: 'Department 4',
      subDepartments: [
        { id: 3, name: 'Sub Department 7' },
        { id: 4, name: 'Sub Department 8' },
      ],
    },
  ];

  
  const [selectedDepartments, setSelectedDepartments] = useState([]);
  const [selectedSubDepartments, setSelectedSubDepartments] = useState([]);

  const handleDepartmentToggle = (departmentId) => {
    if (selectedDepartments.includes(departmentId)) {
      setSelectedDepartments(selectedDepartments.filter((id) => id !== departmentId));
      setSelectedSubDepartments(selectedSubDepartments.filter((id) => id !== departmentId));
    } else {
      setSelectedDepartments([...selectedDepartments, departmentId]);
      setSelectedSubDepartments([...selectedSubDepartments, departmentId]);
    }
  };

  const handleSubDepartmentToggle = (subDepartmentId, departmentId) => {
    if (selectedSubDepartments.includes(subDepartmentId)) {
      setSelectedSubDepartments(selectedSubDepartments.filter((id) => id !== subDepartmentId));
    } else {
      setSelectedSubDepartments([...selectedSubDepartments, subDepartmentId]);

      const department = departments.find((dept) => dept.id === departmentId);
      if (
        department &&
        department.subDepartments.every((subDept) =>
          selectedSubDepartments.includes(subDept.id)
        )
      ) {
        setSelectedDepartments([...selectedDepartments, departmentId]);
      }
    }
  };

  const isDepartmentSelected = (departmentId) => selectedDepartments.includes(departmentId);
  const isSubDepartmentSelected = (subDepartmentId) =>
    selectedSubDepartments.includes(subDepartmentId);

  return <>
      <div style={{display:'flex',justifyContent:'center',alignItems:'center', backgroundColor:'lightcyan'}}>
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
  </>
};

export default SecondPageComponent2;
