import React from 'react';
import ReactDOM from 'react-dom';

class Test extends React.Component {
  render() {
    return <div>
    <h1>Yahallo!!</h1>;
    <p>Test 1 2 3</p>
    </div>
  }
}

ReactDOM.render(<Test />, document.getElementById('root'));

/*
The examples in this tutorial are created using the
create-react-app. Install the create-react-app,
and you will be able to run the same examples on your computer.

In this example we create a component called 'Test'.
The component is rendered in a container called 'root'.
Click the 'index.html' tab to see the container.
*/