import React from 'react';

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Api from './Api/Api';

const App = () => {
  return (
    <div>
      <Header />
      <Api />

      <Footer />
    </div>
  );
};

export default App;
