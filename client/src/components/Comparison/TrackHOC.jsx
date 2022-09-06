import React from 'react';
import axiosConfig from '../../../../axiosConfig.js';

export const sendData = (module, e) => {
  // console.log(e.target.localName, module, e.timeStamp);
  const state = {
    element: e.target.localName,
    widget: module,
    time: String(e.timeStamp),
  };

  axiosConfig.post('/interactions', state)
    .then((response) => {
      console.log(response.data, JSON.parse(response.config.data));
    })
    .catch((err) => {
      console.log(err);
    });
};

export default function withTracker(WrappedComponent, sendInteraction = sendData) {
  // eslint-disable-next-line react/function-component-definition
  return (props) => <WrappedComponent sendInteraction={sendInteraction} {...props} />;
}
