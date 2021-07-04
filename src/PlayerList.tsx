import React from 'react';
import { List, Typography } from 'antd';
import { SmileTwoTone } from '@ant-design/icons';
import NewPlayerForm from "./NewPlayerForm";
import { Player } from "./types";

const PlayerList = () => {
  const [players, setPlayers] = React.useState<Player[]>([]);

  const addPlayer = (newPlayer: Player) => setPlayers((prev) => [...prev, newPlayer]);

  return (
    <>
      <List>
        {players.map((player) => (
          <List.Item key={player.name}>
            <List.Item.Meta
              avatar={<SmileTwoTone twoToneColor={player.sex === 'F' ? "#eb2f96" : ""} />}
              title={<Typography.Text>{player.name}</Typography.Text>}
            />
          </List.Item>
        ))}
      </List>
      <NewPlayerForm onSubmit={addPlayer} />
    </>
  );
};

export default PlayerList;
