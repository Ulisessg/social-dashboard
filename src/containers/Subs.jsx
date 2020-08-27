import React from 'react';

import SubscribersBySocialNetwork from '../components/SubscribersBySocialNetwork';

import '../styles/subs.styl';

import FacebookImg from '../../images/icon-facebook.svg';
import InstagramImg from '../../images/icon-instagram.svg';
import TwitterImg from '../../images/icon-twitter.svg';
import YoutubeImg from '../../images/icon-youtube.svg';

import Up from '../../images/icon-up.svg';
import Down from '../../images/icon-down.svg';

class Subs extends React.PureComponent {
  render() {
    return (
      <>
        <section className='Subs'>
          <div className='Container-subs'>
            <SubscribersBySocialNetwork
              SocialNetworkImg={FacebookImg}
              Subs={1987}
              Arrow={Up}
              Activity={12}
            />
            <SubscribersBySocialNetwork
              SocialNetworkImg={InstagramImg}
              Subs={1044}
              Arrow={Up}
              Activity={89}
            />
            <SubscribersBySocialNetwork
              SocialNetworkImg={TwitterImg}
              Subs={11}
              Arrow={Up}
              Activity={1099}
            />
            <SubscribersBySocialNetwork
              SocialNetworkImg={YoutubeImg}
              Subs={8239}
              Arrow={Down}
              Activity={144}
            />
          </div>
        </section>
      </>
    );
  }
}

export default Subs;
