import { Segment } from 'semantic-ui-react'
import Main from './components/Main'
import './App.css';

function App() {
  return (
    <>
      <div className="App">
        <Segment.Group raised>
          <Segment><h1>HVC</h1></Segment>
        </Segment.Group>
      </div>
      <Main />
    </>
  );
}

export default App;