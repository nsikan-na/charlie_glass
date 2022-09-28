import React from "react";
import { Col, Row, Input, Form, Button, Checkbox } from "antd";
export default function Contact() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <h1 className="h1">Contact</h1>
      <p className="p" style={{ marginBottom: "3%" }}>
        What service can out specialists provide you with today?
      </p>
      <Row style={{ justifyContent: "space-evenly" }}>
        <Col
          style={{
            backgroundColor: "blue",
            color: "white",
            padding: "2%",
          }}
        >
          <Row>Charlie Glass Inc</Row>
          <ul style={{ margin: "0 auto" }}>
            {[
              { title: "Located at ", p: "326 50 st, Brooklyn, NY 11220" },
              { title: "Call us or email us at", p: "917-848-8128" },
              { title: "Open Monday-Friday", p: " 8am - 8pm" },
            ].map((content) => {
              return (
                <li>
                  <div>{content.title}</div>
                  <div>{content.p}</div>
                </li>
              );
            })}
          </ul>
        </Col>
        <Col>
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            {[
              {
                label: "Name",
                name: "name",
                rules: [{ required: true, message: "Please input your name!" }],
              },
              {
                label: "Email",
                name: "email",
                rules: [
                  { required: true, message: "Please input your email!" },
                ],
              },
              {
                label: "Phone Number",
                name: "phoneNumber",
                rules: [
                  {
                    required: true,
                    message: "Please input your phone number!",
                  },
                ],
              },
            ].map((content) => {
              return (
                <Form.Item
                  label={content.label}
                  name={content.name}
                  rules={content.rules}
                >
                  <Input />
                </Form.Item>
              );
            })}
            <Row>
              {[
                { name: "showerDoors", label: "Shower Doors" },
                { name: "shelves", label: "Shelves" },
                { name: "glassPartition", label: "Glass Partition" },
                { name: "storeFronts", label: "Store Fronts" },
              ].map((content) => {
                return (
                  <Form.Item
                    name={content.name}
                    valuePropName="checked"
                    wrapperCol={{ offset: 8, span: 16 }}
                  >
                    <Checkbox>{content.label}</Checkbox>
                  </Form.Item>
                );
              })}
            </Row>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
            <Form.Item
              label="Message"
              name="message"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.TextArea />
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  );
}
