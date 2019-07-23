import React from 'react';
import PropTypes from 'prop-types';

import Header from './components/header/Header';

const App = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
    </>
  )
};

App.propTypes = {
  children: PropTypes.node,
};

export default App;
