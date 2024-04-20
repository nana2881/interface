import React from 'react';
import Dashboard from './Dashboard';
import { Row, Col } from 'antd';

const Home = () => {
  return (
    <div>
      <Dashboard>
        <Row justify={'center'} className="home">
          <Col lg={10} sm={24}>
            <img
              src="https://images.unsplash.com/photo-1621982400152-883d350ac611?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              height={400}
            />
          </Col>

          <Col lg={24} sm={24}>
            <h3 style={{ color: 'tomato' }}>
              <b>I am Aaron Debrah-Larbi</b>
            </h3>
            <p>
              I am a FullStack web Developer / Freelancer. I use React, Redux as
              Front-End and Node + Express as Backend and Mongo DB as Database
              for web applications, Java, XML, Firebase for Mobile Applications.
              Currently i am looking for an opportunity to work as a frontEnd /
              React Developer or Mern Stack developer
            </p>
          </Col>
        </Row>
      </Dashboard>
    </div>
  );
};

export default Home;
