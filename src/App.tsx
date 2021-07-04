import React from 'react';
import { Row, Col, Space } from 'antd';
import SessionForm from './SessionForm';
import PlayerList from './PlayerList';
import { Session } from "./types";

const App = () => {
  const [session, setSession] = React.useState<Session | undefined>(undefined);

  return (
    <Space
      direction="vertical"
      align="center"
      style={{ width: '100vw', marginTop: 30 }}
    >
      <Space direction="vertical">
        {!session ? (
          <Row>
            <Col span={24}>
              <SessionForm onSubmit={setSession} />
            </Col>
          </Row>
        ) : (
          <Row>
            <Col span={24}><PlayerList /></Col>
          </Row>
        )}
      </Space>
    </Space>
  );
}

export default App;
