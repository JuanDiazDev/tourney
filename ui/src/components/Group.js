import React from 'react'
import './../css/Group.css'
import axios from 'axios'
import Positions from './Positions'
import Entry from './Entry'
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css';
import Match from './Match'

const Group = () => {
    const [playersList, setPlayersList] = React.useState([]);
    const [player, setPlayer] = React.useState({name: '', team: '', matches: 0, 
                                               points: 0, wins: 0, draws: 0, losses: 0});
    const [match, setMatch] = React.useState({teams: ['',''], score: [0, 0]});

    function componentDidMount() {
        refreshList();
    };

    function refreshList() {
        axios
        .get("/api/players/")
        .then((res) => {
            let newList = [...res.data];
            newList.sort((teamA, teamB) => teamB['points'] - teamA['points']);
            setPlayersList(newList)})//setPlayersList(res.data)
        .catch((err) => console.log(err));
    };

    function handleSubmit(item) {
        axios
        .post("/api/players/", item)
        .then((res) => console.log(res.data));
    };

    function handleChange(event){
        event.preventDefault();
        const field = event.target.name;
        const value = event.target.value;
        setPlayer({...player, [field]: value});
    };

    function handleAdd(event) {
        event.preventDefault();
        const newList = playersList.concat(player);
        //handleSubmit(player);
        refreshList();
        setPlayer({name: '', team: '', matches: 0, 
        points: 0, wins: 0, draws: 0, losses: 0});
    };

    function handleNewMatch(event){
        event.preventDefault();
        const field = event.target.name;
        const type = event.target.id === 'local' ? 0 : 1;
        const value = event.target.value;
        let fieldArray = match[field];
        fieldArray[type] = value;
        setMatch({...match, [field]: fieldArray});
    };

    function handleChangePositions(event){
        event.preventDefault();
        if (match['score'][0] === match['score'][1]){
            for (let someTeam of playersList){
                if(someTeam['team'] === match['teams'][0] || someTeam['team'] === match['teams'][1]){
                    someTeam['matches'] += 1;
                    someTeam['draws'] += 1;
                    someTeam['points'] += 1;
                }
            }
        }else{
            for (let someTeam of playersList){
                const winner = match['score'][0] > match['score'][1] ? match['teams'][0] : match['teams'][1];
                if(someTeam['team'] == match['teams'][0] || someTeam['team'] == match['teams'][1]){
                    someTeam['matches'] += 1;
                    if(someTeam['team'] == winner){
                        someTeam['wins'] += 1;
                        someTeam['points'] += 3;
                    }else{
                        someTeam['losses'] += 1;
                    }
                }
            }
        }
        playersList.sort((teamA, teamB) => teamB['points'] - teamA['points']);
    };

    return (
        <Container>
            <div className = "group-container">
                <h1 style = {styles_title}>Laderas Cup</h1>
                <div className = "group">
                    <Entry onAdd = {handleAdd} onChange = {handleChange} />
                    <Match onAdd = {handleChangePositions} onChange = {handleNewMatch}/>
                    <Positions list = {playersList} />
                </div>
            </div>
        </Container>
    );
};

  
const styles_title = {
    color: "white",
    fontSize: "70px"
};

export default Group
