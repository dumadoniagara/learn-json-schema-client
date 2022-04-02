import './App.css';
import Form from './components/form';
import './style.scss';
import {useSelector, useDispatch} from 'react-redux';
import {
  incrementNumber,
  decrementNumber,
  toZero
} from './redux/actions';

function App(props) {
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  
  return (
    <div className="App">
      <div className='big-title'>Let's Learn about Json Schema</div>
      <Form />
    </div>
  );
}

export default App;
