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

  sendInteraction = (module, e) => {
    this.setState({
      element: e.target.localName,
      widget: module,
      time: String(e.timeStamp),
    }, () => {
      axiosConfig.post('/interactions', this.state)
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };

  render() {
    const { render } = this.props;
    return (
      <div>
        {render(this.sendInteraction)}
      </div>
    );
  }
}
export default Tracker;
