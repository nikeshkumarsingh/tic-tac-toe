import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


export const Popup=(player)=>{
const reld=()=>{
    window.location.reload();
}

    return (
        <div style={{ display: 'block',
                      width: 700, 
                      padding: 30 }}>
   
          <Modal.Dialog>
            <Modal.Header closeButton>
              <Modal.Title>
              player {player.player} won
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <div style={{width:"480px"}}><iframe style={{allow:"fullscreen",frameBorder:"0",width:"480",height:"270"}}  src="https://giphy.com/embed/9Tnzp6mvFMibjyYA1v/video"></iframe></div>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={reld} variant="primary">
               Replay
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </div>
      );
}