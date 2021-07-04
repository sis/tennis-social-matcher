import { Form, Input, Button, Radio } from 'antd';
import { Player } from './types';

interface Props {
  onSubmit: (values: Player) => void;
}

const NewPlayerForm = ({ onSubmit }: Props) => {
  const [form] = Form.useForm();

  const onFinish = (values: Player) => {
    onSubmit(values);
    form.resetFields(['name']);
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ name: '', sex: 'F' }}
      form={form}
      onFinish={onFinish}
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: 'Please input your name!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Sex"
        name="sex"
        rules={[{ required: true, message: 'Please input your sex!' }]}
      >
        <Radio.Group>
          <Radio.Button value="F">Female</Radio.Button>
          <Radio.Button value="M">Male</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Add
        </Button>
      </Form.Item>
    </Form>
  );
};

export default NewPlayerForm;
