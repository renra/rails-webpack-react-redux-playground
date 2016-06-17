import React from 'react';
import ReactDOM from 'react-dom';

import data from './data';
import Table from './table';
import Form from './form';

ReactDOM.render(
  <div>
    <Table data={data} />
    <Form />
  </div>,
  document.getElementById('reactRoot')
);

