import React from 'react'
import './../css/Group.css'
import axios from 'axios'

const Group = () => {
    const [playersList, setPlayersList] = React.useState([]);
    const [player, setPlayer] = React.useState({player: '', team: ''});

    /*function componentDidMount() {
        refreshList();
    };

    function refreshList() {
        axios
        .get("/api/players/")
        .then((res) => setPlayersList(res.data))
        .catch((err) => console.log(err));
    };

    function handleSubmit() {
        const newList = playersList.concat(player);
        setPlayersList(newList);
        axios
            .put(`/api/players/${player['player']}/`, player['player'])
            .then((res) => refreshList());
        setPlayer({player: '', team: ''});
    };*/

    function handleChange(event){
        const field = event.target.name;
        const value = event.target.value;
        setPlayer({[field]: value});
    };

    function handleAdd() {
        const newList = playersList.concat(player);
        setPlayersList(newList);
        /*setPlayer({player: '', team: ''});*/
    };

    return (
        <div className = "container">
            <div className = "group-container">
                <h1 style = {styles_title}>Laderas Cup</h1>
                <div className = "group">
                    <AddPlayer onAdd = {handleAdd} onChange = {handleChange} />
                    <List list = {playersList} />
                </div>
            </div>
        </div>
    );
};

const AddPlayer = ({onAdd, onChange}) => (
    <form>
        <input type='text' name = 'player' onChange={onChange} />
        <input type='text' name = 'team' onChange={onChange} />
        <button type='text' onClick={onAdd}>
        Add
        </button>
    </form>
);

const List = ({ list }) => (
    <ul>
      {list.map((item) => (
        <li>Player: {item.player} Team: {item.team}</li>
      ))}
    </ul>
  );
  
const styles_title = {
    color: "white",
    fontSize: "70px"
};

export default Group
