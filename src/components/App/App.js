import React from 'react';
// import { HashRouter as router, route } from 'react-router-dom';
import SearchView from '../SearchView/SearchView';
// import FavoritePage from '..FavoritePage/FavoritePage';

function App(props) {
  return (
    <div>
        {/* <Router> */}
          <h1>Giphy Search!</h1>
          {/* <Route path="/" exact> */}
          <SearchView/>
          {/* </Route> */}
          {/* <Route path="/favorites"> */}
    {/*   <FavoritePage */}
          {/* </Route> */}
        {/* </Router> */}
    </div>
  );
}

export default App;
