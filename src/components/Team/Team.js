import React from 'react';
import "./Team.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faDollarSign, faUsers } from '@fortawesome/free-solid-svg-icons';


const Team = (props) => {
    const teams = props.newTeam;
    const totalBudget = teams.reduce((total, player)=>total + +player.salary,0)
    return (
        <div className = "NewTeam">
            
            <table>
                <tr>
                   <th><FontAwesomeIcon icon={faUsers} />Total Players:</th>
                   <th>{teams.length} (OneTime Only)</th>
                </tr>
                    {
                        teams.map((player => 
                        <tr>
                            <td>
                                <FontAwesomeIcon icon={faUser} />{player.name}
                            </td>
                            <td>
                                {player.salary} Tk.
                            </td>
                        </tr>))
                    }

                    <tr>
                        <td><h6><FontAwesomeIcon icon={faDollarSign} />Total Budget:</h6></td>
                        <td><h6>{totalBudget} Tk.</h6></td>
                    </tr>
                
            </table>

            
        </div>
    );
};

export default Team;