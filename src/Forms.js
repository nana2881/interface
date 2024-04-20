import React from 'react';
import Dashboard from './Dashboard';
import { Button, DatePicker, Form, Input, Radio, Select } from 'antd';
import TextArea from 'antd/es/input/TextArea';

function submitForm(values) {
  console.log(values);
}

function Forms() {
  return (
    <div>
      <Dashboard>
        <div>
          <h3 className="ml-2">
            <b>Debby Forms with Validation</b>
          </h3>

          <Form layout="vertical" className="p-2 form" onFinish={submitForm}>
            <Form.Item
              label="First Name"
              name={'firstName'}
              required
              rules={[{ required: true, min: 2 }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Last Name"
              name={'lastName'}
              required
              rules={[{ required: true, min: 2 }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Email"
              name={'email'}
              required
              rules={[{ required: true, type: 'email' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Gender"
              name={'gender'}
              required
              rules={[{ required: true }]}
            >
              <Radio.Group>
                <Radio value={'male'}>Male</Radio>
                <Radio value={'female'}>Female</Radio>
              </Radio.Group>
            </Form.Item>

            <Form.Item
              label="Date of Birth"
              name={'dob'}
              required
              rules={[{ required: true }]}
            >
              <DatePicker />
            </Form.Item>

            <Form.Item
              label="Department"
              name={'department'}
              required
              rules={[{ required: true }]}
            >
              <Select>
                <Select.Option
                  key="ict"
                  value={'information and communication technology'}
                >
                  Information & Communication Technology
                </Select.Option>
                <Select.Option key="math" value={'mathematics'}>
                  Mathematics
                </Select.Option>
                <Select.Option key="ss" value={'social studies'}>
                  Social Studies
                </Select.Option>
                <Select.Option key="f" value={'french'}>
                  French
                </Select.Option>
                <Select.Option key="its" value={'integrated science'}>
                  Integrated Science
                </Select.Option>
                <Select.Option key="he" value={'home economics'}>
                  Home Economics
                </Select.Option>
                {/* Add more Select.Option components with unique keys */}
              </Select>
            </Form.Item>

            <Form.Item
              label="Address"
              name={'address'}
              required
              rules={[{ required: true, min: 10 }]}
            >
              <TextArea style={{ width: '100%' }} />
            </Form.Item>

            <Form.Item>
              <Button htmlType="submit" type="primary">
                Register
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Dashboard>
    </div>
  );
}

export default Forms;
