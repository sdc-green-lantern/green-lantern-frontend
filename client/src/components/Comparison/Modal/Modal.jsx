import React from 'react';
import PubSub from 'pubsub-js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
// import { x } from '@fortawesome/free-regular-svg-icons';
import modal from './Modal.module.css';

class Modal extends React.Component {
  state = {
    isShown: false,
  };

  componentDidMount() {
    this.token = PubSub.subscribe('showModal', (msg, data) => {
      this.setState({
        isShown: data,
      });
    });
  }

  componentWillUnmount() {
    PubSub.unsubscribe(this.token);
  }

  toggleDisplay = () => {
    const { isShown } = this.state;
    this.setState({ isShown: !isShown });
  };

  render() {
    const { isShown } = this.state;

    return (
      <div className={modal.container} style={{ display: isShown ? 'block' : 'none' }}>
        <button onClick={this.toggleDisplay} type="button">
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>
    );
  }
}

export default Modal;
