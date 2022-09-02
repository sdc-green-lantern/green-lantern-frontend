import React from 'react';
import PubSub from 'pubsub-js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import instance from '../../../../../axiosConfig.js';
import modal from './Modal.module.css';

class Modal extends React.Component {
  state = {
    isShown: false,
    productName: '',
    comparedProductName: '',
    productFeatures: new Map(),
    comparedFeatures: new Map(),
    features: [],
  };

  async componentDidMount() {
    const { productId } = this.props;
    const { data: { features: productFeatures, name: productName } } = await instance.get(`/products/${productId}`);
    const productFeaturesMap = new Map();
    productFeatures.forEach((feature) => {
      productFeaturesMap.set(feature.feature, feature.value);
    });

    this.token = PubSub.subscribe('showModal', async (msg, data) => {
      const { id, isShown } = data;
      const { data: { features: comparedFeatures, name: comparedProductName } } = await instance.get(`/products/${id}`);

      const comparedFeaturesMap = new Map();
      comparedFeatures.forEach((feature) => {
        comparedFeaturesMap.set(feature.feature, feature.value);
      });

      const comparedFeatureKeys = comparedFeatures.map((featureObj) => featureObj.feature);
      const productFeatureKeys = productFeatures.map((featureObj) => featureObj.feature);

      let features = [...comparedFeatureKeys, ...productFeatureKeys];
      features = new Set(features);
      features = [...features];
      features.push('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k', 'l', 'm');

      this.setState({
        isShown,
        productName,
        comparedProductName,
        comparedFeatures: comparedFeaturesMap,
        productFeatures: productFeaturesMap,
        features,
      });
    })
  }

  componentWillUnmount() {
    PubSub.unsubscribe(this.token);
  }

  toggleDisplay = () => {
    const { isShown } = this.state;
    this.setState({ isShown: !isShown });
  };

  render() {
    const { isShown, features, productName, comparedProductName,
      productFeatures, comparedFeatures } = this.state;

    return (
      <div>
        <div className={modal.mask} style={{ display: isShown ? 'block' : 'none' }} />
        <div
          className={`${modal.container} ${isShown ? modal.active : null}`}
        >
          <div className={modal.head}>
            <div>COMPARING</div>
            <FontAwesomeIcon icon={faXmark} onClick={this.toggleDisplay} className={modal['close-button']} />
          </div>
          <div className={modal.row}>
            <ul>
              <li>
                <div>{productName}</div>
                {features.map((feature) =>
                  (<div key={`p${feature}`}><span>{productFeatures.get(feature) || 'N/A'}</span></div>))}
              </li>
              <li>
                <div>FEATURES</div>
                {features.map((feature) => (<div key={feature}><span>{feature}</span></div>))}
              </li>
              <li>
                <div>{comparedProductName}</div>
                {features.map((feature) =>
                  (<div key={`c${feature}`}><span>{comparedFeatures.get(feature) || 'N/A'}</span></div>))}
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
