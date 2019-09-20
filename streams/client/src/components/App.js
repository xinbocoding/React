import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import StreamList from './streams/streamList';
import StreamEdit from './streams/streamEdit';
import StreamShow from './streams/streamShow';
import StreamCreater from './streams/streamCreater';
import StreamDelete from './streams/streamDelete';
import Headers from './Header';

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <div>
          <Headers />
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/new" exact component={StreamCreater} />
          <Route path="/streams/edit" exact component={StreamEdit} />
          <Route path="/streams/delete" exact component={StreamDelete} />
          <Route path="/streams/show" exact component={StreamShow} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
