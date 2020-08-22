import React from 'react';

import Today from '../components/Today';

class TodayActivity extends React.PureComponent {
  render() {
    return (
      <>
        <section>
          <h1>Overview - Today</h1>
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
