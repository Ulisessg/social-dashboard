import React from 'react';

class Today extends React.PureComponent {
  render() {
    return (
      <div className='Today-container'>
        <div className='Today-container__network'>
          {/* Dinamic Title */}
          <p className='Today-container__network--title'>Page Views</p>

          {/* Dinamic Value */}
          <img
            className='Today-container__network--image'
            src='a'
            alt='Social Network'
          />
        </div>

        <div className='Today-container__numbers'>
          {/* Dinamic Values */}
          <p className='Today-container__numbers--total'>87</p>
          <p className='Today-container__numbers--percentage'>⬆ 3%</p>
        </div>
      </div>
    );
  }
}

export default Today;
