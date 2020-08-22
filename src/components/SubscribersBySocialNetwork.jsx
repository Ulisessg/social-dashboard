import React from 'react';

class SubscribersBySocialNetwork extends React.PureComponent {
  render() {
    return (
      <div>
        <div>
          <img src='a' alt='Social Network' />
          <p>@nathanf</p>
        </div>
        <div>
          {/*Dinamic Value */}
          <h1>{Math.round(Math.random() * 1000)}</h1>
          {/*Dinamic Value */}
          <p>Followers</p>
        </div>
        <div>
          {/*Dinamic Value */}
          <p>
            {/*Dinamic Value */}
            <span> ⬆ </span>
            12 Today
          </p>
        </div>
      </div>
    );
  }
}

export default SubscribersBySocialNetwork;
