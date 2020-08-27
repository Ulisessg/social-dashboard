//@ts-check
import React from 'react';

class SubscribersBySocialNetwork extends React.PureComponent {
  render() {
    const { SocialNetworkImg } = this.props;
    const { Arrow } = this.props;
    const { Subs } = this.props;
    const { Activity } = this.props;
    return (
      <div className='Subs-network'>
        <div className='Subs-network__info-network'>
          <img
            className='Subs-network__info-network--img'
            src={SocialNetworkImg}
            alt='Social Network'
          />
          <p className='Subs-network__info-network--user'>@nathanf</p>
        </div>

        <div className='Subs-network__followers'>
          <h1 className='Subs-network__followers--total'>{Subs}</h1>

          <p className='Subs-network__followers--title'>Followers</p>
        </div>

        <div className='Subs-network__percentage'>
          <img
            className='Subs-network__percentage--img'
            src={Arrow}
            alt='Arrow'
          />
          <p className='Subs-container__percentage--total'>{Activity} Today</p>
        </div>
      </div>
    );
  }
}

export default SubscribersBySocialNetwork;
