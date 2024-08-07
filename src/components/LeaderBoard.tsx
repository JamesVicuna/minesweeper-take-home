import { useState } from "react";
import { Table } from "evergreen-ui";

import { useQuery } from "@apollo/client";
import { gql } from "../__generated__";

const LEADERBOARD = gql(`
  query Leaderboard {
  leaderboard {
    id
    user
    rows
    columns
    bombs
    time
    createdAt
  }
}
  `);

const profiles = [
  {
    id: 1,
    name: "james is here and i want ot make this so long that it shows",
    lastActivity: "yesterday",
    ltv: "idk what this is",
  },
  {
    id: 2,
    name: "donald",
    lastActivity: "today",
    ltv: "idk what this is",
  },
  {
    id: 3,
    name: "obama",
    lastActivity: "yesterday",
    ltv: "idk what this is",
  },
  {
    id: 3,
    name: "obama",
    lastActivity: "yesterday",
    ltv: "idk what this is",
  },
  {
    id: 3,
    name: "obama",
    lastActivity: "yesterday",
    ltv: "idk what this is",
  },
  {
    id: 3,
    name: "obama",
    lastActivity: "yesterday",
    ltv: "idk what this is",
  },
  {
    id: 3,
    name: "obama",
    lastActivity: "yesterday",
    ltv: "idk what this is",
  },
  {
    id: 3,
    name: "obama",
    lastActivity: "yesterday",
    ltv: "idk what this is",
  },
  {
    id: 3,
    name: "obama",
    lastActivity: "yesterday",
    ltv: "idk what this is",
  },
  {
    id: 3,
    name: "obama",
    lastActivity: "yesterday",
    ltv: "idk what this is",
  },
];

export const LeaderBoard = () => {

    const [headDisplay, setHeadDisplay] = useState('Score')

    const {loading, error, data} = useQuery(LEADERBOARD)

    console.log(data?.leaderboard)

    const handleClick = () => {
        setHeadDisplay('hello')
    }
    if (loading) {
      console.log('LOADING')
      return "loading"
    }

    if (error) {
      return "error"
    }

  return (
    <div className="m-12 flex flex-col">
      <Table>
        <Table.Head>
          <Table.SearchHeaderCell />
          <Table.TextHeaderCell onClick={handleClick}>{headDisplay}</Table.TextHeaderCell>
        </Table.Head>
        <Table.Body height={"360px"}>
          {data?.leaderboard?.map((profile) => (
            <Table.Row key={profile?.id}>
              <Table.TextCell>{profile?.user}</Table.TextCell>
              <Table.TextCell isNumber>{profile?.time}</Table.TextCell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};
