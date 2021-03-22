import React from 'react';
import "./Player.css";
import { Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faUserPlus, faUser, faDollarSign } from '@fortawesome/free-solid-svg-icons';


const Player = (props) => {
    const {name, img, team, salary} = props.player;
    const clickEvent = props.clickEvent;
    const style = {width:"300px"};
    return (
        <div className = "Player">
            <Card style={style}>
                <Card.Img variant="top" src={img}/>
                <Card.Body>
                    <Card.Title>
                        
                        <p>
                            <FontAwesomeIcon icon={faUser} />
                            {name}
                        </p>
                    </Card.Title>
                    <p><FontAwesomeIcon icon={faUsers} /> {team}</p>
                    <h6><FontAwesomeIcon icon={faDollarSign} />{salary} Tk.</h6>
                    <Button onClick={()=>clickEvent(props.player)} variant="danger">
                        <FontAwesomeIcon icon={faUserPlus} />
                        Add To Team
                    </Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Player;