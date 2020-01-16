import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class ModalExample extends React.Component {
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

  handlechange = event => {
    // this.setState({ [event.target.name]: event.target.value });
    // console.log(event.target.value)
    // console.log(event.target.name);
  };

  render() {
    return (
      <div className="modal-container">
        <Button
          className="btn-secondary"
          color="danger"
          onClick={this.toggle}
          value="+"
        >
          Ajouter{this.props.buttonLabel}
        </Button>
        <Modal
          isOpen={this.state.modal}
          fade={false}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Add new movie</ModalHeader>
          <ModalBody>
            <input
              class="ground"
              id="imgfilm"
              type="text"
              placeholder="imgfilm..."
              name="url"onChange={this.handlechange}/>

            <input
              class="ground"
              id="name"
              type="text"
              placeholder="name..."
              name="name"
              onChange={this.handlechange}
            />

            <input
              class="ground"
              id="boton"
              type="text"
              placeholder="youtube..."
              name="youtube"
              onChange={this.handlechange}
            />

            <input
              class="ground"
              id="rate"
              type="number"
              max="5"
              placeholder="rates..."
              name="rate"
              onChange={this.handlechange}
            />
          </ModalBody>
          <ModalFooter>
            {/* <Button color="primary" className="add-btn" onClick={() => this.props.add(this.state.addlist)} >validate</Button>{' '} */}
            <Button
              color="primary"
              className="add-btn"
              // onClick={() =>
              //   this.props.handle +
              //   Submit({
              //     // url: this.state.url,
              //     // name: this.state.name,
              //     // youtube: this.state.youtube,
              //     // rate: this.state.rate
              //   })
              // }
            >
              validate
            </Button>{" "}
            <Button color="secondary" className="add-btn" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
export default ModalExample;
