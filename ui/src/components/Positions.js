import React from 'react'
import Table from 'react-bootstrap/Table'

const Positions = ({list}) => {
    return (
        <Table striped hover variant = "light">
            <thead>
                <tr>
                    <th>Position</th>
                    <th>Player</th>
                    <th>Team</th>
                    <th>Matches</th>
                    <th>Points</th>
                    <th>Wins</th>
                    <th>Draws</th>
                    <th>Losses</th>
                </tr>
            </thead>
            <tbody>
                {list.map((item, position) => (
                    <tr>
                        <td>{position+1}</td>
                        <td>{item.name}</td>
                        <td>{item.team}</td>
                        <td>{item.matches}</td>
                        <td>{item.points}</td>
                        <td>{item.wins}</td>
                        <td>{item.draws}</td>
                        <td>{item.losses}</td>
                    </tr>
                ))}
            </tbody>
         </Table>
    );
}

export default Positions
