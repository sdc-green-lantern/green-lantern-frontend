import React from 'react';
import PubSub from 'pubsub-js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
// import { x } from '@fortawesome/free-regular-svg-icons';
import modal from './Modal.module.css';

class Modal extends React.Component {
  state = {
    isShown: false,
    comparedId: null,
    features: ['a', 'c', 'b', 'aaaaaaaa', 'ccccccc', 'bbbbbb'],
  };

  componentDidMount() {
    const { productId } = this.props;
    this.token = PubSub.subscribe('showModal', (msg, data) => {
      const { isShown, id } = data;
      console.log(data, productId);
      this.setState({
        isShown,
        comparedId: id,
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
    const { isShown, features } = this.state;

    return (
      <div className={modal.container} style={{ display: isShown ? 'block' : 'none' }}>
        <div className={modal.head}>
          <div>COMPARING</div>
          <FontAwesomeIcon icon={faXmark} onClick={this.toggleDisplay} className={modal['close-button']} />
        </div>
        <ul className={modal.row}>
          <li>
            <div>product1</div>
            {features.map((feature) => (<div>{feature}</div>))}
          </li>
          <li>
            <div>feature</div>
            {features.map((feature) => (<div>{feature}</div>))}
          </li>
          <li>
            <div>product3</div>
            {features.map((feature) => (<div>{feature}</div>))}
          </li>
        </ul>
      </div>
    );
  }
}

export default Modal;
