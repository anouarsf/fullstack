import React from "react";
import { Button, Modal, ModalHeader, Label,FormGroup,Input , ControlLabel, ModalFooter } from "reactstrap";

class Mo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <div className="modal-container">
        <a
          className="btn-ligth"
          color="light"
          onClick={this.toggle}
          value="+"
        >
                <i class='far fa-user'></i>
{this.props.buttonLabel}
        </a>
        <Modal
          isOpen={this.state.modal}
          fade={false}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>   Connexion           </ModalHeader>
         
          <Modal showOverlay={false}>
    <Modal.Header>
        <Modal.Title>
            Modal title
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>
   
    </Modal.Body>
   
</Modal>

          <ModalFooter>


          <a href="/register"> Espace Utilsateur </a>

               
            
            <a href="/login"> Acceder à Dashtok </a>


            
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
export default Mo;

