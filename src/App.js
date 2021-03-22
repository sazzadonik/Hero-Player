import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import Player from './components/Player/Player';
import Team from './components/Team/Team';
import players from "./fakeData/data"

function App() {
  const [allPlayer, setPlayers] = useState([]);
  useEffect(()=>{
    setPlayers(players)
  });
  
  const [newTeam, setNewTeam] = useState([]);
  const clickEvent = (player) => {
    const flag = newTeam.includes(player);
    if(!flag){
      const addPlayer = [...newTeam, player];
      setNewTeam(addPlayer);
    }
  };

  
  return (
    <div className="App">
       <Nav></Nav>
        <div className="Container">
     
        <div className="AllPlayerSection">
          {
            allPlayer.map(player => <Player player = {player} clickEvent = {clickEvent}></Player>)
          }
        </div>
        <div className="NewTeamSection">
          <Team newTeam = {newTeam}></Team>
        </div>
      
      </div>
    </div>
  );
}

export default App;
