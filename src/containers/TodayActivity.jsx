import React from 'react';

import Today from '../components/Today';

class TodayActivity extends React.PureComponent {
  render() {
    return (
      <>
        <section className='Today'>
          <div className='Container'>
            <h1 className='Today__title'>Overview - Today</h1>
            <Today />
            <Today />
            <Today />
            <Today />
            <Today />
            <Today />
            <Today />
            <Today />
          </div>
        </section>
      </>
    );
  }
}
export default TodayActivity;
