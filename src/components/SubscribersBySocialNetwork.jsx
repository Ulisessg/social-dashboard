import React from 'react';

class SubscribersBySocialNetwork extends React.PureComponent {
  render() {
    return (
      <div className='Subs-container'>
        <div className='Subs-container__info-network'>
          <img
            className='Subs-container__info-network--img'
            src='a'
            alt='Social Network'
          />
          <p className='Subs-container__info-network--user'>@nathanf</p>
        </div>

        <div className='Subs-container__followers'>
          {/*Dinamic Value */}
          <h1 className='Subs-container__followers--total'>
            {Math.round(Math.random() * 1000)}
          </h1>
          {/*Dinamic Value */}
          <p className='Subs-container__followers--title'>Followers</p>
        </div>

        <div className='Subs-container__percentage'>
          {/*Dinamic Value */}
          <img
            className='Subs-container__percentage--img'
            src='a'
            alt='Arrow'
          />
          <p className='Subs-container__percentage--total'>12 Today</p>
        </div>
      </div>
    );
  }
}

export default SubscribersBySocialNetwork;
