import React, { useState } from 'react';
import Dashboard from './Dashboard';
import { Input, Table } from 'antd';
import moment from 'moment';

const Tables = () => {
  const studentColumns = [
    {
      title: 'First Name',
      dataIndex: 'firstName',
      sorter: (a, b) => a.firstName.localeCompare(b.firstName),
    },
    {
      title: 'Last Name',
      dataIndex: 'lastName',
      sorter: (a, b) => a.lastName.localeCompare(b.lastName),
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      filters: [
        { text: 'Male', value: 'male' },
        { text: 'Female', value: 'female' },
      ],
      onFilter: (value, record) => record.gender === value,
    },
    {
      title: 'Date of Birth',
      dataIndex: 'dob',
      sorter: (a, b) => moment(a.dob, 'DD-MM-YYY') - moment(b.dob, 'DD-MM-YYY'),
    },
    {
      title: 'Marks',
      dataIndex: 'marks',
      sorter: (a, b) => a.marks - b.marks,
    },
    {
      title: 'Country',
      dataIndex: 'country',
      sorter: (a, b) => a.country.localeCompare(b.country),
    },
  ];

  const studentsData = [
    {
      firstName: 'Nana',
      lastName: 'Amoako Asare-Ofori',
      gender: 'male',
      dob: '08-07-2000',
      marks: 94,
      country: 'United States',
    },
    {
      firstName: 'Kelvin',
      lastName: 'Asare',
      gender: 'male',
      dob: '01-07-2000',
      marks: 75,
      country: 'United States',
    },
    {
      firstName: 'Aaron',
      lastName: 'Debrah-Larbi',
      gender: 'male',
      dob: '05-11-1999',
      marks: 72,
      country: 'India',
    },
    {
      firstName: 'Kayla',
      lastName: 'Ofori-Asare',
      gender: 'female',
      dob: '05-12-1999',
      marks: 62,
      country: 'India',
    },
    {
      firstName: 'Jason',
      lastName: 'ofori-Asare',
      gender: 'male',
      dob: '11-10-2000',
      marks: 62,
      country: 'India',
    },
    {
      firstName: 'Raphael',
      lastName: 'Gyadu-Larbi',
      gender: 'male',
      dob: '05-10-1999',
      marks: 88,
      country: 'Australia',
    },

    {
      firstName: 'Nana',
      lastName: 'Kwame',
      gender: 'male',
      dob: '05-10-2000',
      marks: 88,
      country: 'Australia',
    },
    // Add more student data here...
  ];

  const [tableData, setTableData] = useState(studentsData);

  const searchTable = (searchKey) => {
    const tempData = studentsData.filter((student) =>
      JSON.stringify(student).toLowerCase().includes(searchKey.toLowerCase())
    );
    setTableData(tempData);
  };

  return (
    <Dashboard>
      <div className="tables">
        <h3>Debby's Table</h3>
        <Input
          placeholder="Search students"
          style={{ width: '40%' }}
          onChange={(e) => searchTable(e.target.value)}
        />
        <Table columns={studentColumns} dataSource={tableData} />
      </div>
    </Dashboard>
  );
};

export default Tables;
