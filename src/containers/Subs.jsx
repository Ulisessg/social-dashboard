import React from 'react';

import SubscribersBySocialNetwork from '../components/SubscribersBySocialNetwork';

class Subs extends React.PureComponent {
  render() {
    return (
      <>
        <SubscribersBySocialNetwork />
        <SubscribersBySocialNetwork />
        <SubscribersBySocialNetwork />
        <SubscribersBySocialNetwork />
      </>
    );
  }
}

export default Subs;
