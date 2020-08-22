import React from 'react';

class Today extends React.PureComponent {
  render() {
    return (
      <div>
        <div>
          <p>Page Views</p>
          {/* Dinamic Value */}
          <img src='a' alt='Social Network' />
        </div>
        <div>
          {/* Dinamic Values */}
          <p>87</p>
          <p>⬆ 3%</p>
        </div>
      </div>
    );
  }
}

export default Today;
