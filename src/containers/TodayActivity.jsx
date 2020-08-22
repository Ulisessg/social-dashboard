import React from 'react';

import Today from '../components/Today';

class TodayActivity extends React.PureComponent {
  render() {
    return (
      <>
        <section className='Today'>
          <h1 className='Today__title'>Overview - Today</h1>
          <Today />
          <Today />
          <Today />
          <Today />
          <Today />
          <Today />
          <Today />
          <Today />
        </section>
      </>
    );
  }
}
export default TodayActivity;
