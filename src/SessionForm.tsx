import { Form, Input, InputNumber, Button } from 'antd';
import { Session } from './types';

interface Props {
  onSubmit: (sessionName: Session) => void;
}

const SessionForm = ({ onSubmit }: Props) => {
  const onFinish = (values: Session) => {
    onSubmit(values);
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      onFinish={onFinish}
      initialValues={{ numCourts: 6, sessionName: '' }}
    >
      <Form.Item
        label="Session Name"
        name="sessionName"
        rules={[{ required: true, message: 'Please input your session name!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="No. of courts"
        name="numCourts"
        rules={[{ required: true, message: 'Please input the number of courts!' }]}
      >
        <InputNumber />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Go
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SessionForm;
