import React from 'react';
import axiosConfig from '../../../../axiosConfig.js';

class Tracker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      element: '',
      widget: '',
      time: '',
    };
  }

  sendInteraction = () => {
    const { element, widget, time } = this.state;
    axiosConfig.post('/interactopms', {
      element,
      widget,
      time,
    })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const { element, widget, time } = this.state;
    const { render } = this.props;
    return (
      <div>
        {render(element, widget, time, this.sendInteraction)}
      </div>
    );
  }
}
export default Tracker;
