import React from 'react';

class SuscriberCount extends React.PureComponent {
  render() {
    return (
      <div className='Header__subs'>
        <h1 className='Header__subs--title'>Social Media Dashboard</h1>
        <p className='Header__subs--total'>Total followers:23,004</p>
      </div>
    );
  }
}

export default SuscriberCount;
