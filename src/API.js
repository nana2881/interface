import React, { useEffect, useState } from 'react';
import Dashboard from './Dashboard';
import axios from 'axios';
import { Col, Input, Row } from 'antd';

function API() {
  const [soccer, setSoccer] = useState([]);
  const [dupsoccer, setdupsoccer] = useState([]);
  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(
          'https://api-football-v1.p.rapidapi.com/v3/timezone'
        );
        setSoccer(response.data.soccer);
        setdupsoccer(response.data.soccer);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }

    getData();
  }, []);

  return (
    <Dashboard>
      <div>
        <Input />
        <Row gutter={16}>
          {soccer.map((soccer) => {
            return (
              <Col lg={5} sm={24}>
                <h3>{soccer.name}</h3>
                <img src={soccer} alt="" height={200}/>
                <h4>id:{soccer.idSoccer}</h4>
              </Col>
            );
          })}
        </Row>
      </div>
    </Dashboard>
  );
}

export default API;
